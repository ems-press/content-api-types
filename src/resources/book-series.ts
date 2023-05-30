import { keys } from 'ts-transformer-keys'
import { Images, PersonGroups } from '.'
import { DateFilter, EqualFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'book-series'

export type PublishingModel = 'diamond' | 's2o' | 'subscription'
export const serialPublishingModels = keys<UnionMap<PublishingModel>>()

export type S2oStatus = 'open-access' | 'subscription'
export const s2oStatuses = keys<UnionMap<S2oStatus>>()

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  code: string
  descriptionMarkdown?: string
  submitDescriptionMarkdown?: string
  subscribeDescriptionMarkdown?: string
  editorialBoardDescriptionMarkdown?: string
  forthcomingBooksMarkdown?: string
  name: string
  issn?: string
  eIssn?: string
  doiPrefix?: string
  owner?: string
  ownerUrl?: string
  publishingModel: PublishingModel
  s2oStatus?: S2oStatus
  s2oStatusStart?: Date
  s2oStatusEnd?: Date
  publisher: string
  publisherOrganization?: string
  publisherAddress?: string
  publisherUrl: string
  copyright?: string
  copyrightUrl?: string
}

export type Relationships = {
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  coverImage: { type: Images.Type; cardinality: null | '1' }
}

export type SortField = 'createdAt' | 'updatedAt' | 'code' | 'name'

export type Filter = DateFilter<'created' | 'updated'> &
  IsInFilter<Attributes, 's2oStatus'> &
  EqualFilter<Attributes, 'name' | 'code' | 'issn' | 'eIssn' | 'doiPrefix'>
