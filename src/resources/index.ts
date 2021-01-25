import { keys } from 'ts-transformer-keys'
import { SortOption } from '../sort'
import { UnionMap } from '../util'
import * as Images from './images'
import * as PersonGroups from './person-groups'
import * as PersonGroupMembers from './person-group-members'
import * as Serials from './serials'
import * as SerialArticles from './serial-articles'
import * as SerialArticleFiles from './serial-article-files'
import * as SerialIssues from './serial-issues'

export type Type =
  | Images.Type
  | PersonGroups.Type
  | PersonGroupMembers.Type
  | Serials.Type
  | SerialArticles.Type
  | SerialArticleFiles.Type
  | SerialIssues.Type
export type Relationship = { cardinality: null | '1' | 'N'; type: Type }
export const types = keys<UnionMap<Type>>()

export {
  Images,
  PersonGroups,
  PersonGroupMembers,
  Serials,
  SerialArticles,
  SerialArticleFiles,
  SerialIssues,
}

export type AttributesForType<T extends Type> = {
  images: Images.Attributes
  'person-groups': PersonGroups.Attributes
  'person-group-members': PersonGroupMembers.Attributes
  serials: Serials.Attributes
  'serial-articles': SerialArticles.Attributes
  'serial-article-files': SerialArticleFiles.Attributes
  'serial-issues': SerialIssues.Attributes
}[T]

export type RelationshipsForType<T extends Type> = {
  images: Images.Relationships
  'person-groups': PersonGroups.Relationships
  'person-group-members': PersonGroupMembers.Relationships
  serials: Serials.Relationships
  'serial-articles': SerialArticles.Relationships
  'serial-article-files': SerialArticleFiles.Relationships
  'serial-issues': SerialIssues.Relationships
}[T]

export type SortFieldForType<T extends Type> = {
  images: Images.SortField
  'person-groups': PersonGroups.SortField
  'person-group-members': PersonGroupMembers.SortField
  serials: Serials.SortField
  'serial-articles': SerialArticles.SortField
  'serial-article-files': SerialArticleFiles.SortField
  'serial-issues': SerialIssues.SortField
}[T]

export type SortOptionForType<T extends Type> = {
  images: SortOption<Images.SortField>
  'person-groups': SortOption<PersonGroups.SortField>
  'person-group-members': SortOption<PersonGroupMembers.SortField>
  serials: SortOption<Serials.SortField>
  'serial-articles': SortOption<SerialArticles.SortField>
  'serial-article-files': SortOption<SerialArticleFiles.SortField>
  'serial-issues': SortOption<SerialIssues.SortField>
}[T]

export type FilterForType<T extends Type> = {
  images: Images.Filter
  'person-groups': PersonGroups.Filter
  'person-group-members': PersonGroupMembers.Filter
  serials: Serials.Filter
  'serial-articles': SerialArticles.Filter
  'serial-article-files': SerialArticleFiles.Filter
  'serial-issues': SerialIssues.Filter
}[T]

export const attributeKeys: { [T in Type]: (keyof AttributesForType<T>)[] } = {
  images: keys<Images.Attributes>(),
  'person-groups': keys<PersonGroups.Attributes>(),
  'person-group-members': keys<PersonGroupMembers.Attributes>(),
  serials: keys<Serials.Attributes>(),
  'serial-articles': keys<SerialArticles.Attributes>(),
  'serial-article-files': keys<SerialArticleFiles.Attributes>(),
  'serial-issues': keys<SerialIssues.Attributes>(),
}

export const relationshipKeys: {
  [T in Type]: (keyof RelationshipsForType<T>)[]
} = {
  images: keys<Images.Relationships>(),
  'person-groups': keys<PersonGroups.Relationships>(),
  'person-group-members': keys<PersonGroupMembers.Relationships>(),
  serials: keys<Serials.Relationships>(),
  'serial-articles': keys<SerialArticles.Relationships>(),
  'serial-article-files': keys<SerialArticleFiles.Relationships>(),
  'serial-issues': keys<SerialIssues.Relationships>(),
}

export const filterKeys: { [T in Type]: (keyof FilterForType<T>)[] } = {
  images: keys<Images.Filter>(),
  'person-groups': keys<PersonGroups.Filter>(),
  'person-group-members': keys<PersonGroupMembers.Filter>(),
  serials: keys<Serials.Filter>(),
  'serial-articles': keys<SerialArticles.Filter>(),
  'serial-article-files': keys<SerialArticleFiles.Filter>(),
  'serial-issues': keys<SerialIssues.Filter>(),
}

type SortFieldMap<T extends string> = Record<T, unknown>

export const sortFields: { [T in Type]: SortFieldForType<T>[] } = {
  images: keys<SortFieldMap<Images.SortField>>(),
  'person-groups': keys<SortFieldMap<PersonGroups.SortField>>(),
  'person-group-members': keys<SortFieldMap<PersonGroupMembers.SortField>>(),
  serials: keys<SortFieldMap<Serials.SortField>>(),
  'serial-articles': keys<SortFieldMap<SerialArticles.SortField>>(),
  'serial-article-files': keys<SortFieldMap<SerialArticleFiles.SortField>>(),
  'serial-issues': keys<SortFieldMap<SerialIssues.SortField>>(),
}

type SortOptionMap<T extends string> = Record<SortOption<T>, unknown>

export const sortOptions: { [T in Type]: SortOptionForType<T>[] } = {
  images: keys<SortOptionMap<Images.SortField>>(),
  'person-groups': keys<SortOptionMap<PersonGroups.SortField>>(),
  'person-group-members': keys<SortOptionMap<PersonGroupMembers.SortField>>(),
  serials: keys<SortOptionMap<Serials.SortField>>(),
  'serial-articles': keys<SortOptionMap<SerialArticles.SortField>>(),
  'serial-article-files': keys<SortOptionMap<SerialArticleFiles.SortField>>(),
  'serial-issues': keys<SortOptionMap<SerialIssues.SortField>>(),
}
