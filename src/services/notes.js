import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const setToken = (setToken) => {
  token = `Bearer ${setToken}`
}

const getAll = async () => {
  let response = await fetch(baseUrl)
  let data = await response.json()
  return data
}

const create = async (newObject) => {
  const options = {
    headers: {
      Authorization: token,
    },
  }
  const response = await axios.post(baseUrl, newObject, options)
  return response.data
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteEntry = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteEntry, setToken }
