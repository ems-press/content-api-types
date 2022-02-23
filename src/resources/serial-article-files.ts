import { keys } from 'ts-transformer-keys'

import { SerialArticles } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'serial-article-files'

export type SerialArticleFileType =
  | 'full-text-jats-xml'
  | 'full-text-jats-xml-media'
  | 'full-text-json'
  | 'full-text-json-media'
  | 'full-text-online-first-pdf'
  | 'full-text-online-pdf'
  | 'supplementary-data'
  | 'supplementary-material'
  | 'supplementary-peer-review-report'
  | 'supplementary-post-publication-review'
  | 'supplementary-source-code'
  | 'supplementary-video'
export const serialArticleFileTypes = keys<UnionMap<SerialArticleFileType>>()

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
  fileType: SerialArticleFileType
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
  serialArticle: { type: SerialArticles.Type; cardinality: '1' }
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
    serialArticle?: number[]
  }
