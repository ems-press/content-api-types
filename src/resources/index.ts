import { keys } from 'ts-transformer-keys'
import { SortOption } from '../sort'
import { UnionMap } from '../util'
import * as Images from './images'
import * as PersonGroups from './person-groups'
import * as Serials from './serials'
import * as SerialIssues from './serial-issues'

export type Type =
  | Images.Type
  | PersonGroups.Type
  | Serials.Type
  | SerialIssues.Type
export type Relationship = { cardinality: null | '1' | 'N'; type: Type }
export const types = keys<UnionMap<Type>>()

export { Images, PersonGroups, Serials, SerialIssues }

export type AttributesForType<T extends Type> = {
  images: Images.Attributes
  'person-groups': PersonGroups.Attributes
  serials: Serials.Attributes
  'serial-issues': SerialIssues.Attributes
}[T]

export type RelationshipsForType<T extends Type> = {
  images: Images.Relationships
  'person-groups': PersonGroups.Relationships
  serials: Serials.Relationships
  'serial-issues': SerialIssues.Relationships
}[T]

export type SortFieldForType<T extends Type> = {
  images: Images.SortField
  'person-groups': PersonGroups.SortField
  serials: Serials.SortField
  'serial-issues': SerialIssues.SortField
}[T]

export type SortOptionForType<T extends Type> = {
  images: SortOption<Images.SortField>
  'person-groups': SortOption<PersonGroups.SortField>
  serials: SortOption<Serials.SortField>
  'serial-issues': SortOption<SerialIssues.SortField>
}[T]

export type FilterForType<T extends Type> = {
  images: Images.Filter
  'person-groups': PersonGroups.Filter
  serials: Serials.Filter
  'serial-issues': SerialIssues.Filter
}[T]

export const attributeKeys: { [T in Type]: (keyof AttributesForType<T>)[] } = {
  images: keys<Images.Attributes>(),
  'person-groups': keys<PersonGroups.Attributes>(),
  serials: keys<Serials.Attributes>(),
  'serial-issues': keys<SerialIssues.Attributes>(),
}

export const relationshipKeys: {
  [T in Type]: (keyof RelationshipsForType<T>)[]
} = {
  images: keys<Images.Relationships>(),
  'person-groups': keys<PersonGroups.Relationships>(),
  serials: keys<Serials.Relationships>(),
  'serial-issues': keys<SerialIssues.Relationships>(),
}

export const filterKeys: { [T in Type]: (keyof FilterForType<T>)[] } = {
  images: keys<Images.Filter>(),
  'person-groups': keys<PersonGroups.Filter>(),
  serials: keys<Serials.Filter>(),
  'serial-issues': keys<SerialIssues.Filter>(),
}

type SortFieldMap<T extends string> = Record<T, unknown>

export const sortFields: { [T in Type]: SortFieldForType<T>[] } = {
  images: keys<SortFieldMap<Images.SortField>>(),
  'person-groups': keys<SortFieldMap<PersonGroups.SortField>>(),
  serials: keys<SortFieldMap<Serials.SortField>>(),
  'serial-issues': keys<SortFieldMap<SerialIssues.SortField>>(),
}

type SortOptionMap<T extends string> = Record<SortOption<T>, unknown>

export const sortOptions: { [T in Type]: SortOptionForType<T>[] } = {
  images: keys<SortOptionMap<Images.SortField>>(),
  'person-groups': keys<SortOptionMap<PersonGroups.SortField>>(),
  serials: keys<SortOptionMap<Serials.SortField>>(),
  'serial-issues': keys<SortOptionMap<SerialIssues.SortField>>(),
}
