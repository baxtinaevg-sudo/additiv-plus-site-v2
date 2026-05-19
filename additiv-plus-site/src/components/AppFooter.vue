<template>
  <footer class="py-12 bg-graphite border-t border-champagne/10">
    <div class="max-w-container mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        <!-- Logo & copyright -->
        <div class="flex flex-col items-center md:items-start gap-3">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Аддитив Плюс" class="h-8 w-auto opacity-80" />
            <span class="font-display text-lg text-beige/80 font-medium">Аддитив Плюс</span>
          </div>
          <p class="text-xs text-champagne-light/40 font-body">
            © {{ new Date().getFullYear() }} ООО «Аддитив Плюс». Все права защищены.
          </p>
        </div>

        <!-- Юридическая информация -->
        <div class="flex flex-col gap-2">
          <span class="text-sm font-display text-beige/60 font-medium">Реквизиты</span>
          <p class="text-xs text-champagne-light/50 font-body">ИНН 5036165686</p>
          <p class="text-xs text-champagne-light/50 font-body">ОГРН 1175074003367</p>
          <p class="text-xs text-champagne-light/50 font-body">117405, Москва, ул. Дорожная, д. 60А, стр. 1</p>
        </div>

        <!-- Документы -->
        <div class="flex flex-col gap-2">
          <span class="text-sm font-display text-beige/60 font-medium">Документы</span>
          <a href="#privacy" class="text-xs text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body">
            Политика конфиденциальности
          </a>
          <a href="#terms" class="text-xs text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body">
            Пользовательское соглашение
          </a>
        </div>

        <!-- Навигация -->
        <div class="flex flex-col gap-2">
          <span class="text-sm font-display text-beige/60 font-medium">Навигация</span>
          <a v-for="link in links" :key="link.href" :href="link.href"
             class="text-xs text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { href: '#products', label: 'Продукция' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
]
</script>
