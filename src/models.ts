export interface INote {
  id: string
  title: string
  task: string
  color: string
  favorite: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ICreateNote {
  title: string
  task: string
}

export interface IUpdateNote {
  id: string;
  title: string
  task: string
}
