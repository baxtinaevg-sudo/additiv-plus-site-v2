<template>
  <div class="min-h-screen bg-white flex">
    <!-- Sidebar -->
    <aside
      :class="[
        'bg-white border-r border-crm-border flex flex-col transition-all duration-300 z-30',
        collapsed ? 'w-[72px]' : 'w-[260px]',
        'fixed lg:relative h-screen shadow-sm lg:shadow-none',
        mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Logo -->
      <div class="h-16 flex items-center px-4 border-b border-crm-border">
        <div class="flex items-center gap-3 overflow-hidden">
          <img
            src="/logo.png"
            alt="Аддитив Плюс"
            class="w-9 h-9 rounded-lg object-contain shrink-0"
          />
          <transition name="fade">
            <div v-if="!collapsed" class="whitespace-nowrap">
              <div class="font-display text-sm font-semibold text-graphite">Аддитив Плюс</div>
              <div class="text-[10px] text-champagne-dark font-medium tracking-wide uppercase">CRM-каталог</div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="mobileOpen = false"
          :class="[
            'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group',
            isActive(item.path)
              ? 'bg-champagne/10 text-champagne-dark font-medium shadow-sm'
              : 'text-graphite-soft hover:text-graphite hover:bg-gray-50'
          ]"
        >
          <span
            class="text-lg shrink-0 w-6 text-center transition-colors"
            :class="isActive(item.path) ? 'text-champagne' : 'text-muted group-hover:text-champagne'"
            v-html="item.icon"
          />
          <transition name="fade">
            <span v-if="!collapsed" class="whitespace-nowrap">{{ item.label }}</span>
          </transition>
          <transition name="fade">
            <span
              v-if="!collapsed && item.badge"
              class="ml-auto bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
            >
              {{ item.badge }}
            </span>
          </transition>
        </router-link>
      </nav>

      <!-- Collapse toggle -->
      <div class="hidden lg:block p-3 border-t border-crm-border">
        <button
          @click="collapsed = !collapsed"
          class="w-full flex items-center justify-center p-2 rounded-lg text-muted hover:text-graphite hover:bg-gray-50 transition-colors"
        >
          <svg
            :class="['w-5 h-5 transition-transform duration-300', collapsed ? 'rotate-180' : '']"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </aside>

    <!-- Mobile overlay -->
    <div
      v-if="mobileOpen"
      @click="mobileOpen = false"
      class="fixed inset-0 bg-graphite/20 backdrop-blur-sm z-20 lg:hidden"
    />

    <!-- Main content -->
    <div class="flex-1 flex flex-col min-h-screen bg-beige/40">
      <!-- Header -->
      <header class="h-16 bg-white border-b border-crm-border flex items-center px-4 lg:px-6 gap-4 shrink-0">
        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg class="w-5 h-5 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Page title -->
        <h1 class="font-display text-xl text-graphite hidden sm:block">{{ pageTitle }}</h1>

        <div class="flex-1" />

        <!-- Quick search -->
        <div class="hidden md:flex items-center bg-beige/60 rounded-xl px-3 py-2 gap-2 w-64 border border-crm-border/50">
          <svg class="w-4 h-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Поиск..."
            class="bg-transparent text-sm text-crm-text placeholder-muted outline-none w-full"
          />
        </div>

        <!-- Notifications -->
        <button class="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <svg class="w-5 h-5 text-graphite-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span
            v-if="overdueCount > 0"
            class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-danger rounded-full text-[10px] text-white flex items-center justify-center font-bold"
          >
            {{ overdueCount }}
          </span>
        </button>

        <!-- User menu -->
        <div class="flex items-center gap-3 pl-3 border-l border-crm-border">
          <div class="hidden sm:block text-right">
            <div class="text-sm font-medium text-crm-text">{{ authStore.userName }}</div>
            <div class="text-[11px] text-muted">{{ currentRole }}</div>
          </div>
          <button
            @click="authStore.logout(); $router.push('/login')"
            class="w-9 h-9 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne-dark font-semibold text-xs hover:bg-champagne/20 transition-colors"
            :title="'Выйти из ' + authStore.userName"
          >
            {{ authStore.userAvatar }}
          </button>
        </div>
      </header>

      <!-- Demo mode banner -->
      <div
        v-if="clientsStore.isDemo"
        class="bg-warning/10 border-b border-warning/20 px-4 lg:px-6 py-2 flex items-center gap-2"
      >
        <svg class="w-4 h-4 text-warning shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <span class="text-xs text-warning font-medium">Демо-режим: данные обезличены</span>
        <span class="text-xs text-muted ml-1">- контакты и телефоны скрыты (152-ФЗ)</span>
      </div>

      <!-- Page content -->
      <main class="flex-1 p-4 lg:p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useTasksStore } from '../stores/tasks'
import { useClientsStore } from '../stores/clients'

const route = useRoute()
const authStore = useAuthStore()
const tasksStore = useTasksStore()
const clientsStore = useClientsStore()

const collapsed = ref(false)
const mobileOpen = ref(false)

const overdueCount = computed(() => tasksStore.overdueTasks.length)

const currentRole = computed(() => {
  const roles = {
    admin: 'Администратор',
    manager: 'Менеджер продаж',
    director: 'Руководитель',
    accountant: 'Бухгалтер',
  }
  return roles[authStore.currentUser?.role] || ''
})

const pageTitle = computed(() => {
  const titles = {
    Dashboard: 'Дашборд',
    Clients: 'Каталог клиентов',
    ClientDetail: 'Карточка клиента',
    Deals: 'Воронка сделок',
    Tasks: 'Задачи',
  }
  return titles[route.name] || 'CRM'
})

const navItems = computed(() => [
  {
    path: '/',
    label: 'Дашборд',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>',
  },
  {
    path: '/clients',
    label: 'Каталог',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
  },
  {
    path: '/deals',
    label: 'Сделки',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
  },
  {
    path: '/tasks',
    label: 'Задачи',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>',
    badge: overdueCount.value > 0 ? overdueCount.value : null,
  },
])

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// Отслеживание активности для auto-logout
const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart']

function handleActivity() {
  authStore.resetInactivityTimer()
}

onMounted(() => {
  activityEvents.forEach(event => {
    window.addEventListener(event, handleActivity)
  })
})

onUnmounted(() => {
  activityEvents.forEach(event => {
    window.removeEventListener(event, handleActivity)
  })
})
</script>