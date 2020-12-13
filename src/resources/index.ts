import * as PersonGroups from './person-groups'
import * as Serials from './serials'

export type Type = PersonGroups.Type | Serials.Type

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

export type FilterForType<T extends Type> = {
  'person-groups': PersonGroups.Filter
  serials: Serials.Filter
}[T]
