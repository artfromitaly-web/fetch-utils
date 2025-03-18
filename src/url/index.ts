export function getRootDomain(request: string | Request | URL) {
  const { hostname } =
    typeof request === 'string' ? new URL(request)
    : request instanceof Request ? new URL(request.url)
    : request
  // TODO: gestire bug navigando tramite indirizzo IP
  const domainParts = hostname.split('.')
  return domainParts.length > 2 ? domainParts.slice(-2).join('.') : hostname
}

export function getProtocol(request: string | Request | URL) {
  if (request instanceof Request) {
    const fwdProtocol = request.headers.get('x-forwarded-proto')
    if (fwdProtocol) return fwdProtocol

    return getProtocol(request.url)
  }

  const url = typeof request === 'string' ? new URL(request) : request
  return url.protocol
}
