import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import tasksData from '../data/tasks.json'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([...tasksData])

  const overdueTasks = computed(() =>
    tasks.value.filter(t => t.status === 'overdue' ||
      (t.status === 'pending' && new Date(t.deadline) < new Date()))
  )

  const todayTasks = computed(() => {
    const today = new Date().toISOString().split('T')[0]
    return tasks.value.filter(t => t.deadline === today && t.status !== 'done')
  })

  const upcomingTasks = computed(() => {
    const today = new Date()
    return tasks.value
      .filter(t => t.status === 'pending' && new Date(t.deadline) >= today)
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
  })

  const pendingTasks = computed(() =>
    tasks.value.filter(t => t.status === 'pending')
  )

  function getTasksByManager(managerId) {
    return tasks.value.filter(t => t.managerId === managerId)
  }

  function getTasksByClient(clientId) {
    return tasks.value.filter(t => t.clientId === clientId)
  }

  function getTasksByDeal(dealId) {
    return tasks.value.filter(t => t.dealId === dealId)
  }

  function addTask(task) {
    const newTask = {
      ...task,
      id: 't' + (tasks.value.length + 1),
      status: 'pending',
      createdAt: new Date().toISOString().split('T')[0],
    }
    tasks.value.push(newTask)
    return newTask
  }

  function updateTask(id, data) {
    const index = tasks.value.findIndex(t => t.id === id)
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...data }
    }
  }

  function completeTask(id) {
    updateTask(id, { status: 'done' })
  }

  return {
    tasks,
    overdueTasks,
    todayTasks,
    upcomingTasks,
    pendingTasks,
    getTasksByManager,
    getTasksByClient,
    getTasksByDeal,
    addTask,
    updateTask,
    completeTask,
  }
})