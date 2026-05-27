import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import usersData from '../data/users.json'
import { initEncryption, clearMasterKey } from '../utils/crypto'
import { setItem as encSetItem, getItem as encGetItem, removeItem as encRemoveItem } from '../utils/encryptedStorage'

// Константы для auto-logout
const INACTIVITY_TIMEOUT = 30 * 60 * 1000 // 30 минут в мс
let inactivityTimer = null

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(null)
  const users = ref(usersData)

  const isAdmin = computed(() => currentUser.value?.role === 'admin')
  const isDirector = computed(() => currentUser.value?.role === 'director')
  const isManager = computed(() => currentUser.value?.role === 'manager')
  const userName = computed(() => currentUser.value?.name || '')
  const userAvatar = computed(() => currentUser.value?.avatar || '')

  async function login(userId) {
    const user = users.value.find(u => u.id === userId)
    if (user) {
      currentUser.value = user
      await encSetItem('crm_user', JSON.stringify(user))
      startInactivityTimer()
      initEncryption()
    }
  }

  function logout() {
    currentUser.value = null
    encRemoveItem('crm_user')
    stopInactivityTimer()
    clearMasterKey()
  }

  async function restoreSession() {
    const saved = await encGetItem('crm_user')
    if (saved) {
      try {
        currentUser.value = JSON.parse(saved)
        if (currentUser.value) {
          initEncryption()
          startInactivityTimer()
        }
      } catch {
        encRemoveItem('crm_user')
      }
    }
  }

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

  restoreSession()

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
