import { EqualFilter } from '../filter'
import { PersonGroups } from './index'

export type Type = 'person-group-members'

export type Attributes = {
  name: string
  surname?: string
  givenName?: string
  prefix?: string
  description?: string
  organization?: string
  role?: string
  email?: string
  homepage?: string
}

export type Relationships = {
  // person: { type: Persons.Type; cardinality: '1' }
  personGroup: { type: PersonGroups.Type; cardinality: '1' }
}

export type SortField = never

export type Filter = EqualFilter<Attributes, 'name'> & {
  personGroup?: number[]
}
