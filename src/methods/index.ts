import * as method from './methods.js'

type MehtodType = typeof method
export type Method = MehtodType[keyof MehtodType]

export { method }
