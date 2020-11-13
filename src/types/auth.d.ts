/* eslint-disable camelcase */
export type TokenType = {
  access_token: string
  expires_in: string
  token_type: string
  refresh_token: string
}

export type UserInfoType = {
  sub: string
  auth_time: number
  idp: string
  app: string
  email_verified: boolean
  company: string
  company_id: string
  email: string
  name: string
  amr: string
}

export type TokenRequest = {
  email: string
  password: string
  application: string
  companyId: string
}
