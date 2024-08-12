const INFO_KEY = 'shopping_info'
const SEARCH_HISTORY_KEY = 'search_history'

export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { userid: '', token: '' }
}

export const setInfo = (value) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(value))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getHistory = () => {
  const result = localStorage.getItem(SEARCH_HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

export const setHistory = (value) => {
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(value))
}

export const removeHistory = () => {
  localStorage.removeItem(SEARCH_HISTORY_KEY)
}
