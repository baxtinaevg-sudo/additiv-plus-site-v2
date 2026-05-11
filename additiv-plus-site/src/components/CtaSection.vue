<template>
  <section id="contact" class="py-24 md:py-32 bg-graphite relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-3xl"></div>

    <div class="max-w-container mx-auto px-6 lg:px-10 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left: Info -->
        <div>
          <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Свяжитесь с нами</span>
          <h2 class="mt-6 font-display text-cta font-light text-beige fade-up">
            Готовы начать<br />сотрудничество?
          </h2>
          <p class="mt-6 text-base md:text-lg text-champagne-light/60 font-body fade-up">
            Оставьте заявку, и наши специалисты подберут оптимальное решение для вашего проекта
          </p>

          <!-- Contact info -->
          <div class="mt-10 space-y-6">
            <div class="flex items-center gap-4 fade-up">
              <div class="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div class="text-champagne/60 text-sm font-body mb-1">Телефон</div>
                <a href="tel:+79154749433" class="text-beige font-display text-lg hover:text-champagne transition-colors" data-cursor="pointer">
                  8-915-474-94-33
                </a>
              </div>
            </div>
            <div class="flex items-center gap-4 fade-up">
              <div class="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-champagne/60 text-sm font-body mb-1">Email</div>
                <a href="mailto:info@additivplus.ru" class="text-beige font-display text-lg hover:text-champagne transition-colors" data-cursor="pointer">
                  info@additivplus.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contact form -->
        <div class="fade-up">
          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Ваше имя"
                required
                class="w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"
              />
            </div>
            <div>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Телефон"
                required
                class="w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"
              />
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"
              />
            </div>
            <div>
              <textarea
                v-model="form.message"
                placeholder="Сообщение"
                rows="4"
                class="w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="magnetic-btn w-full px-10 py-4 bg-champagne text-graphite font-body font-medium text-sm rounded-full hover:bg-champagne-light transition-colors duration-300 tracking-wider"
              data-cursor="pointer"
            >
              <span class="btn-text">{{ submitted ? 'Отправлено ✓' : 'Отправить заявку' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function submitForm() {
  // In production, send to API
  console.log('Form submitted:', form.value)
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', phone: '', email: '', message: '' }
  }, 3000)
}
</script>