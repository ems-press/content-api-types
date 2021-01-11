import { DateFilter, EqualFilter, IsInFilter } from '../filter'

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
}

export type Relationships = Record<never, never>

export type SortField = 'createdAt' | 'updatedAt' | 'contentType' | 'path'

export type Filter = DateFilter<'created' | 'updated'> &
  EqualFilter<Attributes, 'path'> &
  IsInFilter<Attributes, 'contentType'>
