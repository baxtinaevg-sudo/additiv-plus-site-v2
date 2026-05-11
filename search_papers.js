const https = require('https');
const fs = require('fs');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'ResearchBot/1.0 (mailto:research@example.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function extractPapers(results) {
  if (!results || !results.results) return [];
  return results.results.map(r => ({
    title: r.title || 'N/A',
    doi: r.doi || 'N/A',
    year: r.publication_year || 'N/A',
    journal: r.primary_location?.source?.display_name || r.raw_source_name || 'N/A',
    authors: (r.authorships || []).slice(0, 5).map(a => a.raw_author_name).join('; '),
    type: r.type || 'N/A',
    cited_by: r.cited_by_count || 0,
    language: r.language || 'N/A',
    is_oa: r.open_access?.is_oa || false,
    oa_url: r.open_access?.oa_url || null,
    volume: r.biblio?.volume || '',
    issue: r.biblio?.issue || '',
    pages: (r.biblio?.first_page && r.biblio?.last_page) ? `${r.biblio.first_page}-${r.biblio.last_page}` : ''
  }));
}

async function main() {
  const searches = [
    { query: 'polycarboxylate ether superplasticizer gypsum hemihydrate', label: 'PCE_gypsum_hemihydrate' },
    { query: 'polycarboxylate superplasticizer gypsum plaster retarder', label: 'PCE_gypsum_plaster' },
    { query: 'polycarboxylate ether superplasticizer history development', label: 'PCE_history' },
    { query: 'polycarboxylate based superplasticizer calcium sulfate', label: 'PCE_calcium_sulfate' },
    { query: 'superplasticizer gypsum wallboard fluidity', label: 'PCE_wallboard' },
    { query: 'поликарбоксилатный пластификатор гипс', label: 'PCE_gypsum_russian' },
    { query: 'polycarboxylatether Fließmittel Gips', label: 'PCE_gypsum_german' },
    { query: 'polycarboxylate superplasticizer stucco gypsum setting', label: 'PCE_stucco_setting' },
    { query: 'PCE adsorption mechanism gypsum mineral', label: 'PCE_adsorption_mechanism' },
    { query: 'polycarboxylate superplasticizer gypsum dispersion rheology', label: 'PCE_rheology' },
  ];

  const allResults = {};
  const allPapers = [];

  for (const s of searches) {
    console.log(`Searching: ${s.label}...`);
    try {
      const url = `https://api.openalex.org/works?search=${encodeURIComponent(s.query)}&per_page=25&sort=relevance_score:desc`;
      const data = await fetchJSON(url);
      const papers = extractPapers(data);
      allResults[s.label] = { total: data.meta?.count || 0, papers };
      allPapers.push(...papers);
      console.log(`  Found: ${data.meta?.count || 0} total, got ${papers.length}`);
      await new Promise(r => setTimeout(r, 600));
    } catch (e) {
      console.error(`  Error for ${s.label}: ${e.message}`);
    }
  }

  // Deduplicate by DOI
  const seen = new Set();
  const unique = allPapers.filter(p => {
    const key = p.doi !== 'N/A' ? p.doi : p.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort by relevance (cited_by as proxy)
  unique.sort((a, b) => b.cited_by - a.cited_by);

  const outputPath = 'C:\\Users\\Нюся\\Desktop\\Исследование\\search_results.json';
  fs.writeFileSync(outputPath, JSON.stringify({ totalUnique: unique.length, searches: allResults, papers: unique }, null, 2), 'utf8');
  console.log(`\nSaved ${unique.length} unique papers to ${outputPath}`);

  // Also create a readable markdown
  let md = '# Результаты поиска научных публикаций\n\n';
  md += `**Дата поиска:** ${new Date().toISOString().split('T')[0]}\n`;
  md += `**Всего уникальных публикаций:** ${unique.length}\n\n`;
  md += '---\n\n';

  for (const s of searches) {
    const res = allResults[s.label];
    if (!res || res.papers.length === 0) continue;
    md += `## ${s.label.replace(/_/g, ' ')} (всего: ${res.total})\n\n`;
    for (const p of res.papers) {
      md += `### ${p.title}\n`;
      md += `- **Год:** ${p.year}\n`;
      md += `- **Журнал:** ${p.journal}\n`;
      md += `- **Авторы:** ${p.authors}\n`;
      md += `- **DOI:** ${p.doi}\n`;
      md += `- **Тип:** ${p.type}\n`;
      md += `- **Цитирований:** ${p.cited_by}\n`;
      md += `- **Язык:** ${p.language}\n`;
      if (p.volume) md += `- **Том/выпуск:** ${p.volume}${p.issue ? '(' + p.issue + ')' : ''}, ${p.pages}\n`;
      if (p.oa_url) md += `- **Открытый доступ:** [PDF](${p.oa_url})\n`;
      md += '\n';
    }
    md += '---\n\n';
  }

  const mdPath = 'C:\\Users\\Нюся\\Desktop\\Исследование\\Результаты_поиска.md';
  fs.writeFileSync(mdPath, md, 'utf8');
  console.log(`Saved readable results to ${mdPath}`);
}

main().catch(console.error);