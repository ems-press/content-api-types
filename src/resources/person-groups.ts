import { keys } from 'ts-transformer-keys'
import { EqualFilter } from '../filter'
import { UnionMap } from '../util'
import { Serials } from './index'

export type PersonGroupType = 'authors' | 'editors' | 'translators'
export const personGroupTypes = keys<UnionMap<PersonGroupType>>()

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
