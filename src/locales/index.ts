import translationAR from './ar/translations.json'
import translationDE from './de/translations.json'
import translationEnUs from './en/translations.json'
import translationES from './es/translations.json'
import translationFR from './fr/translations.json'
import translationIT from './it/translations.json'
import translationPtBR from './pt/translations.json'
import translationRU from './ru/translations.json'
import translationZhCN from './zh/translations.json'

const resources: { [language: string]: any } = {
  it: {
    name: 'Italian',
    translation: translationIT,
  },
  ar: {
    name: 'Arabic',
    translation: translationAR,
  },
  de: {
    name: 'German',
    translation: translationDE,
  },
  en: {
    name: 'English, American',
    translation: translationEnUs,
  },
  es: {
    name: 'Spanish',
    translation: translationES,
  },
  fr: {
    name: 'French',
    translation: translationFR,
  },
  ptBR: {
    name: 'Portuguese',
    translation: translationPtBR,
  },
  ru: {
    name: 'Russian',
    translation: translationRU,
  },
  zhCN: {
    name: 'Chinese',
    translation: translationZhCN,
  },
}

export default resources
