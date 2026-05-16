import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import dealsData from '../data/deals.json'

export const STAGES = [
  { id: 'lead', name: 'Лид', color: 'bg-champagne-light', textColor: 'text-champagne-dark' },
  { id: 'qualification', name: 'Квалификация', color: 'bg-champagne', textColor: 'text-white' },
  { id: 'proposal', name: 'Предложение', color: 'bg-champagne-dark', textColor: 'text-white' },
  { id: 'negotiation', name: 'Переговоры', color: 'bg-graphite-soft', textColor: 'text-white' },
  { id: 'closed_won', name: 'Закрыто (успех)', color: 'bg-success', textColor: 'text-white' },
  { id: 'closed_lost', name: 'Закрыто (провал)', color: 'bg-danger', textColor: 'text-white' },
]

export const useDealsStore = defineStore('deals', () => {
  const deals = ref([...dealsData])
  const filterManagerId = ref('all')

  const filteredDeals = computed(() => {
    if (filterManagerId.value === 'all') return deals.value
    return deals.value.filter(d => d.managerId === filterManagerId.value)
  })

  const dealsByStage = computed(() => {
    const stages = {}
    STAGES.forEach(stage => {
      stages[stage.id] = filteredDeals.value.filter(d => d.stage === stage.id)
    })
    return stages
  })

  const activeDeals = computed(() =>
    deals.value.filter(d => !d.stage.startsWith('closed'))
  )

  const wonDeals = computed(() =>
    deals.value.filter(d => d.stage === 'closed_won')
  )

  const lostDeals = computed(() =>
    deals.value.filter(d => d.stage === 'closed_lost')
  )

  const totalPipeline = computed(() =>
    activeDeals.value.reduce((sum, d) => sum + d.amount, 0)
  )

  const weightedPipeline = computed(() =>
    activeDeals.value.reduce((sum, d) => sum + (d.amount * d.probability / 100), 0)
  )

  const totalWon = computed(() =>
    wonDeals.value.reduce((sum, d) => sum + d.amount, 0)
  )

  const staleDeals = computed(() => {
    const now = new Date()
    return activeDeals.value.filter(d => {
      const deadline = new Date(d.nextStepDeadline)
      const diffDays = (now - deadline) / (1000 * 60 * 60 * 24)
      return diffDays > 3
    })
  })

  function getDeal(id) {
    return deals.value.find(d => d.id === id)
  }

  function getDealsByClient(clientId) {
    return deals.value.filter(d => d.clientId === clientId)
  }

  function getDealsByManager(managerId) {
    return deals.value.filter(d => d.managerId === managerId)
  }

  function moveDeal(dealId, newStage) {
    const deal = deals.value.find(d => d.id === dealId)
    if (deal) {
      deal.stage = newStage
      if (newStage === 'closed_won' || newStage === 'closed_lost') {
        deal.probability = newStage === 'closed_won' ? 100 : 0
        deal.closedAt = new Date().toISOString().split('T')[0]
      }
    }
  }

  function addDeal(deal) {
    const newDeal = {
      ...deal,
      id: 'd' + (deals.value.length + 1),
      createdAt: new Date().toISOString().split('T')[0],
      probability: deal.probability || 10,
      products: deal.products || [],
      notes: deal.notes || '',
    }
    deals.value.push(newDeal)
    return newDeal
  }

  function updateDeal(id, data) {
    const index = deals.value.findIndex(d => d.id === id)
    if (index !== -1) {
      deals.value[index] = { ...deals.value[index], ...data }
    }
  }

  return {
    deals,
    filterManagerId,
    filteredDeals,
    dealsByStage,
    activeDeals,
    wonDeals,
    lostDeals,
    totalPipeline,
    weightedPipeline,
    totalWon,
    staleDeals,
    getDeal,
    getDealsByClient,
    getDealsByManager,
    moveDeal,
    addDeal,
    updateDeal,
  }
})