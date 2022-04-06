import { keys } from 'ts-transformer-keys'

import { BookChapterFiles, BookChapters } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'book-chapter-images'

export type BookChapterImageType =
  | 'full-text-jats-xml-image'
  | 'full-text-json-image'
  | 'supplementary-image'
export const bookChapterImageTypes = keys<UnionMap<BookChapterImageType>>()

export type Attributes = Omit<BookChapterFiles.Attributes, 'fileType'> & {
  fileType: BookChapterImageType
  width: number
  height: number
}

export type Relationships = {
  bookChapter: { type: BookChapters.Type; cardinality: '1' }
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
    bookChapter?: number[]
  }
