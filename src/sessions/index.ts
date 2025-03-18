import { appendHeader, getHeader, HeadersArguments } from '../headers/index.js'

type Session<
  Data extends Record<string, unknown>,
  FlashData extends Record<string, unknown>
> = {
  get<Key extends keyof Data | keyof FlashData>(
    name: Key
  ):
    | (Key extends keyof Data ? Data[Key] : undefined)
    | (Key extends keyof FlashData ? FlashData[Key] : undefined)
    | undefined
  set<Key extends keyof Data>(name: Key, value: Data[Key]): void
  flash<Key extends keyof FlashData>(name: Key, value: FlashData[Key]): void
  unset(name: keyof Data): void
}

type SaveFunction<
  Data extends Record<string, unknown>,
  FlashData extends Record<string, unknown>
> = (session: Session<Data, FlashData>) => Promise<string>

interface SessionStorage<
  Data extends Record<string, unknown>,
  FlashData extends Record<string, unknown>
> {
  getSession: (cookieHeader?: string | null) => Promise<Session<Data, FlashData>>
  commitSession: SaveFunction<Data, FlashData>
  destroySession: SaveFunction<Data, FlashData>
}

function getSaveOnHeaders(saveFunction: () => Promise<string>) {
  return async (headers?: Headers | Partial<HeadersArguments>) => {
    const h = headers instanceof Headers ? headers : new Headers(headers)
    appendHeader(h, 'Set-Cookie', await saveFunction())
    return h
  }
}

export function sessionStorage<
  Data extends Record<string, unknown>,
  FlashData extends Record<string, unknown>
>({ getSession, commitSession, destroySession }: SessionStorage<Data, FlashData>) {
  async function _getSession(headers: Headers) {
    const session = await getSession(getHeader(headers, 'Cookie'))

    const sessionBuilder = {
      get: session.get,
      set: <Key extends keyof Data>(name: Key, value: Data[Key]) => {
        session.set(name, value)
        return sessionBuilder
      },
      flash: <Key extends keyof FlashData>(name: Key, value: FlashData[Key]) => {
        session.flash(name, value)
        return sessionBuilder
      },
      unset: (name: keyof Data) => {
        session.unset(name)
        return sessionBuilder
      },
      save: getSaveOnHeaders(() => commitSession(session)),
      clear: getSaveOnHeaders(() => destroySession(session))
    }
    return sessionBuilder
  }
  return {
    getSession: _getSession
  }
}
