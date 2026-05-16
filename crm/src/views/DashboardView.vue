<template>
  <div class="space-y-6">
    <!-- KPI Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl border border-crm-border p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-muted font-medium uppercase tracking-wide">Воронка</span>
          <span class="text-lg">📊</span>
        </div>
        <div class="text-2xl font-display font-bold text-graphite">{{ formatMoney(totalPipeline) }}</div>
        <div class="text-xs text-muted mt-1">{{ activeDeals.length }} активных сделок</div>
      </div>

      <div class="bg-white rounded-xl border border-crm-border p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-muted font-medium uppercase tracking-wide">Прогноз</span>
          <span class="text-lg">🎯</span>
        </div>
        <div class="text-2xl font-display font-bold text-champagne-dark">{{ formatMoney(weightedPipeline) }}</div>
        <div class="text-xs text-muted mt-1">Взвешенная вероятность</div>
      </div>

      <div class="bg-white rounded-xl border border-crm-border p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-muted font-medium uppercase tracking-wide">Закрыто (успех)</span>
          <span class="text-lg">✅</span>
        </div>
        <div class="text-2xl font-display font-bold text-success">{{ formatMoney(totalWon) }}</div>
        <div class="text-xs text-muted mt-1">{{ wonDeals.length }} сделок</div>
      </div>

      <div class="bg-white rounded-xl border border-crm-border p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-muted font-medium uppercase tracking-wide">Просрочено</span>
          <span class="text-lg">⚠️</span>
        </div>
        <div class="text-2xl font-display font-bold" :class="overdueTasks.length > 0 ? 'text-danger' : 'text-success'">
          {{ overdueTasks.length }}
        </div>
        <div class="text-xs text-muted mt-1">задач требуют внимания</div>
      </div>
    </div>

    <!-- Middle row: Pipeline + Tasks -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Pipeline overview -->
      <div class="lg:col-span-2 bg-white rounded-xl border border-crm-border p-5">
        <h3 class="font-display text-lg text-graphite mb-4">Воронка по этапам</h3>
        <div class="space-y-3">
          <div v-for="stage in activeStages" :key="stage.id" class="flex items-center gap-3">
            <div class="w-28 text-xs text-crm-text font-medium shrink-0">{{ stage.name }}</div>
            <div class="flex-1 h-7 bg-beige rounded-full overflow-hidden relative">
              <div
                class="h-full rounded-full transition-all duration-500"
                :class="stage.color"
                :style="{ width: barWidth(stage.id) + '%' }"
              />
            </div>
            <div class="w-20 text-right text-xs text-crm-text">
              <span class="font-semibold">{{ getStageDeals(stage.id).length }}</span>
              <span class="text-muted ml-1">{{ formatMoney(getStageAmount(stage.id)) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Overdue tasks -->
      <div class="bg-white rounded-xl border border-crm-border p-5">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-display text-lg text-graphite">Просроченные задачи</h3>
          <router-link to="/tasks" class="text-xs text-champagne-dark hover:text-champagne transition-colors">
            Все задачи →
          </router-link>
        </div>
        <div v-if="overdueTasks.length === 0" class="text-center py-8">
          <div class="text-3xl mb-2">🎉</div>
          <div class="text-sm text-muted">Просроченных задач нет</div>
        </div>
        <div v-else class="space-y-3">
          <div
            v-for="task in overdueTasks.slice(0, 5)"
            :key="task.id"
            class="flex items-start gap-3 p-3 rounded-lg bg-danger/5 border border-danger/10"
          >
            <div class="w-2 h-2 rounded-full bg-danger mt-1.5 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium text-crm-text truncate">{{ task.title }}</div>
              <div class="text-xs text-danger mt-0.5">Дедлайн: {{ formatDate(task.deadline) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom row: Managers + Recent activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Manager activity -->
      <div class="bg-white rounded-xl border border-crm-border p-5">
        <h3 class="font-display text-lg text-graphite mb-4">Активность менеджеров</h3>
        <div class="space-y-4">
          <div v-for="manager in managers" :key="manager.id" class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center text-champagne-dark font-semibold text-xs shrink-0">
              {{ manager.avatar }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-crm-text">{{ manager.name }}</span>
                <span class="text-xs text-muted">{{ getManagerDeals(manager.id).length }} сделок</span>
              </div>
              <div class="h-2 bg-beige rounded-full overflow-hidden">
                <div
                  class="h-full bg-champagne rounded-full"
                  :style="{ width: managerBarWidth(manager.id) + '%' }"
                />
              </div>
              <div class="flex justify-between mt-1">
                <span class="text-xs text-muted">{{ formatMoney(getManagerAmount(manager.id)) }}</span>
                <span class="text-xs" :class="getManagerWonRate(manager.id) > 50 ? 'text-success' : 'text-warning'">
                  {{ getManagerWonRate(manager.id) }}% конверсия
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent activity -->
      <div class="bg-white rounded-xl border border-crm-border p-5">
        <h3 class="font-display text-lg text-graphite mb-4">Последние действия</h3>
        <div class="space-y-3">
          <div
            v-for="activity in recentActivities"
            :key="activity.id"
            class="flex items-start gap-3"
          >
            <span class="text-lg shrink-0">{{ activityIcons[activity.type] }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-sm text-crm-text">{{ activity.description }}</div>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs text-muted">{{ formatDate(activity.date) }}</span>
                <span class="text-xs text-muted" v-if="activity.clientId">· {{ getClientName(activity.clientId) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDealsStore, STAGES } from '../stores/deals'
import { useTasksStore } from '../stores/tasks'
import { useActivitiesStore } from '../stores/activities'
import { useClientsStore } from '../stores/clients'
import { useAuthStore } from '../stores/auth'

const dealsStore = useDealsStore()
const tasksStore = useTasksStore()
const activitiesStore = useActivitiesStore()
const clientsStore = useClientsStore()
const authStore = useAuthStore()

const activeStages = STAGES.filter(s => !s.id.startsWith('closed'))

const activeDeals = computed(() => dealsStore.activeDeals)
const wonDeals = computed(() => dealsStore.wonDeals)
const totalPipeline = computed(() => dealsStore.totalPipeline)
const weightedPipeline = computed(() => dealsStore.weightedPipeline)
const totalWon = computed(() => dealsStore.totalWon)
const overdueTasks = computed(() => tasksStore.overdueTasks)
const recentActivities = computed(() => activitiesStore.sortedActivities.slice(0, 8))

const managers = computed(() =>
  authStore.users.filter(u => u.role === 'manager')
)

const activityIcons = {
  call: '📞',
  meeting: '🤝',
  email: '📧',
  note: '📝',
}

function getStageDeals(stageId) {
  return dealsStore.activeDeals.filter(d => d.stage === stageId)
}

function getStageAmount(stageId) {
  return getStageDeals(stageId).reduce((sum, d) => sum + d.amount, 0)
}

function barWidth(stageId) {
  const max = Math.max(...activeStages.map(s => getStageAmount(s.id)), 1)
  return (getStageAmount(stageId) / max) * 100
}

function getManagerDeals(managerId) {
  return dealsStore.activeDeals.filter(d => d.managerId === managerId)
}

function getManagerAmount(managerId) {
  return dealsStore.activeDeals
    .filter(d => d.managerId === managerId)
    .reduce((sum, d) => sum + d.amount, 0)
}

function getManagerWonRate(managerId) {
  const all = dealsStore.deals.filter(d => d.managerId === managerId)
  const won = all.filter(d => d.stage === 'closed_won')
  return all.length > 0 ? Math.round((won.length / all.length) * 100) : 0
}

function managerBarWidth(managerId) {
  const max = Math.max(...managers.value.map(m => getManagerAmount(m.id)), 1)
  return (getManagerAmount(managerId) / max) * 100
}

function getClientName(clientId) {
  const client = clientsStore.getClient(clientId)
  return client?.name || ''
}

function formatMoney(value) {
  if (value >= 1000000) return (value / 1000000).toFixed(1) + ' млн'
  if (value >= 1000) return (value / 1000).toFixed(0) + ' тыс'
  return value.toString()
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}
</script>