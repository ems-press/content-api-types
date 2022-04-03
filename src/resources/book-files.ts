import { keys } from 'ts-transformer-keys'

import * as Books from './books'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'book-files'

export type BookFileType =
  | 'full-text-json'
  | 'full-text-json-media'
  | 'full-text-jats-xml'
  | 'full-text-jats-xml-media'
  | 'full-text-online-pdf'
  | 'supplementary-post-publication-review'
  | 'supplementary-peer-review-report'
  | 'supplementary-data'
  | 'supplementary-source-code'
  | 'supplementary-video'
  | 'supplementary-material'

export const bookFileTypes = keys<UnionMap<BookFileType>>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  access: boolean
  url?: string
  contentType: string
  path: string
  sizeBytes: number
  md5: string
  sha256: string
  fileType: BookFileType
  publishedAt: Date
  publishedAtPrecision: DatePrecision
  description?: string
  copyright?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
  languageCode?: string
}

export type Relationships = {
  book: { type: Books.Type; cardinality: '1' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'contentType'
  | 'path'

export type Filter = DateFilter<'created' | 'updated' | 'published'> &
  IsInFilter<
    Attributes,
    | 'contentType'
    | 'path'
    | 'md5'
    | 'sha256'
    | 'fileType'
    | 'licenseCode'
    | 'languageCode'
  > & {
    book?: number[]
  }
