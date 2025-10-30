import { getHeader } from '../headers/index.js'

/**
 * Estrae informazioni utili riguardo l'url di una request.
 * @param request Un oggetto Request.
 * @returns Un oggetto contenente:
 *   - `url`: Un oggetto URL
 *   - `originalProtocol`: Il protocollo (comprensivo di `":"` alla fine), considerato l'eventuale inoltro tramite proxy
 *   - `originalHostname`: Il nome host, considerato l'eventuale inoltro tramite proxy
 *   - `rootDomain`: Il dominio radice (secondo e primo livello), basato su originalHostname
 * @throws Error se il protocollo non è supportato da Fetch.
 */
export function parseURL(request: Request) {
  const headers = request.headers
  const url = new URL(request.url)
  return {
    url,
    originalProtocol: getProtocol(headers, url),
    originalHostname: getHostname(headers, url),
    rootDomain: getRootDomain(headers, url)
  } as const
}
export type ParsedURL = ReturnType<typeof parseURL>

type Protocol = `${string}:`

function asFetchProtocol(protocol: Protocol) {
  if (protocol !== 'http:' && protocol !== 'https:') {
    throw new Error(`Unsupported protocol ${protocol}`)
  }
  return protocol
}

function getProtocol(headers: Headers, url: URL) {
  const fwdProtocol = getHeader(headers, 'X-Forwarded-Proto')
  if (fwdProtocol) return asFetchProtocol(`${fwdProtocol}:`)
  else return asFetchProtocol(url.protocol as Protocol)
}

function getHostname(headers: Headers, url: URL) {
  const fwdHost = getHeader(headers, 'X-Forwarded-Host')
  return fwdHost ? fwdHost.split(':')[0] : url.hostname
}

function getRootDomain(headers: Headers, url: URL) {
  const hostname = getHostname(headers, url)
  const domainParts = hostname.split('.')
  return domainParts.length > 2 ? domainParts.slice(-2).join('.') : hostname
}
