import { keys } from 'ts-transformer-keys'

import {
  PersonGroups,
  BookSeries,
  Books,
  // BookChapterFiles,
  // BookChapterImages,
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
  submittedAt?: Date
  submittedAtPrecision?: DatePrecision
  acceptedAt?: Date
  acceptedAtPrecision?: DatePrecision
  publishedAt: Date
  publishedAtPrecision: DatePrecision
  retractedAt?: Date
  retractedAtPrecision?: DatePrecision
  title: string
  titleTex: string
  subtitle?: string
  subtitleTex?: string
  abstractMarkdown?: string
  abstractMarkdownTex?: string
  doi?: string
  mscs?: string[]
  keywords?: string[]
  pages?: number
  pageStart?: number
  pageEnd?: number
  copyright?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
  onlineAccessType: BookChapterOnlineAccessType
  readDescriptionMarkdown?: string
  languageCode?: string
}

export type Relationships = {
  bookSeries: { type: BookSeries.Type; cardinality: null | '1' }
  book: { type: Books.Type; cardinality: '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  // bookChapterFiles: { type: BookChapterFiles.Type; cardinality: 'N' }
  // bookChapterImages: { type: BookChapterImages.Type; cardinality: 'N' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'submittedAt'
  | 'acceptedAt'
  | 'publishedAt'
  | 'retractedAt'
  | 'title'
  | 'pages'
  | 'pageStart'
  | 'pageEnd'

export type Filter = DateFilter<
  'created' | 'updated' | 'submitted' | 'accepted' | 'published' | 'retracted'
> &
  IsInFilter<
    Attributes,
    'chapterType' | 'doi' | 'licenseCode' | 'onlineAccessType' | 'languageCode'
  > & {
    mscs?: string[]
    keywords?: string[]
    bookSeries?: number[]
    book?: number[]
    bookEmpty?: true
  }
