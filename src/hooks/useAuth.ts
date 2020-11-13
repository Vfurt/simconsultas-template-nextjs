import { activeAuth, ssoAppEndpoint } from './../utils/constants'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { getUserInfo } from '../services/auth.api'
import { UserInfoType } from '../types/auth'
import { useAbsoluteUrl } from './useAbsoluteUrl'
import Axios from 'axios'

const AppConfig = {
  auth: { clientId: process.env.NEXT_PUBLIC_CLIENT_ID }
}

type AuthHookData = {
  user: UserInfoType | null
  loading: boolean
  logout: () => void
}

const useAuth = ({
  redirectTo = '',
  redirectIfFound = false
} = {}): AuthHookData => {
  const [user, setUser] = useState<UserInfoType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { origin } = useAbsoluteUrl()

  useEffect(() => {
    async function loadUserFromCookies() {
      const ScAuth = Cookies.get('ScAuth')

      if (ScAuth) {
        console.log('Token encontrado')

        setLoading(true)

        try {
          const { data } = await Axios.request<UserInfoType>(getUserInfo)
          if (data) {
            setUser(data)
            if (redirectIfFound) await Router.push(redirectTo)
          } else {
            await Router.push(
              `${ssoAppEndpoint.baseUrl}/auth/login?application=${AppConfig.auth.clientId}&returnUrl=${origin}`
            )
          }
        } catch (e) {
          Cookies.remove('ScAuth')
          console.log(e)
        }
      } else if (
        activeAuth &&
        ((redirectTo && !redirectIfFound) || (redirectIfFound && user))
      ) {
        await Router.push(redirectTo)
      }
      if (!activeAuth) {
        setUser({ name: 'TestUser', company: 'TestCompany', ...user })
      }
      setLoading(false)
    }

    loadUserFromCookies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectTo, redirectIfFound, origin])

  const logout = () => {
    Cookies.remove('ScAuth')
    setUser(null)
    window.location.pathname = '/'
  }

  return { user, logout, loading }
}

export { useAuth }
