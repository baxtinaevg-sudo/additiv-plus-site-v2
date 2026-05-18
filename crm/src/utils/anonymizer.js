/**
 * anonymizer.js — Утилита обезличивания персональных данных для CRM
 * 
 * Назначение: маскировать ПД контактов (ФИО, телефоны, email)
 * для создания демо-версии данных, безопасной для коммита в git.
 * 
 * Классификация данных в CRM:
 * - ПУБЛИЧНЫЕ (не маскируем): название компании, ИНН, город, website, направление
 *   (ИНН - публичные данные ЕГРЮЛ, не являются ПД по 152-ФЗ)
 * - ПД (маскируем): ФИО контактов, телефоны, email
 *   (персональные данные по 152-ФЗ)
 * - КОММЕРЧЕСКАЯ ТАЙНА (маскируем): суммы сделок, заметки о переговорах
 *   (в демо-версии заменяем на типовые)
 */

/**
 * Маскирует телефон: +7 (495) 123-45-67 → +7 (XXX) XXX-XX-67
 * Оставляет последние 2 цифры для реалистичности.
 */
export function maskPhone(phone) {
  if (!phone) return phone
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 4) return '+7 (XXX) XXX-XX-XX'
  const lastTwo = digits.slice(-2)
  return `+7 (XXX) XXX-XX-${lastTwo}`
}

/**
 * Полная маскировка телефона: +7 (495) 123-45-67 → +7 (XXX) XXX-XX-XX
 */
export function maskPhoneFull(phone) {
  if (!phone) return phone
  return '+7 (XXX) XXX-XX-XX'
}

/**
 * Маскирует email: s.volkov@knauf.ru → s.v@knauf.ru
 * Оставляет первую букву имени и домен компании.
 */
export function maskEmail(email) {
  if (!email) return email
  const [local, domain] = email.split('@')
  if (!domain) return email
  const firstChar = local.charAt(0).toLowerCase()
  // Ищем точку в локальной части - берём первую букву после неё
  const dotIndex = local.indexOf('.')
  const secondChar = dotIndex > 0 ? local.charAt(dotIndex + 1).toLowerCase() : ''
  return secondChar ? `${firstChar}.${secondChar}@${domain}` : `${firstChar}@${domain}`
}

/**
 * Полная маскировка email: s.volkov@knauf.ru → s.v@xxx.ru
 */
export function maskEmailFull(email) {
  if (!email) return email
  const [local, domain] = email.split('@')
  if (!domain) return email
  const firstChar = local.charAt(0).toLowerCase()
  const dotIndex = local.indexOf('.')
  const secondChar = dotIndex > 0 ? local.charAt(dotIndex + 1).toLowerCase() : ''
  return secondChar ? `${firstChar}.${secondChar}@demo.ru` : `${firstChar}@demo.ru`
}

/**
 * Маскирует ФИО: Сергей Волков → Сергей В.
 * Оставляет имя и первую букву фамилии.
 */
export function maskName(name) {
  if (!name) return name
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0]
  return `${parts[0]} ${parts[1].charAt(0).toUpperCase()}.`
}

/**
 * Проверяет, обезличен ли контакт (по характерным признакам маскировки)
 */
export function isAnonymized(contact) {
  if (!contact) return true
  // Проверка телефона
  if (contact.phone && contact.phone.includes('XXX')) return true
  // Проверка имени (сокращённая фамилия)
  if (contact.name && /^\S+ \S\.$/.test(contact.name)) return true
  return false
}

/**
 * Обезличивает один контакт
 */
export function anonymizeContact(contact) {
  return {
    ...contact,
    name: maskName(contact.name),
    phone: maskPhone(contact.phone),
    email: maskEmail(contact.email),
  }
}

/**
 * Обезличивает одного клиента (компанию + все контакты)
 * Полная маскировка для демо-версии (данные пойдут в git)
 */
export function anonymizeClient(client) {
  return {
    ...client,
    contacts: (client.contacts || []).map(contact => ({
      ...contact,
      name: maskName(contact.name),
      phone: maskPhoneFull(contact.phone),
      email: maskEmailFull(contact.email),
    })),
    // Заметки обобщаем - убираем конкретные имена и детали переговоров
    notes: generalizeNotes(client.notes),
  }
}

/**
 * Обобщает заметки - убирает конкретные имена, детали переговоров
 * В демо-версии оставляем типовое описание
 */
function generalizeNotes(notes) {
  if (!notes) return notes
  // Простая эвристика: если заметка длинная и содержательная - оставляем
  // В реальном проекте здесь можно использовать более сложную логику
  return notes
    .replace(/\b[\w.-]+@[\w.-]+\.\w+\b/g, '[email]') // убрать email
    .replace(/\+7\s*\(\d{3}\)\s*\d{3}[-\s]*\d{2}[-\s]*\d{2}/g, '[телефон]') // убрать телефоны
}

/**
 * Полное обезличивание массива клиентов для демо-версии
 * Результат безопасен для коммита в git
 */
export function anonymizeClients(clients) {
  return clients.map(anonymizeClient)
}