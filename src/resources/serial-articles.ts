import { keys } from 'ts-transformer-keys'

import {
  PersonGroups,
  Serials,
  SerialIssues,
  SerialArticleFiles,
  SerialArticleImages,
} from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'serial-articles'

export type SerialArticleType =
  | 'addendum'
  | 'announcement'
  | 'book-review'
  | 'discussion'
  | 'editorial'
  | 'editorial-board'
  | 'erratum'
  | 'feature-article'
  | 'interview'
  | 'letter-to-the-editor'
  | 'miscellaneous'
  | 'obituary'
  | 'report'
  | 'research-article'
  | 'retraction'
export const serialArticleTypes = keys<UnionMap<SerialArticleType>>()

export type SerialArticleOnlineAccessType = 'open' | 'free' | 'subscription'
export const serialArticleOnlineAccessType = keys<
  UnionMap<SerialArticleOnlineAccessType>
>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  articleType: SerialArticleType
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
  copyrightUrl?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
  onlineAccessType: SerialArticleOnlineAccessType
  readDescriptionMarkdown?: string
  languageCode?: string
}

export type Relationships = {
  serial: { type: Serials.Type; cardinality: '1' }
  serialIssue: { type: SerialIssues.Type; cardinality: null | '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  serialArticleFiles: { type: SerialArticleFiles.Type; cardinality: 'N' }
  serialArticleImages: { type: SerialArticleImages.Type; cardinality: 'N' }
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
    'articleType' | 'doi' | 'licenseCode' | 'onlineAccessType' | 'languageCode'
  > & {
    mscs?: string[]
    keywords?: string[]
    serial?: number[]
    serialIssue?: number[]
    serialIssueEmpty?: true
  }
