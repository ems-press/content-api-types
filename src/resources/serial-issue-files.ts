import { keys } from 'ts-transformer-keys'

import { SerialIssues } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'
import { UnionMap } from '../util'

export type Type = 'serial-issue-files'

export type SerialIssueFileType = 'full-text-online-pdf'
export const serialIssueFileTypes = keys<UnionMap<SerialIssueFileType>>()

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
  fileType: SerialIssueFileType
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
  serialIssue: { type: SerialIssues.Type; cardinality: '1' }
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
    serialIssue?: number[]
  }
