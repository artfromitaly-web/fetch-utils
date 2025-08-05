import { getHeader } from '../headers/index.js'

export function isMobile(request: Request | Headers): boolean {
  const headers = request instanceof Request ? request.headers : request
  const userAgent = getHeader(headers, 'User-Agent') || ''
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Windows Phone/i
  return mobileRegex.test(userAgent)
}
