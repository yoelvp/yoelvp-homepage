export interface Project {
  title: string
  description: string
  thumb: string
  slug: string
  resources?: {
    github?: string
    website?: string
  }
  stack: string[]
  public: boolean
  createdAt: Date
  updatedAt: Date
}
