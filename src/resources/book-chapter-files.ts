import { keys } from 'ts-transformer-keys'

import * as BookChapters from './book-chapters'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'book-chapter-files'

export type BookChapterFileType =
  | 'full-text-json'
  | 'full-text-json-media'
  | 'full-text-jats-xml'
  | 'full-text-jats-xml-media'
  | 'full-text-online-pdf'
  | 'supplementary-book-chapter-preface'
  | 'supplementary-book-chapter-foreword'
  | 'supplementary-book-chapter-introduction'
  | 'supplementary-book-chapter-table-of-contents'
  | 'supplementary-book-chapter-index'
  | 'supplementary-book-chapter-author-index'
  | 'supplementary-book-chapter-prize'
  | 'supplementary-book-chapter-addendum'
  | 'supplementary-book-chapter-review'
  | 'supplementary-data'
  | 'supplementary-erratum'
  | 'supplementary-peer-review-report'
  | 'supplementary-post-publication-review'
  | 'supplementary-source-code'
  | 'supplementary-video'
  | 'supplementary-material'

export const bookChapterFileTypes = keys<UnionMap<BookChapterFileType>>()

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
  fileType: BookChapterFileType
  publishedAt: Date
  publishedAtPrecision: DatePrecision
  description?: string
  copyright?: string
  copyrightUrl?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
  languageCode?: string
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
