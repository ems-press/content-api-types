import { keys } from 'ts-transformer-keys'
import { UnionMap } from './util'

export type DatePrecision = 'minute' | 'hour' | 'day' | 'month' | 'year'
export const datePrecisions = keys<UnionMap<DatePrecision>>()
