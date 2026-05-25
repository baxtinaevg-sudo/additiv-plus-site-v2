<template>
  <div class="min-h-screen bg-white flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo and branding -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-champagne/5 border border-champagne/10 mb-4">
          <img
            src="/logo.png"
            alt="Аддитив Плюс"
            class="w-14 h-14 object-contain"
          />
        </div>
        <h1 class="font-display text-3xl text-graphite mb-1">Аддитив Плюс</h1>
        <p class="text-champagne-dark text-sm font-medium tracking-wide">CRM-каталог</p>
      </div>

      <div class="bg-beige/40 rounded-2xl border border-crm-border p-8">
        <h2 class="font-display text-xl text-graphite mb-6 text-center">Выберите пользователя</h2>

        <div class="space-y-3">
          <button
            v-for="user in users"
            :key="user.id"
            @click="login(user.id)"
            class="w-full flex items-center gap-4 p-4 rounded-xl bg-white border border-crm-border hover:border-champagne/40 hover:shadow-sm transition-all duration-200 group"
          >
            <div class="w-11 h-11 rounded-full bg-champagne/10 border border-champagne/10 flex items-center justify-center text-champagne-dark font-semibold text-sm group-hover:bg-champagne/20">
              {{ user.avatar }}
            </div>
            <div class="text-left flex-1">
              <div class="font-medium text-crm-text text-sm">{{ user.name }}</div>
              <div class="text-xs text-muted">{{ roleLabels[user.role] }}</div>
            </div>
            <svg class="w-4 h-4 text-muted group-hover:text-champagne-dark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <p class="text-center text-xs text-muted mt-6">
        MVP-версия. Выбор пользователя без пароля.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

const router = useRouter()
const authStore = useAuthStore()
const { users } = storeToRefs(authStore)

const roleLabels = {
  admin: 'Администратор',
  manager: 'Менеджер продаж',
  director: 'Руководитель',
  accountant: 'Бухгалтер',
}

function login(userId) {
  authStore.login(userId)
  router.push('/')
}
</script>