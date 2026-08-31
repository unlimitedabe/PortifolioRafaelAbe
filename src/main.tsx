import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'
import './styles/global.css'

function resetNavigationOnReload() {
  const navigationEntry = performance.getEntriesByType(
    'navigation',
  )[0] as PerformanceNavigationTiming | undefined

  if (navigationEntry?.type !== 'reload') return false

  const previousScrollRestoration = history.scrollRestoration
  const previousScrollBehavior = document.documentElement.style.scrollBehavior

  history.scrollRestoration = 'manual'
  document.documentElement.style.scrollBehavior = 'auto'

  if (window.location.hash) {
    const cleanUrl = `${window.location.pathname}${window.location.search}`
    history.replaceState(history.state, '', cleanUrl)
  }

  const scrollToTop = () => window.scrollTo(0, 0)

  scrollToTop()

  const finishReset = () => {
    scrollToTop()
    window.requestAnimationFrame(() => {
      scrollToTop()
      document.documentElement.style.scrollBehavior = previousScrollBehavior
      history.scrollRestoration = previousScrollRestoration
    })
  }

  if (document.readyState === 'complete') {
    finishReset()
  } else {
    window.addEventListener('load', finishReset, { once: true })
  }

  return true
}

function scrollToInitialAnchor() {
  const targetId = window.location.hash.slice(1)

  if (!targetId) return

  const scrollToTarget = () => {
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView()
    })
  }

  if (document.readyState === 'complete') {
    scrollToTarget()
  } else {
    window.addEventListener('load', scrollToTarget, { once: true })
  }
}

const wasReload = resetNavigationOnReload()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)

if (!wasReload) scrollToInitialAnchor()
