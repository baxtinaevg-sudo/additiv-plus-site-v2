import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import demoClientsData from '../data/clients.demo.json'

export const useClientsStore = defineStore('clients', () => {
  // Используем только демо-данные (всегда доступны, т.к. в git)
  // Реальные данные должны загружаться через API, а не через JSON в исходниках
  const clients = ref([...demoClientsData])
  const isDemo = ref(true)
  const searchQuery = ref('')
  const filterDirection = ref('all')
  const filterStatus = ref('all')

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
  }
})