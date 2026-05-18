import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import demoClientsData from '../data/clients.demo.json'

export const useClientsStore = defineStore('clients', () => {
  // Начинаем с демо-данных (всегда доступны, т.к. в git)
  const clients = ref([...demoClientsData])
  const isDemo = ref(true)
  const searchQuery = ref('')
  const filterDirection = ref('all')
  const filterStatus = ref('all')

  // Пытаемся загрузить реальные данные (доступны только локально)
  // @vite-ignore нужен чтобы Vite не пытался резолвить при сборке -
  // на деплое (Vercel/Amvera) файла clients.json нет (в .gitignore)
  async function loadRealData() {
    try {
      const module = await import(/* @vite-ignore */ '../data/clients.json')
      clients.value = [...module.default]
      isDemo.value = false
    } catch {
      // clients.json не найден - остаёмся в демо-режиме
    }
  }

  // Автозагрузка реальных данных при инициализации store
  loadRealData()

  const filteredClients = computed(() => {
    let result = clients.value

    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase()
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.inn.includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.contacts.some(contact =>
          contact.name.toLowerCase().includes(q) ||
          contact.email.toLowerCase().includes(q)
        )
      )
    }

    if (filterDirection.value !== 'all') {
      result = result.filter(c => c.direction === filterDirection.value)
    }

    if (filterStatus.value !== 'all') {
      result = result.filter(c => c.status === filterStatus.value)
    }

    return result
  })

  function getClient(id) {
    return clients.value.find(c => c.id === id)
  }

  function addClient(client) {
    const newClient = {
      ...client,
      id: 'c' + (clients.value.length + 1),
      createdAt: new Date().toISOString().split('T')[0],
      contacts: client.contacts || [],
      tags: client.tags || [],
      notes: client.notes || '',
    }
    clients.value.push(newClient)
    return newClient
  }

  function updateClient(id, data) {
    const index = clients.value.findIndex(c => c.id === id)
    if (index !== -1) {
      clients.value[index] = { ...clients.value[index], ...data }
    }
  }

  return {
    clients,
    isDemo,
    searchQuery,
    filterDirection,
    filterStatus,
    filteredClients,
    getClient,
    addClient,
    updateClient,
    loadRealData,
  }
})