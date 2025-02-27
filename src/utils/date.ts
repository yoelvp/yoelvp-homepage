export const valueOfDate = (date: string) => {
  return new Date(date).valueOf()
}

export const sortDateDesc = (a: string, b: string) => {
  return valueOfDate(b) - valueOfDate(a)
}
