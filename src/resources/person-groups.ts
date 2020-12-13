import { EqualFilter } from '../filter'
import { Serials } from '.'

export type PersonGroupType = 'authors' | 'editors' | 'translators'

export type Type = 'person-groups'

export type Attributes = {
  groupType: PersonGroupType
  name: string
}

export type Relationships = {
  serials: Serials.Type
}

export type SortField = never

export type Filter = EqualFilter<Attributes, 'groupType'>
