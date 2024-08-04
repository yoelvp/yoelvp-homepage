export interface Project {
  title: string
  description: string
  heroImage: string
  slug: string
  github?: string
  website?: string
  stack: string[]
  tags: string[]
  public: boolean
  layout: string
  createdAt: Date
  updatedAt: Date
}
