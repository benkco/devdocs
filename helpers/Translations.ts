/* eslint-disable indent */
import * as Codes from '@/data/Codes'
import en_US from '@/locales/en_US.json'

import { Languages, TranslationsTypes } from '@/ts'

export const Translation = (key: string, language: Languages = 'en_US'): string => {
    if(!key) return Codes.TRANSLATION_KEY_NOT_PROVIDED
    if(!language) return Codes.INVALID_TRANSLATION_LANGUAGE

    let translations: TranslationsTypes

    switch(language) {
        case 'en_US': translations = en_US; break
        // case 'de_DE': translations = de_DE; break
    }

    let translation: string = translations[key] || Codes.INVALID_TRANSLATION_KEY

    return translation
}