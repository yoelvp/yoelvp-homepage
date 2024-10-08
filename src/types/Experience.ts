export interface Experience {
  startDate: string
  endDate: string
  position: string
  companyName: string
  companyWebsite: string
  details: string[]
  description?: string
  projects?: Array<{
    name: string
    link: string
  }>
  stack: string[]
}
