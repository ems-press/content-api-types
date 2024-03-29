import { keys } from 'ts-transformer-keys'
import { Images, PersonGroups } from './index'
import { DateFilter, EqualFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type SerialType = 'journal' | 'magazine' | 'serial'
export const serialTypes = keys<UnionMap<SerialType>>()

export type SerialPublishingModel = 'diamond' | 's2o' | 'subscription'
export const serialPublishingModels = keys<UnionMap<SerialPublishingModel>>()

export type S2oStatus = 'open-access' | 'subscription'
export const s2oStatuses = keys<UnionMap<S2oStatus>>()

export type Type = 'serials'

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  code: string
  descriptionMarkdown?: string
  readDescriptionMarkdown?: string
  submitDescriptionMarkdown?: string
  subscribeDescriptionMarkdown?: string
  forthcomingArticlesMarkdown?: string
  editorialBoardDescriptionMarkdown?: string
  serialType: SerialType
  name: string
  nameAbbreviation: string
  subtitle?: string
  doiPrefix?: string
  issn?: string
  eIssn?: string
  mscs: string[]
  keywords: string[]
  owner?: string
  ownerUrl?: string
  publishingModel: SerialPublishingModel
  s2oStatus?: S2oStatus
  s2oStatusStart?: Date
  s2oStatusEnd?: Date
  publisher: string
  publisherOrganization?: string
  publisherAddress?: string
  publisherUrl: string
  copyright?: string
  copyrightUrl?: string
  codeOfPractice?: string
  codeOfPracticeUrl?: string
  volumesPerYear?: number
  issuesPerVolume?: number
  pagesPerYear?: number
  printWidthCm?: number
  printHeightCm?: number
}

export type Relationships = {
  personGroups: { type: PersonGroups.Type; cardinality: 'N' }
  coverImage: { type: Images.Type; cardinality: '1' }
}

export type SortField = 'createdAt' | 'updatedAt' | 'code' | 'name'

export type Filter = DateFilter<'created' | 'updated'> &
  IsInFilter<Attributes, 'serialType' | 's2oStatus' | 'doiPrefix'> &
  EqualFilter<Attributes, 'code'>
