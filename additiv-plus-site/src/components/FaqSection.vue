<template>
  <section id="faq" class="py-24 md:py-32 bg-graphite relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-champagne/3 rounded-full blur-3xl"></div>

    <div class="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">FAQ</span>
        <h2 class="mt-4 font-display text-section font-light text-beige fade-up">Частые вопросы</h2>
        <div class="section-divider mx-auto mt-6"></div>
      </div>

      <!-- Accordion -->
      <div class="space-y-4">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="border border-champagne/10 rounded-xl overflow-hidden transition-all duration-500 fade-up"
          :class="openIndex === i ? 'bg-champagne/5' : 'bg-transparent hover:bg-champagne/3'"
        >
          <button
            @click="openIndex = openIndex === i ? -1 : i"
            class="w-full flex items-center justify-between px-6 py-5 text-left"
            data-cursor="pointer"
          >
            <span class="font-display text-lg md:text-xl font-light text-beige pr-4">{{ item.question }}</span>
            <svg
              class="w-5 h-5 text-champagne shrink-0 transition-transform duration-500"
              :class="openIndex === i ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            class="overflow-hidden transition-all duration-500"
            :class="openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <p class="px-6 pb-5 text-champagne-light/60 font-body text-base leading-relaxed">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(-1)

const faqItems = [
  {
    question: 'Какие добавки вы производите?',
    answer: 'Мы производим широкий спектр химических добавок для сухих строительных смесей, лакокрасочной промышленности, РТИ и каучука, а также гибридные клеи и герметики. Наш ассортимент включает эфиры целлюлозы, пластификаторы, ускорители, замедлители, пеногасители и комплексные модификаторы.',
  },
  {
    question: 'Можно ли заказать образцы для тестирования?',
    answer: 'Да, мы предоставляем бесплатные образцы всей продукции для лабораторных испытаний. Свяжитесь с нами через форму на сайте или по телефону, и наши специалисты подберут оптимальные образцы под ваши задачи.',
  },
  {
    question: 'Как происходит разработка рецептуры?',
    answer: 'Процесс начинается с анализа ваших требований и условий применения. Наши лаборатории проводят серию испытаний, подбирают оптимальный состав и предоставляют полную документацию с рекомендациями по применению. Средний срок разработки — от 2 до 4 недель.',
  },
  {
    question: 'Какова минимальная партия заказа?',
    answer: 'Минимальная партия зависит от типа продукции и обсуждается индивидуально. Мы гибко подходим к потребностям клиентов — от небольших пробных партий до крупных промышленных объёмов.',
  },
  {
    question: 'Предоставляете ли вы техническую поддержку?',
    answer: 'Да, мы обеспечиваем полное экспертное сопровождение на всех этапах — от подбора добавок до внедрения в производство. Наши специалисты готовы выехать на ваш объект для помощи в настройке процессов.',
  },
  {
    question: 'Есть ли сертификация на продукцию?',
    answer: 'Вся наша продукция проходит строгий контроль качества и имеет необходимые сертификаты соответствия ГОСТ. Лабораторные испытания проводятся на собственной базе с использованием уникального оборудования.',
  },
]
</script>