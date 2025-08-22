import { appendHeader, getHeader, type HeadersArguments } from '../headers/index.js'

type CookieIO<T> = {
  parse: (cookieHeader: string | null) => Promise<T | null>
  serialize(value: T, options?: never): Promise<string>
  serialize(value: null, options: { maxAge: 0 }): Promise<string>
}
export type Cookie<T> = ReturnType<typeof cookie<T>>
export function cookie<T>({ parse, serialize }: CookieIO<T>) {
  return {
    read: (headers: Headers) => parse(getHeader(headers, 'Cookie')),
    write: async (value: T, headers?: Headers | Partial<HeadersArguments>) => {
      return saveOnHeaders(await serialize(value), headers)
    },
    delete: async (headers?: Headers | Partial<HeadersArguments>) => {
      return saveOnHeaders(await serialize(null, { maxAge: 0 }), headers)
    }
  }
}

type SessionIO<S> = {
  getSession: (cookieHeader?: string | null) => Promise<S>
  commitSession: (session: S) => Promise<string>
  destroySession: (session: S) => Promise<string>
}
export function session<T>({
  getSession,
  commitSession,
  destroySession
}: SessionIO<T>) {
  return {
    getSession: async (request: Request | Headers) => {
      const headers = request instanceof Request ? request.headers : request
      const session = await getSession(getHeader(headers, 'Cookie'))
      return {
        ...session,
        save: async (headers?: Headers | Partial<HeadersArguments>) => {
          return saveOnHeaders(await commitSession(session), headers)
        },
        clear: async (headers?: Headers | Partial<HeadersArguments>) => {
          return saveOnHeaders(await destroySession(session), headers)
        }
      }
    }
  }
}

function saveOnHeaders(
  cookieSerializedValue: string,
  headers?: Headers | Partial<HeadersArguments>
) {
  const h = headers instanceof Headers ? headers : new Headers(headers)
  appendHeader(h, 'Set-Cookie', cookieSerializedValue)
  return h
}
