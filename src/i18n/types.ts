export type Language = 'pt' | 'en'

export type LocalizedTermKey =
  | 'automation'
  | 'database'
  | 'requirementsGathering'
  | 'responsiveDesign'
  | 'systemIntegration'
  | 'systemTesting'
  | 'technicalDocumentation'
  | 'thirdPartyApiIntegration'
  | 'webDevelopment'

export type LocalizedText =
  | string
  | {
      translationKey: LocalizedTermKey
    }
