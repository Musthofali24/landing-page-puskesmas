import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// Blog API
export const blogApi = {
  // Get all blogs with pagination
  getAll: (params = {}) => api.get('/blogs', { params }),

  // Get latest blogs
  getLatest: (limit = 6) =>
    api.get('/blogs/latest', { params: { per_page: limit } }),

  // Get popular blogs
  getPopular: (limit = 6) =>
    api.get('/blogs/popular', { params: { per_page: limit } }),

  // Get blogs by category
  getByCategory: (category, params = {}) =>
    api.get(`/blogs/category/${category}`, { params }),

  // Get single blog by slug
  getBySlug: slug => api.get(`/blogs/${slug}`),

  // Get related blogs
  getRelated: (slug, limit = 3) =>
    api.get(`/blogs/${slug}/related`, { params: { per_page: limit } })
}

// Staff API
export const staffApi = {
  // Get all staff with pagination
  getAll: (params = {}) => api.get('/staff', { params }),

  // Get all staff without pagination
  getAllNoPagination: (params = {}) => api.get('/staff/all', { params }),

  // Get single staff by ID
  getById: id => api.get(`/staff/${id}`)
}

export default api
