import { keys } from 'ts-transformer-keys'
import { EqualFilter } from '../filter'
import { UnionMap } from '../util'
import { PersonGroupMembers, Serials } from './index'

export type PersonGroupType = 'authors' | 'editors' | 'translators'
export const personGroupTypes = keys<UnionMap<PersonGroupType>>()

export type Type = 'person-groups'

export type Attributes = {
  groupType: PersonGroupType
  name: string
}

export type Relationships = {
  members: { type: PersonGroupMembers.Type; cardinality: 'N' }
  serials: { type: Serials.Type; cardinality: null | 'N' }
}

export type SortField = never

export type Filter = EqualFilter<Attributes, 'groupType'>
