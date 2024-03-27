import * as names from './names.js'

export const header = names

type Names = typeof names
export type HeaderName = Names[keyof Names]

type ManagedHeadersArgs = {
  [names.Authorization]: Authorization
  [names.SetCookie]: string
  [names.ContentType]: `${MimeType}${'' | `; charset=${Charset}`}`
}
type ManagedHeaderName = keyof ManagedHeadersArgs

export type HeadersArguments = {
  [k in HeaderName]: k extends ManagedHeaderName ? ManagedHeadersArgs[k] : string
}

// #region MimeType
const mimeTypes = {
  application: ['json', 'x-www-form-urlencoded', 'pdf'],
  text: ['html']
} as const satisfies { [k: string]: string[] }

type MimeTypes = typeof mimeTypes
type MimeTypes_Type = keyof MimeTypes
type MimeTypes_Subtype<T extends MimeTypes_Type> = MimeTypes[T][number]
type MimeTypeString<T extends MimeTypes_Type> = `${T}/${MimeTypes_Subtype<T>}`

type MimeType = MimeTypeString<'application'> | MimeTypeString<'text'>
export function isMimeType(x: unknown): x is MimeType {
  if (typeof x === 'string') {
    const [type, subtype] = x.split('/')
    return isMimeTypes_Type(type) && (mimeTypes[type] as string[]).includes(subtype)
  }
  return false
}
function isMimeTypes_Type(x: unknown): x is MimeTypes_Type {
  return typeof x === 'string' && Object.keys(mimeTypes).includes(x)
}
// #endregion

// #region Charset
type Charset = Exclude<
  BufferEncoding,
  | 'ascii'
  | 'utf8'
  | 'utf16le'
  | 'utf-16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'binary'
  | 'hex'
>
// #endregion

// #region Authorization
const authSchemes = ['Basic', 'Bearer'] as const
export type AuthScheme = (typeof authSchemes)[number]
type Authorization = `${AuthScheme} ${string}`
// #endregion

export function setHeader<T extends HeaderName>(
  headers: Headers,
  name: T,
  value: HeadersArguments[T]
) {
  return headers.set(name, value)
}

export function appendHeader<T extends HeaderName>(
  headers: Headers,
  name: T,
  value: HeadersArguments[T]
) {
  return headers.append(name, value)
}

export function getHeader<T extends HeaderName>(headers: Headers, name: T) {
  return headers.get(name) as HeadersArguments[T] | null
}

export class HeadersBuilder {
  private _headers: Headers
  constructor() {
    this._headers = new Headers()
  }

  set<T extends HeaderName>(name: T, value: HeadersArguments[T]) {
    setHeader(this._headers, name, value)
    return this
  }

  append<T extends HeaderName>(name: T, value: HeadersArguments[T]) {
    appendHeader(this._headers, name, value)
    return this
  }

  build() {
    return this._headers
  }
}
