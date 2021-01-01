import { keys } from 'ts-transformer-keys'
import { SortOption } from '../sort'
import { UnionMap } from '../util'
import * as PersonGroups from './person-groups'
import * as Serials from './serials'

export type Type = PersonGroups.Type | Serials.Type
export const types = keys<UnionMap<Type>>()

export { PersonGroups, Serials }

export type AttributesForType<T extends Type> = {
  'person-groups': PersonGroups.Attributes
  serials: Serials.Attributes
}[T]

export type RelationshipsForType<T extends Type> = {
  'person-groups': PersonGroups.Relationships
  serials: Serials.Relationships
}[T]

export type SortFieldForType<T extends Type> = {
  'person-groups': PersonGroups.SortField
  serials: Serials.SortField
}[T]

export type SortOptionForType<T extends Type> = {
  'person-groups': SortOption<PersonGroups.SortField>
  serials: SortOption<Serials.SortField>
}[T]

export type FilterForType<T extends Type> = {
  'person-groups': PersonGroups.Filter
  serials: Serials.Filter
}[T]

export const attributeKeys: { [T in Type]: (keyof AttributesForType<T>)[] } = {
  'person-groups': keys<PersonGroups.Attributes>(),
  serials: keys<Serials.Attributes>(),
}

export const relationshipKeys: {
  [T in Type]: (keyof RelationshipsForType<T>)[]
} = {
  'person-groups': keys<PersonGroups.Relationships>(),
  serials: keys<Serials.Relationships>(),
}

export const filterKeys: { [T in Type]: (keyof FilterForType<T>)[] } = {
  'person-groups': keys<PersonGroups.Filter>(),
  serials: keys<Serials.Filter>(),
}

type SortFieldMap<T extends string> = Record<T, unknown>

export const sortFields: { [T in Type]: SortFieldForType<T>[] } = {
  'person-groups': keys<SortFieldMap<PersonGroups.SortField>>(),
  serials: keys<SortFieldMap<Serials.SortField>>(),
}

type SortOptionMap<T extends string> = Record<SortOption<T>, unknown>

export const sortOptions: { [T in Type]: SortOptionForType<T>[] } = {
  'person-groups': keys<SortOptionMap<PersonGroups.SortField>>(),
  serials: keys<SortOptionMap<Serials.SortField>>(),
}
