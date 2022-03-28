import { keys } from 'ts-transformer-keys'
import {
  BookFiles,
  BookSeries,
  BookSupplementaryUrls,
  Images,
  PersonGroups,
} from '.'
import { DatePrecision } from '../date'
import { DateFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'books'

export type BookType = 'collected-volumes' | 'monograph'
export const bookTypes = keys<UnionMap<BookType>>()

export type BookBinding = 'softcover' | 'hardcover'

export type BookOnlineAccessType = 'open' | 'free' | 'subscription'
export const bookOnlineAccessType = keys<UnionMap<BookOnlineAccessType>>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date

  bookType: BookType
  bookSeriesVolume?: number

  titleTex: string
  tile?: string
  subtitleTex: string
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
}

export type Relationships = {
  bookSeries: { type: BookSeries.Type; cardinality: null | '1' }
  coverImage: { type: Images.Type; cardinality: '1' }
  multiVolumeParent: { type: Type; cardinality: null | '1' }
  editionPreviousBook: { type: Type; cardinality: null | '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  bookFiles: { type: BookFiles.Type; cardinality: 'N' }
  bookSupplementaryUrls: { type: BookSupplementaryUrls.Type; cardinality: 'N' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'title'
  | 'pages'

export type Filter = DateFilter<'created' | 'updated' | 'published'> &
  IsInFilter<
    Attributes,
    'bookType' | 'doi' | 'licenseCode' | 'onlineAccessType'
  > & {
    mscs?: string[]
    bicSubjectCategories?: string[]
    keywords?: string[]
    serial?: number[]
    serialIssue?: number[]
    serialIssueEmpty?: true
  }
