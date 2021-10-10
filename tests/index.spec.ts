import { deumlaut } from '../dist/index.js'

describe('Library', () => {
  it('removes umlauts from german tests when there is no second parameter', () => {
    expect(deumlaut('Glückstraße')).toBe('Glueckstrasse')
    expect(deumlaut('Mönchengladbach')).toBe('Moenchengladbach')
    expect(deumlaut('Ökologie')).toBe('Oekologie')
    expect(deumlaut('Ändern')).toBe('Aendern')
    expect(deumlaut('groẞ')).toBe('groSs')
  })

  it('removes umlauts from turkish tests when second parameter equals to "tr"', () => {
    expect(deumlaut('Fıstıkçı Şahap', 'tr')).toBe('Fistikci Sahap')
    expect(deumlaut('Çemişgezek', 'tr')).toBe('Cemisgezek')
    expect(deumlaut('Öğlen Gündönümü', 'tr')).toBe('Oglen Gundonumu')
  })

  it('warns if the locale is not a defined language', () => {
    // @ts-expect-error
    expect(() => deumlaut('perché', 'it')).toThrowError(
      new Error(
        `Please enter a valid locale, currently supported languages are: [de,tr]`
      )
    )
  })

  it('replaces umlauts with capitalized values when capitalize option selected', () => {
    expect(deumlaut('ÖKOLOGIE', 'de', { capitalize: true })).toBe('OEKOLOGIE')
    expect(deumlaut('HÄHNCHEN', 'de', { capitalize: true })).toBe('HAEHNCHEN')
    expect(deumlaut('stück', 'de', { capitalize: true })).toBe('stUEck')
    expect(deumlaut('Kadayıf şöbiyet', 'tr', { capitalize: true })).toBe(
      'KadayIf SObiyet'
    )
  })
})
