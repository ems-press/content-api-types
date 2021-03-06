import { Images, PersonGroups, SerialArticles, Serials } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { DatePrecision } from '../date'

export type Type = 'serial-issues'

export type Attributes = Omit<
  Serials.Attributes,
  | 'code'
  | 'descriptionMarkdown'
  | 'submitDescriptionMarkdown'
  | 'subscribeDescriptionMarkdown'
> & {
  issueName?: string
  year: number
  volume?: number
  issue?: number
  pageStart: number
  pageEnd: number
  publishedAt: Date
  publishedAtPrecison: DatePrecision
}

export type Relationships = {
  serial: { type: Serials.Type; cardinality: '1' }
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  coverImage: { type: Images.Type; cardinality: '1' }
  articles: { type: SerialArticles.Type; cardinality: 'N' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'year'
  | 'volume'
  | 'issue'
  | 'publishedAt'

export type Filter = DateFilter<'created' | 'updated' | 'published'> &
  IsInFilter<Attributes, 'serialType' | 's2oStatus'> & { serial?: number[] }
