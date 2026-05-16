<template>
  <div class="space-y-6">
    <!-- Filter tabs -->
    <div class="flex gap-2 flex-wrap">
      <button
        v-for="tab in filterTabs"
        :key="tab.id"
        @click="activeFilter = tab.id"
        :class="[
          'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
          activeFilter === tab.id
            ? 'bg-champagne text-white'
            : 'bg-white border border-crm-border text-crm-text hover:border-champagne/50'
        ]"
      >
        {{ tab.label }}
        <span v-if="tab.count > 0" class="ml-1 text-xs opacity-70">({{ tab.count }})</span>
      </button>
    </div>

    <!-- Task list -->
    <div class="space-y-2">
      <div v-if="filteredTasks.length === 0" class="text-center py-16 bg-white rounded-xl border border-crm-border">
        <div class="text-3xl mb-2">🎉</div>
        <div class="text-sm text-muted">Нет задач для отображения</div>
      </div>

      <div
        v-for="task in filteredTasks"
        :key="task.id"
        class="bg-white rounded-xl border border-crm-border p-4 flex items-start gap-4 hover:border-champagne/30 transition-colors"
        :class="{
          'border-danger/30 bg-danger/[0.02]': isOverdue(task),
          'opacity-60': task.status === 'done'
        }"
      >
        <!-- Checkbox -->
        <button
          @click="toggleTask(task)"
          class="w-6 h-6 rounded-full border-2 shrink-0 mt-0.5 transition-colors flex items-center justify-center"
          :class="task.status === 'done' ? 'bg-success border-success' : isOverdue(task) ? 'border-danger hover:bg-danger/10' : 'border-crm-border hover:border-champagne'"
        >
          <svg v-if="task.status === 'done'" class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </button>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h4 class="text-sm font-medium text-crm-text" :class="{ 'line-through text-muted': task.status === 'done' }">
                {{ task.title }}
              </h4>
              <p class="text-xs text-muted mt-0.5">{{ task.description }}</p>
            </div>
            <span class="px-2 py-0.5 rounded text-[11px] font-medium shrink-0" :class="priorityClass(task.priority)">
              {{ priorityLabels[task.priority] }}
            </span>
          </div>

          <!-- Meta -->
          <div class="flex items-center gap-3 mt-2 flex-wrap">
            <!-- Client -->
            <router-link
              v-if="task.clientId"
              :to="'/clients/' + task.clientId"
              class="flex items-center gap-1 text-xs text-champagne-dark hover:text-champagne transition-colors"
            >
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {{ getClientName(task.clientId) }}
            </router-link>

            <!-- Deal -->
            <span v-if="task.dealId" class="text-xs text-muted">
              {{ getDealTitle(task.dealId) }}
            </span>

            <!-- Manager -->
            <span class="flex items-center gap-1 text-xs text-muted">
              <div class="w-4 h-4 rounded-full bg-champagne/10 flex items-center justify-center text-[8px] text-champagne-dark font-semibold">
                {{ getManagerAvatar(task.managerId) }}
              </div>
              {{ getManagerFirstName(task.managerId) }}
            </span>
          </div>
        </div>

        <!-- Deadline -->
        <div class="text-right shrink-0">
          <div class="text-sm font-medium" :class="deadlineClass(task)">
            {{ formatDate(task.deadline) }}
          </div>
          <div class="text-[10px] text-muted mt-0.5">
            {{ daysLeft(task.deadline) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { useClientsStore } from '../stores/clients'
import { useDealsStore } from '../stores/deals'
import { useAuthStore } from '../stores/auth'

const tasksStore = useTasksStore()
const clientsStore = useClientsStore()
const dealsStore = useDealsStore()
const authStore = useAuthStore()

const activeFilter = ref('all')

const priorityLabels = { high: 'Высокий', medium: 'Средний', low: 'Низкий' }

const filterTabs = computed(() => [
  { id: 'all', label: 'Все', count: tasksStore.tasks.length },
  { id: 'overdue', label: 'Просроченные', count: tasksStore.overdueTasks.length },
  { id: 'today', label: 'На сегодня', count: tasksStore.todayTasks.length },
  { id: 'upcoming', label: 'Предстоящие', count: tasksStore.upcomingTasks.length },
])

const filteredTasks = computed(() => {
  switch (activeFilter.value) {
    case 'overdue': return tasksStore.overdueTasks
    case 'today': return tasksStore.todayTasks
    case 'upcoming': return tasksStore.upcomingTasks
    default: return [...tasksStore.tasks].sort((a, b) => {
      if (a.status === 'done' && b.status !== 'done') return 1
      if (a.status !== 'done' && b.status === 'done') return -1
      return new Date(a.deadline) - new Date(b.deadline)
    })
  }
})

function isOverdue(task) {
  return task.status !== 'done' && new Date(task.deadline) < new Date()
}

function toggleTask(task) {
  if (task.status === 'done') {
    tasksStore.updateTask(task.id, { status: 'pending' })
  } else {
    tasksStore.completeTask(task.id)
  }
}

function priorityClass(p) {
  return {
    high: 'bg-danger/10 text-danger',
    medium: 'bg-warning/10 text-warning',
    low: 'bg-beige text-muted',
  }[p] || ''
}

function deadlineClass(task) {
  if (task.status === 'done') return 'text-muted'
  const d = new Date(task.deadline)
  const now = new Date()
  const diff = (d - now) / (1000 * 60 * 60 * 24)
  if (diff < 0) return 'text-danger'
  if (diff < 1) return 'text-warning'
  return 'text-crm-text'
}

function daysLeft(dateStr) {
  const d = new Date(dateStr)
  const now = new Date()
  const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24))
  if (diff < 0) return `${Math.abs(diff)} дн. назад`
  if (diff === 0) return 'Сегодня'
  if (diff === 1) return 'Завтра'
  return `${diff} дн.`
}

function getClientName(clientId) {
  return clientsStore.getClient(clientId)?.name || ''
}

function getDealTitle(dealId) {
  return dealsStore.getDeal(dealId)?.title || ''
}

function getManagerAvatar(managerId) {
  return authStore.users.find(u => u.id === managerId)?.avatar || ''
}

function getManagerFirstName(managerId) {
  return authStore.users.find(u => u.id === managerId)?.name?.split(' ')[0] || ''
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}
</script>