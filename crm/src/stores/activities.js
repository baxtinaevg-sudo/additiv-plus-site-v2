import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import activitiesData from '../data/activities.json'

export const ACTIVITY_TYPES = {
  call: { label: 'Звонок', icon: '📞', color: 'text-info' },
  meeting: { label: 'Встреча', icon: '🤝', color: 'text-champagne-dark' },
  email: { label: 'Email', icon: '📧', color: 'text-success' },
  note: { label: 'Заметка', icon: '📝', color: 'text-muted' },
}

export const useActivitiesStore = defineStore('activities', () => {
  const activities = ref([...activitiesData])

  const sortedActivities = computed(() =>
    [...activities.value].sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  function getActivitiesByClient(clientId) {
    return sortedActivities.value.filter(a => a.clientId === clientId)
  }

  function getActivitiesByDeal(dealId) {
    return sortedActivities.value.filter(a => a.dealId === dealId)
  }

  function getActivitiesByManager(managerId) {
    return sortedActivities.value.filter(a => a.managerId === managerId)
  }

  function addActivity(activity) {
    const newActivity = {
      ...activity,
      id: 'a' + (activities.value.length + 1),
      date: activity.date || new Date().toISOString().split('T')[0],
    }
    activities.value.push(newActivity)
    return newActivity
  }

  return {
    activities,
    sortedActivities,
    getActivitiesByClient,
    getActivitiesByDeal,
    getActivitiesByManager,
    addActivity,
  }
})