import { object, union, string, number } from '../../..'

const A = object({ a: string() })
const B = object({ b: number() })

export const Struct = union([A, B])

export const data = {
  a: 'a',
  c: undefined,
}

export const output = {
  a: 'a',
}

export const mask = true
