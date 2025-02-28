import { appendHeader, getHeader, type HeadersArguments } from '../headers/index.js'

type CookieIO<T> = {
  parse: (cookieHeader: string | null) => Promise<T | null>
  serialize: (value: T) => Promise<string>
}
export type Cookie<T> = ReturnType<typeof cookie<T>>
export function cookie<T>({ parse, serialize }: CookieIO<T>) {
  async function read(headers: Headers) {
    const cookie = await parse(getHeader(headers, 'Cookie'))
    return cookie as T | null
  }
  async function write(value: T, headers?: Headers | Partial<HeadersArguments>) {
    const h = headers instanceof Headers ? headers : new Headers(headers)
    appendHeader(h, 'Set-Cookie', await serialize(value))
    return h
  }
  return {
    read,
    write
  }
}
