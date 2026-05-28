<template>
  <section class="py-24 md:py-32 bg-beige relative">
    <div class="max-w-container mx-auto px-6 lg:px-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Доверие</span>
        <h2 class="mt-4 font-display text-section font-light text-graphite fade-up">Сертификаты и партнёры</h2>
        <div class="section-divider mx-auto mt-6 fade-up"></div>
      </div>

      <!-- Certificates grid -->
      <div class="mb-16">
        <h3 class="font-display text-2xl text-graphite text-center mb-10 fade-up">Сертификация и стандарты</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(cert, i) in certificates"
            :key="i"
            class="group relative p-6 rounded-xl border border-border bg-white hover:shadow-lg hover:shadow-champagne/10 transition-all duration-500 fade-up"
          >
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-4 bg-champagne/10 rounded-full flex items-center justify-center group-hover:bg-champagne/20 transition-colors duration-500">
              <component :is="cert.icon" />
            </div>
            <!-- Content -->
            <h4 class="font-display text-base font-medium text-graphite text-center">{{ cert.title }}</h4>
            <p class="text-xs text-muted text-center mt-1">{{ cert.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Stats / Trust badges -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
        <div
          v-for="(badge, i) in badges"
          :key="i"
          class="text-center p-6 rounded-xl bg-graphite/5 fade-up"
        >
          <div class="font-display text-4xl md:text-5xl font-light text-champagne">{{ badge.value }}</div>
          <p class="mt-2 text-sm text-muted font-body">{{ badge.label }}</p>
        </div>
      </div>

      <!-- Partners / Clients strip -->
      <div class="fade-up">
        <h3 class="font-display text-2xl text-graphite text-center mb-10">Нам доверяют</h3>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          <div
            v-for="(partner, i) in partners"
            :key="i"
            class="w-32 h-12 md:w-40 md:h-16 bg-graphite/10 rounded-lg flex items-center justify-center"
          >
            <span class="text-sm text-muted font-body">{{ partner }}</span>
          </div>
        </div>
        <p class="text-center text-sm text-muted mt-8">Более 500 компаний по всей России</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const IconGost = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  }
}

const IconIso = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  }
}

const IconLab = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
}

const IconShield = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
}

const certificates = [
  {
    icon: IconGost,
    title: 'ГОСТ',
    desc: 'Полное соответствие',
  },
  {
    icon: IconIso,
    title: 'ISO 9001',
    desc: 'Система менеджмента',
  },
  {
    icon: IconLab,
    title: 'Испытания',
    desc: 'Собственная лаборатория',
  },
  {
    icon: IconShield,
    title: 'Гарантия',
    desc: 'Контроль качества',
  },
]

const badges = [
  { value: '9+', label: 'Лет на рынке' },
  { value: '500+', label: 'Клиентов' },
  { value: '200+', label: 'Наименований' },
  { value: '100%', label: 'ГОСТ' },
]

const partners = [
  'Кнауф', 'Волма', 'Старатели', 'Юнис', 'Лакра', 'Оптимист',
]
</script>
