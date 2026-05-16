<template>
  <div v-if="client" class="space-y-6">
    <!-- Header -->
    <div class="flex items-start gap-4">
      <router-link to="/clients" class="mt-1 p-1 rounded-lg hover:bg-beige transition-colors">
        <svg class="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </router-link>
      <div class="flex-1">
        <div class="flex items-center gap-3 flex-wrap">
          <h2 class="font-display text-2xl text-graphite">{{ client.name }}</h2>
          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs" :class="statusClass">
            <span class="w-1.5 h-1.5 rounded-full" :class="statusDot" />
            {{ statusLabels[client.status] }}
          </span>
        </div>
        <div class="flex flex-wrap gap-3 mt-2 text-sm text-muted">
          <span>ИНН: {{ client.inn }}</span>
          <span>{{ client.city }}</span>
          <span v-if="client.website">{{ client.website }}</span>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-2">
          <span
            v-for="tag in client.tags"
            :key="tag"
            class="px-2 py-0.5 rounded text-[11px] bg-champagne-light/30 text-champagne-dark"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 border-b border-crm-border">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
          activeTab === tab.id
            ? 'border-champagne text-champagne-dark'
            : 'border-transparent text-muted hover:text-crm-text'
        ]"
      >
        {{ tab.label }}
        <span v-if="tab.count" class="ml-1 text-xs text-muted">({{ tab.count }})</span>
      </button>
    </div>

    <!-- Tab: Info -->
    <div v-if="activeTab === 'info'" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Contacts -->
      <div class="bg-white rounded-xl border border-crm-border p-5">
        <h3 class="font-display text-lg text-graphite mb-4">Контакты</h3>
        <div class="space-y-4">
          <div v-for="(contact, i) in client.contacts" :key="i" class="flex items-start gap-3">
            <div class="w-9 h-9 rounded-full bg-champagne/10 flex items-center justify-center text-champagne-dark text-xs font-semibold shrink-0">
              {{ contact.name.split(' ').map(w => w[0]).join('') }}
            </div>
            <div>
              <div class="text-sm font-medium text-crm-text">{{ contact.name }}</div>
              <div class="text-xs text-muted">{{ contact.position }}</div>
              <div class="text-xs text-champagne-dark mt-1">{{ contact.phone }}</div>
              <div class="text-xs text-champagne-dark">{{ contact.email }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Details -->
      <div class="bg-white rounded-xl border border-crm-border p-5">
        <h3 class="font-display text-lg text-graphite mb-4">Детали</h3>
        <div class="space-y-3">
          <div class="flex justify-between py-2 border-b border-crm-border/50">
            <span class="text-sm text-muted">Направление</span>
            <span class="text-sm font-medium text-crm-text">{{ client.direction }}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-crm-border/50">
            <span class="text-sm text-muted">Менеджер</span>
            <span class="text-sm font-medium text-crm-text">{{ getManagerName(client.managerId) }}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-crm-border/50">
            <span class="text-sm text-muted">Дата добавления</span>
            <span class="text-sm text-crm-text">{{ formatDate(client.createdAt) }}</span>
          </div>
          <div v-if="client.notes" class="pt-2">
            <span class="text-sm text-muted block mb-2">Заметки</span>
            <p class="text-sm text-crm-text leading-relaxed">{{ client.notes }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab: Deals -->
    <div v-if="activeTab === 'deals'" class="space-y-3">
      <div v-if="clientDeals.length === 0" class="text-center py-12 bg-white rounded-xl border border-crm-border">
        <div class="text-3xl mb-2">📋</div>
        <div class="text-sm text-muted">Сделок с этим клиентом пока нет</div>
      </div>
      <div
        v-for="deal in clientDeals"
        :key="deal.id"
        class="bg-white rounded-xl border border-crm-border p-4 hover:border-champagne/50 transition-colors"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-medium text-crm-text">{{ deal.title }}</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-medium" :class="stageClass(deal.stage)">
                {{ stageName(deal.stage) }}
              </span>
            </div>
            <div class="text-xs text-muted mt-1">
              {{ deal.products.join(', ') }}
            </div>
            <div v-if="deal.nextStep" class="mt-2 flex items-center gap-2 text-xs">
              <span class="text-muted">Следующий шаг:</span>
              <span class="text-crm-text">{{ deal.nextStep }}</span>
              <span class="text-muted" v-if="deal.nextStepDeadline">({{ formatDate(deal.nextStepDeadline) }})</span>
            </div>
          </div>
          <div class="text-right shrink-0">
            <div class="text-sm font-semibold text-crm-text">{{ formatMoney(deal.amount) }}</div>
            <div class="text-xs text-muted">{{ deal.probability }}%</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab: Timeline -->
    <div v-if="activeTab === 'timeline'" class="space-y-3">
      <div class="flex justify-end">
        <button
          @click="showActivityForm = !showActivityForm"
          class="flex items-center gap-2 bg-champagne text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-champagne-dark transition-colors"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Добавить активность
        </button>
      </div>

      <!-- Activity form -->
      <div v-if="showActivityForm" class="bg-white rounded-xl border border-champagne/30 p-4 space-y-3">
        <div class="flex gap-2">
          <button
            v-for="(type, key) in activityTypes"
            :key="key"
            @click="newActivity.type = key"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
              newActivity.type === key ? 'bg-champagne/20 text-champagne-dark border border-champagne/30' : 'bg-beige text-muted'
            ]"
          >
            {{ type.icon }} {{ type.label }}
          </button>
        </div>
        <textarea
          v-model="newActivity.description"
          rows="2"
          class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne resize-none"
          placeholder="Описание активности..."
        />
        <input
          v-model="newActivity.result"
          type="text"
          class="w-full border border-crm-border rounded-lg px-3 py-2 text-sm outline-none focus:border-champagne"
          placeholder="Результат / следующий шаг"
        />
        <div class="flex justify-end gap-2">
          <button @click="showActivityForm = false" class="px-3 py-1.5 rounded-lg text-xs text-muted">Отмена</button>
          <button @click="addActivity" :disabled="!newActivity.description" class="px-3 py-1.5 rounded-lg text-xs bg-champagne text-white font-medium hover:bg-champagne-dark disabled:opacity-50">Сохранить</button>
        </div>
      </div>

      <!-- Timeline entries -->
      <div v-if="timeline.length === 0" class="text-center py-12 bg-white rounded-xl border border-crm-border">
        <div class="text-3xl mb-2">📝</div>
        <div class="text-sm text-muted">Активностей пока нет</div>
      </div>
      <div
        v-for="entry in timeline"
        :key="entry.id"
        class="bg-white rounded-xl border border-crm-border p-4 flex items-start gap-3"
      >
        <span class="text-lg shrink-0">{{ activityTypes[entry.type]?.icon || '📝' }}</span>
        <div class="flex-1 min-w-0">
          <div class="text-sm text-crm-text">{{ entry.description }}</div>
          <div v-if="entry.result" class="text-xs text-champagne-dark mt-1">→ {{ entry.result }}</div>
          <div class="flex items-center gap-2 mt-1.5">
            <span class="text-xs text-muted">{{ formatDate(entry.date) }}</span>
            <span class="text-xs text-muted" v-if="entry.dealId">· {{ getDealTitle(entry.dealId) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab: Tasks -->
    <div v-if="activeTab === 'tasks'" class="space-y-3">
      <div v-if="clientTasks.length === 0" class="text-center py-12 bg-white rounded-xl border border-crm-border">
        <div class="text-3xl mb-2">✅</div>
        <div class="text-sm text-muted">Задач по этому клиенту нет</div>
      </div>
      <div
        v-for="task in clientTasks"
        :key="task.id"
        class="bg-white rounded-xl border border-crm-border p-4 flex items-start gap-3"
        :class="{ 'border-danger/30 bg-danger/5': isOverdue(task) }"
      >
        <button
          @click="tasksStore.completeTask(task.id)"
          class="w-5 h-5 rounded border-2 shrink-0 mt-0.5 transition-colors"
          :class="task.status === 'done' ? 'bg-success border-success' : 'border-crm-border hover:border-champagne'"
        >
          <svg v-if="task.status === 'done'" class="w-3 h-3 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-crm-text" :class="{ 'line-through text-muted': task.status === 'done' }">{{ task.title }}</div>
          <div class="text-xs text-muted mt-0.5">{{ task.description }}</div>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs" :class="isOverdue(task) ? 'text-danger font-medium' : 'text-muted'">
              {{ formatDate(task.deadline) }}
            </span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-medium" :class="priorityClass(task.priority)">
              {{ priorityLabels[task.priority] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="text-center py-20">
    <div class="text-4xl mb-3">🔍</div>
    <div class="text-lg text-muted">Клиент не найден</div>
    <router-link to="/clients" class="text-sm text-champagne-dark hover:text-champagne mt-2 inline-block">
      Вернуться к списку →
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useClientsStore } from '../stores/clients'
import { useDealsStore, STAGES } from '../stores/deals'
import { useActivitiesStore, ACTIVITY_TYPES } from '../stores/activities'
import { useTasksStore } from '../stores/tasks'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const clientsStore = useClientsStore()
const dealsStore = useDealsStore()
const activitiesStore = useActivitiesStore()
const tasksStore = useTasksStore()
const authStore = useAuthStore()

const activeTab = ref('info')
const showActivityForm = ref(false)

const client = computed(() => clientsStore.getClient(route.params.id))
const clientDeals = computed(() => dealsStore.getDealsByClient(route.params.id))
const timeline = computed(() => activitiesStore.getActivitiesByClient(route.params.id))
const clientTasks = computed(() => tasksStore.getTasksByClient(route.params.id))

const activityTypes = ACTIVITY_TYPES

const newActivity = reactive({
  type: 'note',
  description: '',
  result: '',
})

const tabs = computed(() => [
  { id: 'info', label: 'Инфо' },
  { id: 'deals', label: 'Сделки', count: clientDeals.value.length },
  { id: 'timeline', label: 'История', count: timeline.value.length },
  { id: 'tasks', label: 'Задачи', count: clientTasks.value.length },
])

const statusLabels = { active: 'Активный', negotiation: 'Переговоры', lead: 'Лид', lost: 'Потерян' }

const statusClass = computed(() => {
  const map = { active: 'bg-success/10 text-success', negotiation: 'bg-champagne/20 text-champagne-dark', lead: 'bg-info/10 text-info', lost: 'bg-danger/10 text-danger' }
  return map[client.value?.status] || ''
})

const statusDot = computed(() => {
  const map = { active: 'bg-success', negotiation: 'bg-champagne', lead: 'bg-info', lost: 'bg-danger' }
  return map[client.value?.status] || 'bg-muted'
})

const priorityLabels = { high: 'Высокий', medium: 'Средний', low: 'Низкий' }

function priorityClass(p) {
  return { high: 'bg-danger/10 text-danger', medium: 'bg-warning/10 text-warning', low: 'bg-beige text-muted' }[p] || ''
}

function stageName(stageId) {
  return STAGES.find(s => s.id === stageId)?.name || stageId
}

function stageClass(stageId) {
  const map = {
    lead: 'bg-champagne-light/30 text-champagne-dark',
    qualification: 'bg-champagne/20 text-champagne-dark',
    proposal: 'bg-champagne-dark/20 text-champagne-dark',
    negotiation: 'bg-graphite-soft/20 text-graphite-soft',
    closed_won: 'bg-success/10 text-success',
    closed_lost: 'bg-danger/10 text-danger',
  }
  return map[stageId] || 'bg-beige text-muted'
}

function getManagerName(managerId) {
  return authStore.users.find(u => u.id === managerId)?.name || ''
}

function getDealTitle(dealId) {
  return dealsStore.getDeal(dealId)?.title || ''
}

function isOverdue(task) {
  return task.status === 'overdue' || (task.status === 'pending' && new Date(task.deadline) < new Date())
}

function addActivity() {
  if (!newActivity.description) return
  activitiesStore.addActivity({
    ...newActivity,
    clientId: route.params.id,
    dealId: clientDeals.value[0]?.id || null,
    managerId: authStore.currentUser?.id || 'u2',
  })
  newActivity.description = ''
  newActivity.result = ''
  showActivityForm.value = false
}

function formatMoney(value) {
  if (value >= 1000000) return (value / 1000000).toFixed(1) + ' млн ₽'
  if (value >= 1000) return Math.round(value / 1000) + ' тыс ₽'
  return value + ' ₽'
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>