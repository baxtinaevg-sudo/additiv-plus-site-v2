<template>
  <section class="py-8 bg-graphite overflow-hidden border-y border-champagne/10">
    <div class="marquee-track">
      <div
        v-for="i in 2"
        :key="i"
        class="flex shrink-0 items-center gap-12 px-6"
      >
        <span
          v-for="(item, j) in items"
          :key="j"
          class="flex items-center gap-4 text-champagne-light/60 font-display text-xl md:text-2xl font-light whitespace-nowrap"
        >
          <span>{{ item }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-champagne/40"></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  'Уникальное оборудование',
  'Собственное производство',
  'Комплексные решения',
  'Разработка составов и рецептур',
  'Полный цикл испытаний',
  'Бесплатные образцы',
  'Сопровождение на всех этапах',
  'Индивидуальный подход',
  'Квалифицированная техподдержка',
]
</script>