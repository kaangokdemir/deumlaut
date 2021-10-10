export type LocaleName = 'de' | 'tr'

export interface Rule {
  from: string
  to: string
}

export interface Locale {
  name: LocaleName
  rules: Rule[]
}

export interface DeumlautOptions {
  capitalize?: boolean
}
