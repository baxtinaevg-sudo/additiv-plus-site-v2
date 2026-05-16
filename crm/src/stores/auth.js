import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import usersData from '../data/users.json'

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
    }
  }

  function logout() {
    currentUser.value = null
    localStorage.removeItem('crm_user')
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
  }
})