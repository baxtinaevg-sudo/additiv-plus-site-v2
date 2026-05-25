<template>
  <div class="consent-form">
    <label class="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        v-model="consent"
        :disabled="hasConsented"
        @change="saveConsent"
        class="mt-1 w-4 h-4 rounded border-champagne/30 text-champagne focus:ring-champagne cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <span class="text-sm text-muted font-body flex-1">
        Я согласен на обработку персональных данных в соответствии с
        <a href="/privacy" target="_blank" class="text-champagne hover:text-champagne-dark underline">
          политикой конфиденциальности
        </a>
        <span v-if="hasConsented" class="text-champagne-dark ml-2">
          (согласие дано {{ consentDate }})
        </span>
      </span>
    </label>
    <p v-if="errorMsg" class="text-red-500 text-xs mt-2">{{ errorMsg }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const consent = ref(false)
const hasConsented = ref(false)
const consentDate = ref('')
const errorMsg = ref('')

const CONSENT_KEY = 'additiv_pd_consent'
const DATE_KEY = 'additiv_pd_consent_date'

onMounted(() => {
  const savedConsent = localStorage.getItem(CONSENT_KEY)
  const savedDate = localStorage.getItem(DATE_KEY)

  if (savedConsent === 'true') {
    hasConsented.value = true
    consent.value = true
    consentDate.value = savedDate || ''
  }
})

function saveConsent() {
  if (consent.value) {
    const now = new Date()
    const dateStr = now.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })

    localStorage.setItem(CONSENT_KEY, 'true')
    localStorage.setItem(DATE_KEY, dateStr)

    hasConsented.value = true
    consentDate.value = dateStr
    errorMsg.value = ''

    // Emit event for parent component
    emit('consent-given', { date: now })
  } else {
    errorMsg.value = 'Необходимо согласие для продолжения работы'
  }
}

const emit = defineEmits(['consent-given'])
</script>

<style scoped>
.consent-form input[type="checkbox"]:checked {
  background-color: #B8A080;
  border-color: #B8A080;
}
</style>
