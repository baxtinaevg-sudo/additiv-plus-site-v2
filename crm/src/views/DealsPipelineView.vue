<template>
  <div class="space-y-4">
    <!-- Toolbar -->
    <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
      <div class="flex gap-2 items-center flex-wrap">
        <select
          v-model="dealsStore.filterManagerId"
          class="bg-white border border-crm-border rounded-lg px-3 py-2 text-sm text-crm-text outline-none cursor-pointer"
        >
          <option value="all">Все менеджеры</option>
          <option v-for="m in managers" :key="m.id" :value="m.id">{{ m.name }}</option>
        </select>
        <div class="text-sm text-muted">
          {{ dealsStore.activeDeals.length }} сделок · {{ formatMoney(dealsStore.totalPipeline) }}
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <span class="text-xs text-muted">Прогноз:</span>
        <span class="text-sm font-semibold text-champagne-dark">{{ formatMoney(dealsStore.weightedPipeline) }}</span>
      </div>
    </div>

    <!-- Kanban Board -->
    <div class="flex gap-4 overflow-x-auto pb-4" style="min-height: calc(100vh - 200px)">
      <div
        v-for="stage in stages"
        :key="stage.id"
        class="flex-shrink-0 w-[280px] flex flex-col"
        @dragover.prevent="onDragOver($event, stage.id)"
        @dragleave="onDragLeave($event)"
        @drop="onDrop($event, stage.id)"
      >
        <!-- Column header -->
        <div class="flex items-center justify-between mb-3 px-1">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full" :class="stageHeaderDot(stage.id)" />
            <span class="text-sm font-semibold text-graphite">{{ stage.name }}</span>
            <span class="text-xs text-muted bg-beige px-1.5 py-0.5 rounded">
              {{ getColumnDeals(stage.id).length }}
            </span>
          </div>
          <span class="text-xs text-muted">{{ formatMoney(getColumnAmount(stage.id)) }}</span>
        </div>

        <!-- Cards -->
        <div
          class="flex-1 space-y-2 rounded-xl p-2 transition-colors duration-200"
          :class="dragOverStage === stage.id ? 'bg-champagne-light/20' : 'bg-beige/30'"
        >
          <div
            v-for="deal in getColumnDeals(stage.id)"
            :key="deal.id"
            :draggable="!stage.id.startsWith('closed')"
            @dragstart="onDragStart($event, deal.id)"
            class="bg-white rounded-lg border border-crm-border p-3 cursor-grab active:cursor-grabbing hover:shadow-sm transition-all"
            :class="{ 'border-l-4 border-l-danger/50': isStale(deal) }"
          >
            <!-- Deal title -->
            <div class="text-sm font-medium text-crm-text mb-1">{{ deal.title }}</div>

            <!-- Client -->
            <div class="text-xs text-muted mb-2">{{ getClientName(deal.clientId) }}</div>

            <!-- Amount + Probability -->
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-graphite">{{ formatMoney(deal.amount) }}</span>
              <span class="text-xs px-1.5 py-0.5 rounded bg-champagne/10 text-champagne-dark">{{ deal.probability }}%</span>
            </div>

            <!-- Products -->
            <div class="text-[11px] text-muted truncate mb-2" v-if="deal.products.length">
              {{ deal.products.join(', ') }}
            </div>

            <!-- Next step -->
            <div v-if="deal.nextStep && !stage.id.startsWith('closed')" class="pt-2 border-t border-crm-border/50">
              <div class="flex items-start gap-1.5">
                <svg class="w-3 h-3 text-champagne-dark mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div>
                  <div class="text-[11px] text-crm-text leading-tight">{{ deal.nextStep }}</div>
                  <div class="text-[10px] mt-0.5" :class="isOverdueDeadline(deal.nextStepDeadline) ? 'text-danger font-medium' : 'text-muted'">
                    {{ formatDate(deal.nextStepDeadline) }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Manager -->
            <div class="flex items-center justify-between mt-2 pt-2 border-t border-crm-border/30">
              <div class="flex items-center gap-1.5">
                <div class="w-5 h-5 rounded-full bg-champagne/10 flex items-center justify-center text-[9px] text-champagne-dark font-semibold">
                  {{ getManagerAvatar(deal.managerId) }}
                </div>
                <span class="text-[11px] text-muted">{{ getManagerFirstName(deal.managerId) }}</span>
              </div>
              <span class="text-[10px] text-muted">{{ formatDate(deal.createdAt) }}</span>
            </div>
          </div>

          <!-- Empty state -->
          <div v-if="getColumnDeals(stage.id).length === 0" class="py-8 text-center">
            <div class="text-xs text-muted/50">Перетащите сделку сюда</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDealsStore, STAGES } from '../stores/deals'
import { useClientsStore } from '../stores/clients'
import { useAuthStore } from '../stores/auth'

const dealsStore = useDealsStore()
const clientsStore = useClientsStore()
const authStore = useAuthStore()

const stages = STAGES
const dragOverStage = ref(null)
const draggedDealId = ref(null)

const managers = computed(() => authStore.users.filter(u => u.role === 'manager'))

function getColumnDeals(stageId) {
  return dealsStore.dealsByStage[stageId] || []
}

function getColumnAmount(stageId) {
  return getColumnDeals(stageId).reduce((sum, d) => sum + d.amount, 0)
}

function stageHeaderDot(stageId) {
  const map = {
    lead: 'bg-champagne-light',
    qualification: 'bg-champagne',
    proposal: 'bg-champagne-dark',
    negotiation: 'bg-graphite-soft',
    closed_won: 'bg-success',
    closed_lost: 'bg-danger',
  }
  return map[stageId] || 'bg-muted'
}

function getClientName(clientId) {
  return clientsStore.getClient(clientId)?.name || ''
}

function getManagerAvatar(managerId) {
  return authStore.users.find(u => u.id === managerId)?.avatar || ''
}

function getManagerFirstName(managerId) {
  return authStore.users.find(u => u.id === managerId)?.name?.split(' ')[0] || ''
}

function isStale(deal) {
  if (deal.stage.startsWith('closed')) return false
  return new Date(deal.nextStepDeadline) < new Date()
}

function isOverdueDeadline(dateStr) {
  return new Date(dateStr) < new Date()
}

function onDragStart(event, dealId) {
  draggedDealId.value = dealId
  event.dataTransfer.effectAllowed = 'move'
  event.target.classList.add('opacity-50')
  event.target.addEventListener('dragend', () => event.target.classList.remove('opacity-50'), { once: true })
}

function onDragOver(event, stageId) {
  event.dataTransfer.dropEffect = 'move'
  dragOverStage.value = stageId
}

function onDragLeave(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    dragOverStage.value = null
  }
}

function onDrop(event, stageId) {
  dragOverStage.value = null
  if (draggedDealId.value) {
    dealsStore.moveDeal(draggedDealId.value, stageId)
    draggedDealId.value = null
  }
}

function formatMoney(value) {
  if (value >= 1000000) return (value / 1000000).toFixed(1) + ' млн'
  if (value >= 1000) return Math.round(value / 1000) + ' тыс'
  return value.toString()
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}
</script>