import { IncomingMessage } from 'http'

type AbsoluteUrlHookData = {
  protocol: string
  host: string
  origin: string
}

const useAbsoluteUrl = (
  req?: IncomingMessage,
  localhostAddress = 'localhost:3000'
): AbsoluteUrlHookData => {
  let host =
    (req?.headers
      ? req.headers.host
      : typeof window !== 'undefined'
      ? window.location.host
      : localhostAddress) || localhostAddress
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'

  if (
    req &&
    req.headers['x-forwarded-host'] &&
    typeof req.headers['x-forwarded-host'] === 'string'
  ) {
    host = req.headers['x-forwarded-host']
  }

  if (
    req &&
    req.headers['x-forwarded-proto'] &&
    typeof req.headers['x-forwarded-proto'] === 'string'
  ) {
    protocol = `${req.headers['x-forwarded-proto']}:`
  }

  return {
    protocol,
    host,
    origin: protocol + '//' + host
  }
}

export { useAbsoluteUrl }
