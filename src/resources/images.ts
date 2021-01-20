import { DateFilter, IsInFilter } from '../filter'

export type Type = 'images'

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  url: string
  contentType: string
  width: number
  height: number
  path: string
  sizeBytes: number
  md5: string
  sha256: string
  description?: string
  license?: string
  licenseCode?: string
  licenseUrl?: string
}

export type Relationships = Record<never, never>

export type SortField = 'createdAt' | 'updatedAt' | 'contentType' | 'path'

export type Filter = DateFilter<'created' | 'updated'> &
  IsInFilter<
    Attributes,
    'contentType' | 'path' | 'md5' | 'sha256' | 'licenseCode'
  >
