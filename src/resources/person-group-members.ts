import { DateFilter, EqualFilter } from '../filter'
import { PersonGroups, Persons } from './index'

export type Type = 'person-group-members'

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  name: string
  surname?: string
  givenName?: string
  prefix?: string
  affiliation?: string
  organization?: string
  role?: string
  email?: string
  homepage?: string
}

export type Relationships = {
  person: { type: Persons.Type; cardinality: '1' }
  personGroup: { type: PersonGroups.Type; cardinality: '1' }
}

export type SortField = 'createdAt' | 'updatedAt'

export type Filter = DateFilter<'created' | 'updated'> &
  EqualFilter<Attributes, 'name'> & { personGroup?: number[] }
