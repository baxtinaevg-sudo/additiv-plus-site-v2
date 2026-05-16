<template>
  <div class="space-y-4">
    <!-- Toolbar -->
    <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
      <div class="flex flex-wrap gap-2 items-center">
        <!-- Search -->
        <div class="flex items-center bg-white border border-crm-border rounded-lg px-3 py-2 gap-2 w-64">
          <svg class="w-4 h-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="clientsStore.searchQuery"
            type="text"
            placeholder="Поиск по названию, ИНН, городу..."
            class="bg-transparent text-sm text-crm-text placeholder-muted outline-none w-full"
          />
        </div>

        <!-- Direction filter -->
        <select
          v-model="clientsStore.filterDirection"
          class="bg-white border border-crm-border rounded-lg px-3 py-2 text-sm text-crm-text outline-none cursor-pointer"
        >
          <option value="all">Все направления</option>
          <option value="ССС">ССС</option>
          <option value="ЛКМ">ЛКМ</option>
          <option value="Пластмассы">Пластмассы</option>
          <option value="Каучук">Каучук</option>
        </select>

        <!-- Status filter -->
        <select
          v-model="clientsStore.filterStatus"
          class="bg-white border border-crm-border rounded-lg px-3 py-2 text-sm text-crm-text outline-none cursor-pointer"
        >
          <option value="all">Все статусы</option>
          <option value="active">Активный</option>
          <option value="negotiation">Переговоры</option>
          <option value="lead">Лид</option>
          <option value="lost">Потерян</option>
        </select>
      </div>

      <button
        @click="showAddModal = true"
        class="flex items-center gap-2 bg-champagne text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-champagne-dark transition-colors shrink-0"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Добавить клиента
      </button>
    </div>

    <!-- Results count -->
    <div class="text-sm text-muted">
      {{ clientsStore.filteredClients.length }} из {{ clientsStore.clients.length }} клиентов
    </div>

    <!-- Clients table -->
    <div class="bg-white rounded-xl border border-crm-border overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-crm-border bg-beige/50">
              <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Клиент</th>
              <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Направление</th>
              <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Город</th>
              <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Статус</th>
              <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Менеджер</th>
              <th class="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wide">Сделки</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="client in clientsStore.filteredClients"
              :key="client.id"
              @click="$router.push('/clients/' + client.id)"
              class="border-b border-crm-border last:border-b-0 hover:bg-champagne-light/10 cursor-pointer transition-colors"
            >
              <td class="px-4 py-3">
                <div class="font-medium text-sm text-crm-text">{{ client.name }}</div>
                <div class="text-xs text-muted mt-0.5">ИНН: {{ client.inn }}</div>
              </td>
              <td class="px-4 py-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" :class="directionClass(client.direction)">
                  {{ client.direction }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm text-crm-text">{{ client.city }}</td>
              <td class="px-4 py-3">
                <span class="inline-flex items-center gap-1.5 text-xs">
                  <span class="w-1.5 h-1.5 rounded-full" :class="statusDot(client.status)" />
                  {{ statusLabels[client.status] }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm text-muted">{{ getManagerName(client.managerId) }}</td>
              <td class="px-4 py-3 text-sm text-crm-text font-medium">{{ getDealCount(client.id) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add Client Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-graphite/50 z-50 flex items-center justify-center p-4" @click.self="showAddModal = false">
      <div class="bg-white rounded-2xl w-full max-w-lg p-6 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-display text-xl text-graphite">Новый клиент</h3>
          <button @click="showAddModal = false" class="text-muted hover:text-graphite transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-3">
          <div>
            <label class="text-xs font-medium text-muted block mb-1">Название компании</label>
            <input v-model="newClient.name" type="text" class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne" placeholder="ООО «Название»" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs font-medium text-muted block mb-1">ИНН</label>
              <input v-model="newClient.inn" type="text" class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne" />
            </div>
            <div>
              <label class="text-xs font-medium text-muted block mb-1">Город</label>
              <input v-model="newClient.city" type="text" class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne" />
            </div>
          </div>
          <div>
            <label class="text-xs font-medium text-muted block mb-1">Направление</label>
            <select v-model="newClient.direction" class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne">
              <option value="ССС">ССС</option>
              <option value="ЛКМ">ЛКМ</option>
              <option value="Пластмассы">Пластмассы</option>
              <option value="Каучук">Каучук</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-medium text-muted block mb-1">Заметки</label>
            <textarea v-model="newClient.notes" rows="3" class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne resize-none" placeholder="Дополнительная информация..." />
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <button @click="showAddModal = false" class="px-4 py-2 rounded-lg text-sm text-muted hover:text-graphite transition-colors">Отмена</button>
          <button
            @click="addClient"
            :disabled="!newClient.name"
            class="px-4 py-2 rounded-lg text-sm bg-champagne text-white font-medium hover:bg-champagne-dark transition-colors disabled:opacity-50"
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useClientsStore } from '../stores/clients'
import { useDealsStore } from '../stores/deals'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const clientsStore = useClientsStore()
const dealsStore = useDealsStore()
const authStore = useAuthStore()

const showAddModal = ref(false)

const newClient = reactive({
  name: '',
  inn: '',
  city: '',
  direction: 'ССС',
  notes: '',
  managerId: authStore.currentUser?.id || 'u2',
  status: 'lead',
})

const statusLabels = {
  active: 'Активный',
  negotiation: 'Переговоры',
  lead: 'Лид',
  lost: 'Потерян',
}

function statusDot(status) {
  const map = { active: 'bg-success', negotiation: 'bg-champagne', lead: 'bg-info', lost: 'bg-danger' }
  return map[status] || 'bg-muted'
}

function directionClass(dir) {
  const map = {
    'ССС': 'bg-champagne-light/50 text-champagne-dark',
    'ЛКМ': 'bg-info/20 text-info',
    'Пластмассы': 'bg-warning/20 text-warning',
    'Каучук': 'bg-danger/20 text-danger',
  }
  return map[dir] || 'bg-beige text-muted'
}

function getManagerName(managerId) {
  const user = authStore.users.find(u => u.id === managerId)
  return user?.name?.split(' ')[0] || ''
}

function getDealCount(clientId) {
  return dealsStore.getDealsByClient(clientId).length
}

function addClient() {
  if (!newClient.name) return
  const client = clientsStore.addClient({ ...newClient })
  showAddModal.value = false
  Object.assign(newClient, { name: '', inn: '', city: '', direction: 'ССС', notes: '' })
  router.push('/clients/' + client.id)
}
</script>