import { keys } from 'ts-transformer-keys'

import {
  PersonGroups,
  Books,
  BookChapterFiles,
  BookChapterImages,
} from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'book-chapters'

export type BookChapterType =
  | 'front-cover'
  | 'front-matter'
  | 'preface'
  | 'table-of-contents'
  | 'introduction'
  | 'chapter'
  | 'collected-volume-article'
  | 'title-page'
  | 'bibliography'
  | 'index'
  | 'appendix'
  | 'back-cover'
  | 'other'

export const bookChapterTypes = keys<UnionMap<BookChapterType>>()

export type BookChapterOnlineAccessType = 'open' | 'free' | 'subscription'
export const bookChapterOnlineAccessType = keys<
  UnionMap<BookChapterOnlineAccessType>
>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  chapterType: BookChapterType

  number?: string
  level: number

  titleTex: string
  title?: string
  subtitleTex?: string
  subtitle?: string
  abstractMarkdownTex?: string
  abstractMarkdown?: string

  doi?: string

  submittedAt?: Date
  submittedAtPrecision?: DatePrecision
  acceptedAt?: Date
  acceptedAtPrecision?: DatePrecision
  publishedAt?: Date
  publishedAtPrecision?: DatePrecision
  retractedAt?: Date
  retractedAtPrecision?: DatePrecision

  keywords?: string[]
  mscs?: string[]

  pages?: number
  pageStart?: string
  pageEnd?: string
  absolutePageStart?: number
  absolutePageEnd?: number

  copyright?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
  languageCode?: string

  onlineAccessType: BookChapterOnlineAccessType
}

export type Relationships = {
  book: { type: Books.Type; cardinality: '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  bookChapterFiles: { type: BookChapterFiles.Type; cardinality: 'N' }
  bookChapterImages: { type: BookChapterImages.Type; cardinality: 'N' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'submittedAt'
  | 'acceptedAt'
  | 'publishedAt'
  | 'retractedAt'
  | 'titleTex'
  | 'pages'
  | 'pageStart'
  | 'pageEnd'
  | 'absolutePageStart'
  | 'absolutePageEnd'

export type Filter = DateFilter<
  'created' | 'updated' | 'submitted' | 'accepted' | 'published' | 'retracted'
> &
  IsInFilter<
    Attributes,
    'chapterType' | 'doi' | 'licenseCode' | 'onlineAccessType' | 'languageCode'
  > & {
    mscs?: string[]
    keywords?: string[]
    book?: number[]
  }
