import {
  ssoAppEndpoint,
  ssoApiEndpoint,
  ssoClientId
} from './../utils/constants'
import { UserInfoType } from '../types/auth'
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const getUserInfoc = async (): Promise<AxiosResponse<UserInfoType>> => {
  return await Axios.request<UserInfoType>({
    baseURL: ssoApiEndpoint.baseUrl,
    url: '/connect/userinfo',
    method: 'GET'
  })
}

export const getUserInfo: AxiosRequestConfig = {
  baseURL: ssoApiEndpoint.baseUrl,
  url: '/connect/userinfo',
  method: 'GET'
}

export const authenticate = (returnUrl: string): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    baseURL: ssoAppEndpoint.baseUrl,
    url: `/auth/login?application=${ssoClientId}&returnUrl=${returnUrl}`
  }
  return config
}
