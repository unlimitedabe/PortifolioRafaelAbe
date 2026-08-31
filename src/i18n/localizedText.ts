import type { LocalizedText, LocalizedTermKey } from './types'

export function getLocalizedText(
  item: LocalizedText,
  terms: Record<LocalizedTermKey, string>,
) {
  return typeof item === 'string' ? item : terms[item.translationKey]
}

export function getLocalizedTextKey(item: LocalizedText) {
  return typeof item === 'string' ? item : item.translationKey
}
