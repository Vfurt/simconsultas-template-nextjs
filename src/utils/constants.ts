export const ssoAppEndpoint = {
  baseUrl: process.env.NEXT_PUBLIC_SSO_APP_URL
}

export const ssoApiEndpoint = {
  baseUrl: process.env.NEXT_PUBLIC_SSO_API_URL
}

export const ssoClientId = process.env.NEXT_PUBLIC_CLIENT_ID

export const environment: 'DEV' | 'PRD' =
  process.env.NODE_ENV === 'development' ? 'DEV' : 'PRD'

export const activeAuth = process.env.NEXT_PUBLIC_ACTIVE_AUTH === 'true'
