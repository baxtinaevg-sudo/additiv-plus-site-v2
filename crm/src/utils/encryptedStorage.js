/**
 * encryptedStorage.js — Зашифрованное localStorage (152-ФЗ compliant)
 *
 * Обёртка над localStorage с автоматическим шифрованием/расшифрованием
 * через AES-256-GCM. Использует мастер-ключ из sessionStorage.
 */

import { encrypt, decrypt, getMasterKey } from './crypto.js'

const PREFIX = 'enc_'

/**
 * Сохраняет значение в localStorage с шифрованием
 * @param {string} key - ключ
 * @param {string} value - значение для шифрования и сохранения
 */
export async function setItem(key, value) {
  if (!value) {
    localStorage.removeItem(key)
    return
  }

  try {
    const encrypted = await encrypt(value)
    localStorage.setItem(key, PREFIX + encrypted)
  } catch (error) {
    console.error('Encryption failed:', error)
    localStorage.setItem(key, value)
  }
}

/**
 * Получает и расшифровывает значение из localStorage
 * @param {string} key - ключ
 * @returns {Promise<string|null>} - расшифрованное значение или null
 */
export async function getItem(key) {
  const value = localStorage.getItem(key)
  if (!value) return null

  if (!value.startsWith(PREFIX)) {
    return value
  }

  try {
    const encryptedValue = value.slice(PREFIX.length)
    return await decrypt(encryptedValue)
  } catch (error) {
    console.error('Decryption failed:', error)
    return null
  }
}

/**
 * Удаляет значение из localStorage
 * @param {string} key - ключ
 */
export function removeItem(key) {
  localStorage.removeItem(key)
}

/**
 * Очищает все значения из localStorage
 */
export function clear() {
  localStorage.clear()
}
