export function getRootDomain(request: string | Request | URL) {
  const { hostname } =
    typeof request === 'string' ? new URL(request)
    : request instanceof Request ? new URL(request.url)
    : request
  const domainParts = hostname.split('.')
  return domainParts.length > 2 ? domainParts.slice(-2).join('.') : hostname
}
