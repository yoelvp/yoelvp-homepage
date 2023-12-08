export const toCapitalize = (text: string = 'isEmpty') => {
  return text.charAt(0).toUpperCase().concat(text.substring(1))
}
