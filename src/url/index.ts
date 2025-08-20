/**
 * @param resource Una stringa (rappresentante un URL assoluto), un oggetto Request o un oggetto URL da cui estrarre il dominio.
 * @returns Il dominio radice (secondo e primo livello).
 */
export function getRootDomain(resource: string | Request | URL) {
  const { hostname } =
    typeof resource === 'string' ? new URL(resource)
    : resource instanceof Request ? new URL(resource.url)
    : resource
  // TODO: gestire bug navigando tramite indirizzo IP
  const domainParts = hostname.split('.')
  return domainParts.length > 2 ? domainParts.slice(-2).join('.') : hostname
}

/**
 * @param resource Una stringa (rappresentante un URL assoluto), un oggetto Request o un oggetto URL da cui estrarre il protocollo.
 * @returns Il protocollo comprensivo di `":"` alla fine.
 * @throws Error se il protocollo non è supportato da fetch.
 */
export function getProtocol(resource: string | Request | URL) {
  if (resource instanceof Request) {
    const fwdProtocol = resource.headers.get('x-forwarded-proto')
    if (fwdProtocol) return asFetchProtocol(`${fwdProtocol}:`)

    return getProtocol(resource.url)
  }

  const { protocol } = typeof resource === 'string' ? new URL(resource) : resource
  return asFetchProtocol(protocol as Protocol)
}

type Protocol = `${string}:`

function asFetchProtocol(protocol: Protocol) {
  if (protocol !== 'http:' && protocol !== 'https:') {
    throw new Error(`Unsupported protocol ${protocol}`)
  }
  return protocol
}
