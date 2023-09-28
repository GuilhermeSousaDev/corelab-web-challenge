import { api } from '../boot/api'
import { INote, ICreateNote, IUpdateNote } from '../models'

export const NoteService = {
  async getNotes(): Promise<INote[]> {
    const notes = await api.get<INote[]>('/todo')

    return notes.data
  },

  async create({ title, task }: ICreateNote) {
    const res = await api.post('/todo', {
      title,
      task,
    })

    return res
  },

  async update({ id, title, task }: IUpdateNote) {
    const res = await api.put(`todo/${id}`, {
      title,
      task,
    })

    return res
  },

  async delete(id: string) {
    await api.delete(`/todo/${id}`)
  },

  async updateColor(id: string, color: string) {
    await api.put(`todo/color/${id}`, { color })
  },

  async addNoteToFavorite(id: string) {
    await api.put(`todo/favorite/${id}`)
  },
}
