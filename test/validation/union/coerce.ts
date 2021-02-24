import { type, union, string, number, coerce } from '../../..'

const A = type({ a: coerce(number(), string(), (num) => parseInt(num)) })
const B = type({ b: number() })

export const Struct = union([A, B])

export const data = {
  a: '123',
}

export const output = {
  a: 123,
}

export const create = true
