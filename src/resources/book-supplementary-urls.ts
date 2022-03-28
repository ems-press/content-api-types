import { keys } from 'ts-transformer-keys'

import { Books } from './index'
import { DateFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'book-supplementary-urls'

export type BookSupplementaryUrlType =
  | 'data'
  | 'erratum'
  | 'image'
  | 'prize'
  | 'review'
  | 'source-code'
  | 'video'
  | 'other'

export const bookSupplementaryUrlTypes =
  keys<UnionMap<BookSupplementaryUrlType>>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  title: string
  description?: string
  url: string
  urlType: BookSupplementaryUrlType
}

export type Relationships = {
  book: { type: Books.Type; cardinality: '1' }
}

export type SortField = 'createdAt' | 'updatedAt'

export type Filter = DateFilter<'created' | 'updated'> &
  IsInFilter<Attributes, 'urlType'> & {
    book?: number[]
  }
