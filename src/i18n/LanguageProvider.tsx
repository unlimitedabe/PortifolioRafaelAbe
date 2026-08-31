import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'
import type { Language } from './types'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

function isLanguage(value: string | null): value is Language {
  return value === 'pt' || value === 'en'
}

function getInitialLanguage(): Language {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return isLanguage(storedLanguage) ? storedLanguage : 'pt'
  } catch {
    return 'pt'
  }
}

function updateMetaContent(selector: string, content: string) {
  const meta = document.head.querySelector<HTMLMetaElement>(selector)
  if (meta) meta.content = content
}

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  const t = translations[language]

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    } catch {
      // The language still changes for the current session when storage is unavailable.
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.lang = t.seo.htmlLang
    document.title = t.seo.title
    updateMetaContent('meta[name="description"]', t.seo.description)
    updateMetaContent('meta[property="og:locale"]', t.seo.openGraphLocale)
    updateMetaContent('meta[property="og:title"]', t.seo.title)
    updateMetaContent('meta[property="og:description"]', t.seo.description)
  }, [t])

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
