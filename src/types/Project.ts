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
  tags: string[]
  public: boolean
  createdAt: Date
  updatedAt: Date
}
