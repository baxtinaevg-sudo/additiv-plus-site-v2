<template>
  <section id="products" class="py-24 md:py-32 bg-beige">
    <div class="max-w-container mx-auto px-6 lg:px-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Каталог</span>
        <h2 class="mt-4 font-display text-section font-light text-graphite fade-up">Наша продукция</h2>
        <div class="section-divider mx-auto mt-6 fade-up"></div>
      </div>

      <!-- Category tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 fade-up">
        <button
          v-for="(cat, idx) in categories"
          :key="idx"
          @click="activeCategory = idx"
          class="px-6 py-3 rounded-full font-body text-sm tracking-wider transition-all duration-500 border"
          :class="activeCategory === idx
            ? 'bg-graphite text-champagne-light border-graphite'
            : 'bg-transparent text-graphite border-border hover:border-champagne'"
          data-cursor="pointer"
        >
          {{ cat.title }}
        </button>
      </div>

      <!-- Active category content -->
      <div class="fade-up">
        <!-- Category description -->
        <p class="text-center text-muted font-body text-base mb-10 max-w-2xl mx-auto leading-relaxed">
          {{ categories[activeCategory].description }}
        </p>

        <!-- Subgroups grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(sub, si) in categories[activeCategory].subgroups"
            :key="si"
            class="group relative p-8 md:p-10 rounded-2xl border border-border bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-champagne/5"
            data-cursor="pointer"
          >
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500">
              <component :is="sub.icon" />
            </div>

            <!-- Content -->
            <h3 class="font-display text-xl font-medium text-graphite mb-3">{{ sub.title }}</h3>
            <p v-if="sub.description" class="text-sm text-muted font-body leading-relaxed">{{ sub.description }}</p>
            <p v-else class="text-sm text-muted/50 font-body italic">Подробности скоро</p>

            <!-- Hover line -->
            <div class="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        <!-- Empty state for categories without subgroups -->
        <div
          v-if="categories[activeCategory].subgroups.length === 0"
          class="text-center py-16"
        >
          <div class="text-muted/40 font-display text-2xl font-light mb-4">Раздел в разработке</div>
          <p class="text-muted/60 font-body text-sm">Информация о продукции скоро появится</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

const activeCategory = ref(0)

// Icons
const IconFlask = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
}

const IconDrop = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 3c0 0-6 6.5-6 11a6 6 0 1012 0c0-4.5-6-11-6-11z' })
    ])
  }
}

const IconBolt = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ])
  }
}

const IconShield = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
}

const IconCube = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' })
    ])
  }
}

const IconCog = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
}

const IconLayers = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
    ])
  }
}

const IconWind = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' })
    ])
  }
}

const categories = [
  {
    title: 'Добавки для сухих строительных смесей',
    description: 'Комплексные решения для модификации сухих строительных смесей — от штукатурок и шпатлёвок до плиточных клеев и ремонтных составов.',
    subgroups: [
      {
        icon: IconCube,
        title: 'Экстракел (Extracell)',
        description: 'Эфиры целлюлозы для водоудержания, реологии и удобоукладываемости смесей.',
      },
      {
        icon: IconLayers,
        title: 'Форбокрит (Forbocrete)',
        description: 'Реологические добавки для управления вязкостью и текучестью.',
      },
      {
        icon: IconDrop,
        title: 'МЭПФ',
        description: 'Суперпластификаторы для повышения подвижности и снижения водоцементного отношения.',
      },
      {
        icon: IconWind,
        title: 'РЕПОР (Reobond)',
        description: 'Противоусадочные добавки для снижения усадки и трещинообразования.',
      },
      {
        icon: IconShield,
        title: 'РЕГИОПОР (Regopor)',
        description: 'Воздухововлекающие добавки для повышения морозостойкости.',
      },
      {
        icon: IconBolt,
        title: 'ЛАОЛИН (Laolin)',
        description: 'Ускорители для сокращения сроков схватывания и твердения.',
      },
      {
        icon: IconCog,
        title: 'Специальные добавки',
        description: 'Функциональные добавки для специальных свойств смесей.',
      },
    ],
  },
  {
    title: 'Добавки для лакокрасочной промышленности',
    description: 'Специализированные добавки для производства лакокрасочных материалов с заданными характеристиками.',
    subgroups: [
      {
        icon: IconDrop,
        title: 'Реологические модификаторы',
        description: 'Управление вязкостью и предотвращение седиментации пигментов.',
      },
      {
        icon: IconWind,
        title: 'Пеногасители и деаэраторы',
        description: 'Удаление воздушных пузырьков и предотвращение пенообразования.',
      },
      {
        icon: IconLayers,
        title: 'Диспергаторы',
        description: 'Стабилизация пигментов и наполнителей в красочных системах.',
      },
      {
        icon: IconShield,
        title: 'UV-стабилизаторы',
        description: 'Защита от ультрафиолетового излучения и выцветания.',
      },
    ],
  },
  {
    title: 'Добавки для пластмасс и полимеров',
    description: 'Химические добавки для переработки пластмасс и производства полимерных изделий.',
    subgroups: [
      {
        icon: IconDrop,
        title: 'Пластификаторы',
        description: 'Повышение эластичности и гибкости полимерных материалов.',
      },
      {
        icon: IconShield,
        title: 'Стабилизаторы',
        description: 'Термическая и световая стабилизация при переработке.',
      },
      {
        icon: IconFlask,
        title: 'Антипирены',
        description: 'Снижение горючести полимерных материалов.',
      },
      {
        icon: IconBolt,
        title: 'Нуклеаторы',
        description: 'Контроль кристаллизации и улучшение оптических свойств.',
      },
    ],
  },
  {
    title: 'Добавки для РТИ и каучука',
    description: 'Химические добавки для резинотехнической промышленности и производства каучуковых изделий.',
    subgroups: [
      {
        icon: IconBolt,
        title: 'Вулканизирующие агенты',
        description: 'Серные и пероксидные системы для вулканизации резины.',
      },
      {
        icon: IconDrop,
        title: 'Ускорители вулканизации',
        description: 'Сокращение времени вулканизации и улучшение свойств.',
      },
      {
        icon: IconShield,
        title: 'Антиоксиданты',
        description: 'Защита резины от старения и окислительного разрушения.',
      },
      {
        icon: IconLayers,
        title: 'Активаторы наполнителей',
        description: 'Улучшение взаимодействия между каучуком и наполнителями.',
      },
    ],
  },
  {
    title: 'Гибридные клеи и герметики',
    description: 'Гибридные клеевые составы и герметики для строительных и промышленных применений.',
    subgroups: [
      {
        icon: IconLayers,
        title: 'MS-полимеры',
        description: 'Гибридные клеи на основе модифицированных силанов.',
      },
      {
        icon: IconShield,
        title: 'Полиуретановые герметики',
        description: 'Эластичные уплотнители для строительных швов.',
      },
      {
        icon: IconDrop,
        title: 'Эпоксидные системы',
        description: 'Высокопрочные клеи для конструкционных соединений.',
      },
    ],
  },
]
</script>