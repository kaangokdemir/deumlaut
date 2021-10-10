import { LocaleName, DeumlautOptions } from '../src/types'
import { locales } from './locales'

const defaultOptions: DeumlautOptions = {
  capitalize: false,
}

export const deumlaut = (
  text: string,
  locale: LocaleName = 'de',
  options = defaultOptions
) => {
  const currentLocale = locales.find((l) => l.name === locale)

  if (!currentLocale) {
    throw new Error(
      `Please enter a valid locale, currently supported languages are: [${locales.map(
        (locale) => locale.name
      )}]`
    )
  }

  currentLocale.rules.forEach((rule) => {
    const fromRegex = new RegExp(rule.from, 'g')

    const replaceValue = options.capitalize
      ? rule.to.toLocaleUpperCase(locale)
      : rule.to

    text = text.replace(fromRegex, replaceValue)
  })

  return text
}
