export const unslugify = (name: string): string => {
   const words = name.split('-')
   const [first, ...rest] = words
   const firstWordCapitalize = first.charAt(0).toUpperCase() + first.slice(1)
   return [firstWordCapitalize, ...rest].join(' ')
}
