import { keys } from 'ts-transformer-keys'

import { PersonGroups, Serials, SerialIssues } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'serial-articles'

export type SerialArticleType = 'editorial' | 'research-article'
export const serialArticleTypes = keys<UnionMap<SerialArticleType>>()

export type SerialArticleOnlineAccessType = 'open' | 'free' | 'subscription'
export const serialArticleOnlineAccessType = keys<
  UnionMap<SerialArticleOnlineAccessType>
>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  serialArticleType: SerialArticleType
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
  abstractTex?: string
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
  onlineAccessType: SerialArticleOnlineAccessType
  languageCode?: string
}

export type Relationships = {
  serial: { type: Serials.Type; cardinality: '1' }
  serialIssue: { type: SerialIssues.Type; cardinality: null | '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  // files: { type: SerialArticleFiles.Type; cardinality: '1' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'acceptedAt'
  | 'publishedAt'
  | 'retractedAt'
  | 'title'
  | 'pages'
  | 'pageStart'
  | 'pageEnd'

export type Filter = DateFilter<
  'created' | 'updated' | 'accepted' | 'published' | 'retracted'
> &
  IsInFilter<
    Attributes,
    'doi' | 'licenseCode' | 'onlineAccessType' | 'languageCode'
  > & {
    mscs?: string[]
    keywords?: string[]
    serial?: number[]
    serialIssue?: number[]
    serialIssueEmpty?: true
  }
