import { Images } from '.'
import { DateFilter } from '../filter'

export type Type = 'persons'

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  name: string
  surname?: string
  givenName?: string
  prefix?: string
  orcid?: string
  zbmathId?: string
  mathReviewsId?: string
  description?: string
  organization?: string
  role?: string
  email?: string
  twitterProfile?: string
  linkedinProfile?: string
  facebookProfile?: string
  homepage?: string
}

export type Relationships = {
  image: { type: Images.Type; cardinality: null | '1' }
}

export type SortField = 'createdAt' | 'updatedAt'

export type Filter = DateFilter<'created' | 'updated'>
