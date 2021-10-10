import { Locale } from '../types'

export const de: Locale = {
  name: 'de',
  rules: [
    { from: 'ö', to: 'oe' },
    { from: 'ü', to: 'ue' },
    { from: 'ä', to: 'ae' },
    { from: 'ß', to: 'ss' },
    { from: 'Ö', to: 'Oe' },
    { from: 'Ü', to: 'Ue' },
    { from: 'Ä', to: 'Ae' },
    { from: 'ẞ', to: 'Ss' },
  ],
}
