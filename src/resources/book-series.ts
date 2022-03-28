import { Images, PersonGroups } from '.'
import { DateFilter, EqualFilter } from '../filter'

export type Type = 'book-series'

export type Attributes = {
  createdAt: Date
  updatedAt: Date

  name: string
  code: string
  issn?: string
  eIssn?: string
  doiPrefix?: string

  descriptionMarkdown?: string
  publisher: string
  publisherOrganization?: string
  publisherAddress?: string
  publisherUrl: string

  owner?: string
  ownerUrl?: string

  copyright: string
  copyrightUrl: string
}

export type Relationships = {
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  coverImage: { type: Images.Type; cardinality: null | '1' }
}

export type SortField = 'createdAt' | 'updatedAt' | 'code' | 'name'

export type Filter = DateFilter<'created' | 'updated'> &
  EqualFilter<Attributes, 'name' | 'code' | 'issn' | 'eIssn' | 'doiPrefix'>
