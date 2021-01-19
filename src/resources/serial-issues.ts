import { Images, PersonGroups, Serials } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'

export type Type = 'serial-issues'

export type Attributes = Omit<Serials.Attributes, 'code'> & {
  issueName?: string
  volume: number
  issue: number
  pageStart: number
  pageEnd: number
  publishedAt: Date
  publishedAtPrecison: DatePrecision
}

export type Relationships = {
  serial: { type: Serials.Type; cardinality: '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  coverImage: { type: Images.Type; cardinality: '1' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'volume'
  | 'issue'
  | 'publishedAt'

export type Filter = DateFilter<'created' | 'updated' | 'published'> &
  IsInFilter<Attributes, 'serialType' | 's2oStatus'> & { serial?: number[] }
