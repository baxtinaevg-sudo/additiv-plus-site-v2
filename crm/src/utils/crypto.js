/**
 * crypto.js — Шифрование персональных данных для CRM (152-ФЗ compliant)
 *
 * Использует Web Crypto API (AES-256-GCM) для шифрования:
 * - Телефонов контактов
 * - Email адресов
 * - Других чувствительных данных
 *
 * Ключ шифрования хранится в sessionStorage (теряется при закрытии браузера)
 * Для продакшна ключ должен приходить с сервера по HTTPS.
 */

// Константы
const ALGORITHM = 'AES-GCM'
const KEY_LENGTH = 256
const SALT_LENGTH = 16
const IV_LENGTH = 12

/**
 * Генерирует криптографически стойкий случайный salt
 */
function generateSalt() {
  const salt = new Uint8Array(SALT_LENGTH)
  crypto.getRandomValues(salt)
  return Array.from(salt, b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Генерирует криптографически стойкий IV (Initialization Vector)
 */
function generateIV() {
  const iv = new Uint8Array(IV_LENGTH)
  crypto.getRandomValues(iv)
  return Array.from(iv, b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Выводит ключ из пароля и salt с использованием PBKDF2
 * @param {string} password - пароль или мастер-ключ
 * @param {string} salt - salt в hex
 * @returns {Promise<CryptoKey>} - ключ для шифрования
 */
async function deriveKey(password, salt) {
  const encoder = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  )

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: ALGORITHM, length: KEY_LENGTH },
    false,
    ['encrypt', 'decrypt']
  )
}

/**
 * Генерирует мастер-ключ для сессии
 * В продакшне ключ должен приходить с сервера
 * @returns {string} - мастер-ключ в hex
 */
export function generateMasterKey() {
  const key = new Uint8Array(32)
  crypto.getRandomValues(key)
  return Array.from(key, b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Сохраняет мастер-ключ в sessionStorage
 * @param {string} key - мастер-ключ
 */
export function storeMasterKey(key) {
  sessionStorage.setItem('crm_master_key', key)
}

/**
 * Получает мастер-ключ из sessionStorage
 * @returns {string|null} - мастер-ключ или null
 */
export function getMasterKey() {
  return sessionStorage.getItem('crm_master_key')
}

/**
 * Очищает мастер-ключ из sessionStorage
 */
export function clearMasterKey() {
  sessionStorage.removeItem('crm_master_key')
}

/**
 * Шифрует данные с использованием AES-256-GCM
 * @param {string} plaintext - данные для шифрования
 * @param {string} masterKey - мастер-ключ (опционально, берётся из sessionStorage)
 * @returns {Promise<string>} - зашифрованные данные в формате: salt:iv:ciphertext
 */
export async function encrypt(plaintext, masterKey = null) {
  if (!plaintext) return plaintext

  const key = masterKey || getMasterKey()
  if (!key) {
    throw new Error('Мастер-ключ не найден. Используйте storeMasterKey()')
  }

  const salt = generateSalt()
  const iv = generateIV()
  const cryptoKey = await deriveKey(key, salt)

  const encoder = new TextEncoder()
  const ciphertext = await crypto.subtle.encrypt(
    { name: ALGORITHM, iv: encoder.encode(iv) },
    cryptoKey,
    encoder.encode(plaintext)
  )

  // Конвертируем в hex и формируем результат
  const ciphertextHex = Array.from(new Uint8Array(ciphertext), b => b.toString(16).padStart(2, '0')).join('')
  return `${salt}:${iv}:${ciphertextHex}`
}

/**
 * Расшифровывает данные
 * @param {string} encryptedData - зашифрованные данные (salt:iv:ciphertext)
 * @param {string} masterKey - мастер-ключ (опционально, берётся из sessionStorage)
 * @returns {Promise<string>} - расшифрованные данные
 */
export async function decrypt(encryptedData, masterKey = null) {
  if (!encryptedData) return encryptedData

  const key = masterKey || getMasterKey()
  if (!key) {
    throw new Error('Мастер-ключ не найден. Используйте storeMasterKey()')
  }

  const [salt, iv, ciphertextHex] = encryptedData.split(':')
  if (!salt || !iv || !ciphertextHex) {
    throw new Error('Неверный формат зашифрованных данных')
  }

  const cryptoKey = await deriveKey(key, salt)

  // Конвертируем hex обратно в байты
  const ciphertext = new Uint8Array(ciphertextHex.match(/.{2}/g).map(b => parseInt(b, 16)))

  const decrypted = await crypto.subtle.decrypt(
    { name: ALGORITHM, iv: new TextEncoder().encode(iv) },
    cryptoKey,
    ciphertext
  )

  const decoder = new TextDecoder()
  return decoder.decode(decrypted)
}

/**
 * Шифрует телефон для хранения
 * @param {string} phone - номер телефона
 * @returns {Promise<string>} - зашифрованный телефон
 */
export async function encryptPhone(phone) {
  return encrypt(phone)
}

/**
 * Расшифровывает телефон
 * @param {string} encryptedPhone - зашифрованный телефон
 * @returns {Promise<string>} - расшифрованный телефон
 */
export async function decryptPhone(encryptedPhone) {
  return decrypt(encryptedPhone)
}

/**
 * Шифрует email для хранения
 * @param {string} email - email адрес
 * @returns {Promise<string>} - зашифрованный email
 */
export async function encryptEmail(email) {
  return encrypt(email)
}

/**
 * Расшифровывает email
 * @param {string} encryptedEmail - зашифрованный email
 * @returns {Promise<string>} - расшифрованный email
 */
export async function decryptEmail(encryptedEmail) {
  return decrypt(encryptedEmail)
}

/**
 * Проверяет, зашифрованы ли данные
 * @param {string} data - данные для проверки
 * @returns {boolean} - true если данные зашифрованы
 */
export function isEncrypted(data) {
  if (!data || typeof data !== 'string') return false
  const parts = data.split(':')
  return parts.length === 3 &&
    parts[0].length === SALT_LENGTH * 2 &&
    parts[1].length === IV_LENGTH * 2
}

/**
 * Инициализация шифрования при запуске CRM
 * Генерирует и сохраняет мастер-ключ для текущей сессии
 * @returns {string} - сгенерированный мастер-ключ
 */
export function initEncryption() {
  const key = generateMasterKey()
  storeMasterKey(key)
  return key
}
