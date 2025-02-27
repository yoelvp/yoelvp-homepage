export interface Project {
  title: string
  description: string
  thumb: string
  slug: string
  github?: string
  website: string
  inDevelopment?: boolean
  stack: string[]
  public: boolean
  createdAt: string
  updatedAt: string
}
