<template>
  <section id="privacy" class="py-24 md:py-32 bg-beige min-h-screen">
    <div class="max-w-container mx-auto px-6 lg:px-10">
      <div class="max-w-3xl mx-auto">
        <!-- Breadcrumb -->
        <a href="/" class="inline-flex items-center gap-2 text-sm text-champagne hover:text-champagne-dark transition-colors font-body mb-8">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Назад на главную
        </a>

        <!-- Header -->
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase">Юридическая информация</span>
        <h1 class="mt-4 font-display text-4xl md:text-5xl font-light text-graphite">
          Политика конфиденциальности
        </h1>
        <div class="section-divider mt-6 mb-8"></div>

        <!-- Last updated -->
        <p class="text-sm text-muted font-body mb-8">
          Последнее обновление: {{ currentDate }}
        </p>

        <!-- Content -->
        <div class="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">1. Общие положения</h2>
            <p class="text-muted font-body leading-relaxed">
              1.1. Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта ООО «Аддитив Плюс» (далее — Оператор).
            </p>
            <p class="text-muted font-body leading-relaxed">
              1.2. Оператор обязуется соблюдать конфиденциальность персональных данных пользователей и обеспечивать их защиту в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">2. Оператор персональных данных</h2>
            <div class="bg-white p-6 rounded-xl border border-champagne/10">
              <p class="font-display text-graphite mb-2">ООО «Аддитив Плюс»</p>
              <p class="text-muted text-sm font-body">ИНН 5036165686</p>
              <p class="text-muted text-sm font-body">ОГРН 1175074003367</p>
              <p class="text-muted text-sm font-body">117405, Москва, ул. Дорожная, д. 60А, стр. 1</p>
              <p class="text-muted text-sm font-body">Email: info@additivplus.ru</p>
            </div>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">3. Какие данные мы собираем</h2>
            <p class="text-muted font-body leading-relaxed mb-4">
              3.1. На сайте мы собираем следующие персональные данные:
            </p>
            <ul class="list-disc list-inside text-muted font-body space-y-2 ml-4">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Название компании (для обратной связи)</li>
            </ul>
            <p class="text-muted font-body leading-relaxed mt-4 mb-4">
              3.2. В CRM-системе (для зарегистрированных партнёров) могут храниться:
            </p>
            <ul class="list-disc list-inside text-muted font-body space-y-2 ml-4">
              <li>Реквизиты компании (ИНН, Юр. адрес)</li>
              <li>История заказов и сделок</li>
              <li>Документы и договоры</li>
              <li>Заявки в лабораторию и результаты тестов</li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">4. Цели обработки данных</h2>
            <p class="text-muted font-body leading-relaxed mb-4">
              4.1. Персональные данные обрабатываются в следующих целях:
            </p>
            <ul class="list-disc list-inside text-muted font-body space-y-2 ml-4">
              <li>Связь с пользователем по запросу</li>
              <li>Предоставление информации о продукции и услугах</li>
              <li>Обработка заявок и заказов</li>
              <li>Улучшение качества работы сайта</li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">5. Хранение и защита данных</h2>
            <p class="text-muted font-body leading-relaxed mb-4">
              5.1. Персональные данные хранятся на серверах, расположенных в Российской Федерации, в соответствии с требованиями 152-ФЗ.
            </p>
            <p class="text-muted font-body leading-relaxed mb-4">
              5.2. Срок хранения данных:
            </p>
            <ul class="list-disc list-inside text-muted font-body space-y-2 ml-4">
              <li>Заявки с сайта - 3 года</li>
              <li>Данные клиентов CRM - 5 лет после последнего заказа</li>
              <li>Документы и договоры - 5 лет после окончания срока действия</li>
            </ul>
            <p class="text-muted font-body leading-relaxed mt-4">
              5.3. После достижения цели обработки данные уничтожаются или обезличиваются.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">6. Права пользователя (152-ФЗ)</h2>
            <p class="text-muted font-body leading-relaxed mb-4">
              6.1. В соответствии со ст. 152-ФЗ, пользователь имеет право:
            </p>
            <ul class="list-disc list-inside text-muted font-body space-y-2 ml-4">
              <li>Получить информацию об обработке своих данных (бесплатно)</li>
              <li>Требовать уточнения или удаления данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Получить копию своих персональных данных</li>
              <li>Возразить против обработки данных</li>
              <li>Подать жалобу в Роскомнадзор</li>
            </ul>
            <p class="text-muted font-body leading-relaxed mt-4">
              6.2. Для реализации прав направьте письмо на email: info@additivplus.ru
            </p>
            <p class="text-muted font-body leading-relaxed">
              6.3. Ответ будет предоставлен в течение 10 рабочих дней.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">7. Защита данных</h2>
            <p class="text-muted font-body leading-relaxed">
              7.1. Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">8. Третьи лица</h2>
            <p class="text-muted font-body leading-relaxed">
              8.1. Оператор не передаёт персональные данные третьим лицам, за исключением случаев, установленных законодательством РФ.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-medium text-graphite mb-4">9. Изменения политики</h2>
            <p class="text-muted font-body leading-relaxed">
              9.1. Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента размещения на сайте.
            </p>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentDate = new Date().toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
</script>

<style scoped>
.section-divider {
  @apply w-16 h-0.5 bg-champagne/30;
}
</style>
