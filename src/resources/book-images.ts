import { keys } from 'ts-transformer-keys'

import { BookFiles, Books } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'book-images'

export type BookImageType =
  | 'full-text-jats-xml-image'
  | 'full-text-json-image'
  | 'supplementary-image'
export const bookImageTypes = keys<UnionMap<BookImageType>>()

export type Attributes = Omit<BookFiles.Attributes, 'fileType'> & {
  fileType: BookImageType
  width: number
  height: number
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
