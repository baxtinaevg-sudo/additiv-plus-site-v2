import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'preview.html');
const outputPath = path.join(__dirname, 'catalog-lkm-2026-v2.pdf');

(async () => {
    console.log('Запуск браузера...');
    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            `--user-data-dir=${path.join(os.tmpdir(), 'puppeteer-chrome')}`
        ],
        timeout: 60000
    });
    
    const page = await browser.newPage();
    
    console.log('Загрузка HTML...');
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    await page.goto(fileUrl, {
        waitUntil: 'networkidle0',
        timeout: 60000
    });
    
    console.log('Ожидание шрифтов...');
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 3000));
    
    console.log('Генерация PDF...');
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        scale: 1
    });
    
    console.log('PDF сохранён:', outputPath);
    await browser.close();
    console.log('Готово!');
})();