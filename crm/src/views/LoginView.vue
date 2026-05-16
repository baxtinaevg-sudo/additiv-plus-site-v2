<template>
  <div class="min-h-screen bg-beige flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-10">
        <h1 class="font-display text-4xl text-graphite mb-2">Аддитив Плюс</h1>
        <p class="text-muted text-sm">CRM-система</p>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-crm-border p-8">
        <h2 class="font-display text-2xl text-graphite mb-6 text-center">Выберите пользователя</h2>

        <div class="space-y-3">
          <button
            v-for="user in users"
            :key="user.id"
            @click="login(user.id)"
            class="w-full flex items-center gap-4 p-4 rounded-xl border border-crm-border hover:border-champagne hover:bg-champagne-light/20 transition-all duration-200 group"
          >
            <div class="w-11 h-11 rounded-full bg-champagne/20 flex items-center justify-center text-champagne-dark font-semibold text-sm group-hover:bg-champagne/30">
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