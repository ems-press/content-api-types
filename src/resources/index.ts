import { keys } from 'ts-transformer-keys'
import { SortOption } from '../sort'
import * as PersonGroups from './person-groups'
import * as Serials from './serials'

export type Type = PersonGroups.Type | Serials.Type
export const types: Type[] = ['person-groups', 'serials']

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
  'person-groups': SortOption<PersonGroups.Attributes, PersonGroups.SortField>
  serials: SortOption<Serials.Attributes, Serials.SortField>
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

// TODO: sortables and filters
