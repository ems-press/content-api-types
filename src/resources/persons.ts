import { Images } from '.'
import { EqualFilter } from '../filter'

export type Type = 'persons'

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  name: string
  surname?: string
  givenName?: string
  prefix?: string
  orcid?: string
  description?: string
  organization?: string
  role?: string
  email?: string
  twitterProfile?: string
  linkedinProfile?: string
  facebookProfile?: string
  homepage?: string
  emsphAddressesId: number
}

export type Relationships = {
  image: { type: Images.Type; cardinality: null | '1' }
}

export type SortField = never
// TODO?
// | 'createdAt'
// | 'updatedAt'
// | 'name'
// | 'surname'

export type Filter = EqualFilter<Attributes, 'emsphAddressesId'>
