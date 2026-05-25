import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import usersData from '../data/users.json'

// Константы для auto-logout
const INACTIVITY_TIMEOUT = 30 * 60 * 1000 // 30 минут в мс
let inactivityTimer = null

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(JSON.parse(localStorage.getItem('crm_user') || 'null'))
  const users = ref(usersData)

  const isAdmin = computed(() => currentUser.value?.role === 'admin')
  const isDirector = computed(() => currentUser.value?.role === 'director')
  const isManager = computed(() => currentUser.value?.role === 'manager')
  const userName = computed(() => currentUser.value?.name || '')
  const userAvatar = computed(() => currentUser.value?.avatar || '')

  function login(userId) {
    const user = users.value.find(u => u.id === userId)
    if (user) {
      currentUser.value = user
      localStorage.setItem('crm_user', JSON.stringify(user))
      startInactivityTimer()
    }
  }

  function logout() {
    currentUser.value = null
    localStorage.removeItem('crm_user')
    stopInactivityTimer()
  }

  // Auto-logout при неактивности
  function startInactivityTimer() {
    stopInactivityTimer()
    inactivityTimer = setTimeout(() => {
      logout()
    }, INACTIVITY_TIMEOUT)
  }

  function stopInactivityTimer() {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer)
      inactivityTimer = null
    }
  }

  function resetInactivityTimer() {
    if (currentUser.value) {
      startInactivityTimer()
    }
  }

  // Если пользователь уже вошёл при загрузке, запускаем таймер
  if (currentUser.value) {
    startInactivityTimer()
  }

  return {
    currentUser,
    users,
    isAdmin,
    isDirector,
    isManager,
    userName,
    userAvatar,
    login,
    logout,
    resetInactivityTimer,
  }
})