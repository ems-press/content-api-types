import { keys } from 'ts-transformer-keys'
import { EqualFilter } from '../filter'
import { Serials } from './index'

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

export const attributeKeys = keys<Attributes>()
export const relationshipKeys = keys<Relationships>()
