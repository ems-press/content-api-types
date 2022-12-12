import { keys } from 'ts-transformer-keys'
import { UnionMap } from './util'

export type DatePrecision = 'day' | 'month' | 'year'
export const datePrecisions = keys<UnionMap<DatePrecision>>()
