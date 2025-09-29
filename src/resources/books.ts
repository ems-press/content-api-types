import { keys } from 'ts-transformer-keys'
import {
  BookChapters,
  BookFiles,
  BookImages,
  BookSeries,
  Images,
  PersonGroups,
} from './index'

import * as BookSupplementaryUrls from './book-supplementary-urls'

import { DatePrecision } from '../date'
import { DateFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'books'

export type BookType = 'collected-volume' | 'monograph'
export const bookTypes = keys<UnionMap<BookType>>()

export type BookBinding = 'softcover' | 'hardcover'

export type BookOnlineAccessType = 'open' | 'free' | 'subscription'
export const bookOnlineAccessType = keys<UnionMap<BookOnlineAccessType>>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date

  bookType: BookType
  bookSeriesVolume?: number

  multiVolumeNumber?: number
  multiVolumeTitle?: string

  titleTex: string
  title?: string
  subtitleTex?: string
  subtitle?: string

  blurbMarkdownTex?: string
  blurbMarkdown?: string

  isbn?: string
  eIsbn?: string
  doi?: string

  publishedAt: Date
  publishedAtPrecision: DatePrecision
  onlineAccessType: BookOnlineAccessType

  mscs?: string[]
  bicSubjectCategories?: string[]
  keywords?: string[]

  pages?: number
  binding?: BookBinding
  printWidthCm?: number
  printHeightCm?: number

  publisher: string
  publisherOrganization?: string
  publisherAddress?: string
  publisherUrl: string

  copyright?: string
  copyrightUrl?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
  languageCode?: string

  coverDate?: Date
  coverDatePrecision?: DatePrecision
}

export type Relationships = {
  bookSeries: { type: BookSeries.Type; cardinality: null | '1' }
  bookChapters: { type: BookChapters.Type; cardinality: 'N' }
  coverImage: { type: Images.Type; cardinality: '1' }
  editionNextBook: { type: Type; cardinality: null | '1' }
  editionPreviousBook: { type: Type; cardinality: null | '1' }
  multiVolumeParent: { type: Type; cardinality: null | '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  bookFiles: { type: BookFiles.Type; cardinality: 'N' }
  bookImages: { type: BookImages.Type; cardinality: 'N' }
  bookSupplementaryUrls: { type: BookSupplementaryUrls.Type; cardinality: 'N' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'coverDate'
  | 'title'
  | 'pages'
  | 'bookSeriesVolume'
  | 'multiVolumeNumber'

export type Filter = DateFilter<'created' | 'updated' | 'published'> &
  IsInFilter<
    Attributes,
    | 'bookType'
    | 'doi'
    | 'isbn'
    | 'eIsbn'
    | 'licenseCode'
    | 'onlineAccessType'
    | 'languageCode'
  > & {
    mscs?: string[]
    bicSubjectCategories?: string[]
    keywords?: string[]
    bookSeries?: number[]
    bookSeriesEmpty?: true
    editionNextBook?: number[]
    editionNextBookEmpty?: true
    editionPreviousBook?: number[]
    editionPreviousBookEmpty?: true
    multiVolumeParent?: number[]
    multiVolumeParentEmpty?: true
  }
