import { keys } from 'ts-transformer-keys'
import { SortOption } from '../sort'
import { UnionMap } from '../util'
import * as BookSeries from './book-series'
import * as Images from './images'
import * as Persons from './persons'
import * as PersonGroups from './person-groups'
import * as PersonGroupMembers from './person-group-members'
import * as Serials from './serials'
import * as SerialArticles from './serial-articles'
import * as SerialArticleFiles from './serial-article-files'
import * as SerialArticleImages from './serial-article-images'
import * as SerialIssues from './serial-issues'
import * as SerialIssueFiles from './serial-issue-files'

export type Type =
  | BookSeries.Type
  | Images.Type
  | Persons.Type
  | PersonGroups.Type
  | PersonGroupMembers.Type
  | Serials.Type
  | SerialArticles.Type
  | SerialArticleFiles.Type
  | SerialArticleImages.Type
  | SerialIssues.Type
  | SerialIssueFiles.Type
export type Relationship = { cardinality: null | '1' | 'N'; type: Type }
export const types = keys<UnionMap<Type>>()

export {
  BookSeries,
  Images,
  PersonGroups,
  PersonGroupMembers,
  Persons,
  Serials,
  SerialArticles,
  SerialArticleFiles,
  SerialArticleImages,
  SerialIssues,
  SerialIssueFiles,
}

export type AttributesForType<T extends Type> = {
  'book-series': BookSeries.Attributes
  images: Images.Attributes
  'person-groups': PersonGroups.Attributes
  'person-group-members': PersonGroupMembers.Attributes
  persons: Persons.Attributes
  serials: Serials.Attributes
  'serial-articles': SerialArticles.Attributes
  'serial-article-files': SerialArticleFiles.Attributes
  'serial-article-images': SerialArticleImages.Attributes
  'serial-issues': SerialIssues.Attributes
  'serial-issue-files': SerialIssueFiles.Attributes
}[T]

export type RelationshipsForType<T extends Type> = {
  'book-series': BookSeries.Relationships
  images: Images.Relationships
  'person-groups': PersonGroups.Relationships
  'person-group-members': PersonGroupMembers.Relationships
  persons: Persons.Relationships
  serials: Serials.Relationships
  'serial-articles': SerialArticles.Relationships
  'serial-article-files': SerialArticleFiles.Relationships
  'serial-article-images': SerialArticleImages.Relationships
  'serial-issues': SerialIssues.Relationships
  'serial-issue-files': SerialIssueFiles.Relationships
}[T]

export type SortFieldForType<T extends Type> = {
  'book-series': BookSeries.SortField
  images: Images.SortField
  'person-groups': PersonGroups.SortField
  'person-group-members': PersonGroupMembers.SortField
  persons: Persons.SortField
  serials: Serials.SortField
  'serial-articles': SerialArticles.SortField
  'serial-article-files': SerialArticleFiles.SortField
  'serial-article-images': SerialArticleImages.SortField
  'serial-issues': SerialIssues.SortField
  'serial-issue-files': SerialIssueFiles.SortField
}[T]

export type SortOptionForType<T extends Type> = {
  'book-series': SortOption<BookSeries.SortField>
  images: SortOption<Images.SortField>
  'person-groups': SortOption<PersonGroups.SortField>
  'person-group-members': SortOption<PersonGroupMembers.SortField>
  persons: SortOption<Persons.SortField>
  serials: SortOption<Serials.SortField>
  'serial-articles': SortOption<SerialArticles.SortField>
  'serial-article-files': SortOption<SerialArticleFiles.SortField>
  'serial-article-images': SortOption<SerialArticleImages.SortField>
  'serial-issues': SortOption<SerialIssues.SortField>
  'serial-issue-files': SortOption<SerialIssueFiles.SortField>
}[T]

export type FilterForType<T extends Type> = {
  'book-series': BookSeries.Filter
  images: Images.Filter
  'person-groups': PersonGroups.Filter
  'person-group-members': PersonGroupMembers.Filter
  persons: Persons.Filter
  serials: Serials.Filter
  'serial-articles': SerialArticles.Filter
  'serial-article-files': SerialArticleFiles.Filter
  'serial-article-images': SerialArticleImages.Filter
  'serial-issues': SerialIssues.Filter
  'serial-issue-files': SerialIssueFiles.Filter
}[T]

export const attributeKeys: { [T in Type]: (keyof AttributesForType<T>)[] } = {
  'book-series': keys<BookSeries.Attributes>(),
  images: keys<Images.Attributes>(),
  'person-groups': keys<PersonGroups.Attributes>(),
  'person-group-members': keys<PersonGroupMembers.Attributes>(),
  persons: keys<Persons.Attributes>(),
  serials: keys<Serials.Attributes>(),
  'serial-articles': keys<SerialArticles.Attributes>(),
  'serial-article-files': keys<SerialArticleFiles.Attributes>(),
  'serial-article-images': keys<SerialArticleImages.Attributes>(),
  'serial-issues': keys<SerialIssues.Attributes>(),
  'serial-issue-files': keys<SerialIssueFiles.Attributes>(),
}

export const relationshipKeys: {
  [T in Type]: (keyof RelationshipsForType<T>)[]
} = {
  'book-series': keys<BookSeries.Relationships>(),
  images: keys<Images.Relationships>(),
  'person-groups': keys<PersonGroups.Relationships>(),
  'person-group-members': keys<PersonGroupMembers.Relationships>(),
  persons: keys<Persons.Relationships>(),
  serials: keys<Serials.Relationships>(),
  'serial-articles': keys<SerialArticles.Relationships>(),
  'serial-article-files': keys<SerialArticleFiles.Relationships>(),
  'serial-article-images': keys<SerialArticleImages.Relationships>(),
  'serial-issues': keys<SerialIssues.Relationships>(),
  'serial-issue-files': keys<SerialIssueFiles.Relationships>(),
}

export const filterKeys: { [T in Type]: (keyof FilterForType<T>)[] } = {
  'book-series': keys<BookSeries.Filter>(),
  images: keys<Images.Filter>(),
  'person-groups': keys<PersonGroups.Filter>(),
  'person-group-members': keys<PersonGroupMembers.Filter>(),
  persons: keys<Persons.Filter>(),
  serials: keys<Serials.Filter>(),
  'serial-articles': keys<SerialArticles.Filter>(),
  'serial-article-files': keys<SerialArticleFiles.Filter>(),
  'serial-article-images': keys<SerialArticleImages.Filter>(),
  'serial-issues': keys<SerialIssues.Filter>(),
  'serial-issue-files': keys<SerialIssueFiles.Filter>(),
}

type SortFieldMap<T extends string> = Record<T, unknown>

export const sortFields: { [T in Type]: SortFieldForType<T>[] } = {
  'book-series': keys<SortFieldMap<BookSeries.SortField>>(),
  images: keys<SortFieldMap<Images.SortField>>(),
  'person-groups': keys<SortFieldMap<PersonGroups.SortField>>(),
  'person-group-members': keys<SortFieldMap<PersonGroupMembers.SortField>>(),
  persons: keys<SortFieldMap<Persons.SortField>>(),
  serials: keys<SortFieldMap<Serials.SortField>>(),
  'serial-articles': keys<SortFieldMap<SerialArticles.SortField>>(),
  'serial-article-files': keys<SortFieldMap<SerialArticleFiles.SortField>>(),
  'serial-article-images': keys<SortFieldMap<SerialArticleImages.SortField>>(),
  'serial-issues': keys<SortFieldMap<SerialIssues.SortField>>(),
  'serial-issue-files': keys<SortFieldMap<SerialIssueFiles.SortField>>(),
}

type SortOptionMap<T extends string> = Record<SortOption<T>, unknown>

export const sortOptions: { [T in Type]: SortOptionForType<T>[] } = {
  'book-series': keys<SortOptionMap<BookSeries.SortField>>(),
  images: keys<SortOptionMap<Images.SortField>>(),
  'person-groups': keys<SortOptionMap<PersonGroups.SortField>>(),
  'person-group-members': keys<SortOptionMap<PersonGroupMembers.SortField>>(),
  persons: keys<SortOptionMap<Persons.SortField>>(),
  serials: keys<SortOptionMap<Serials.SortField>>(),
  'serial-articles': keys<SortOptionMap<SerialArticles.SortField>>(),
  'serial-article-files': keys<SortOptionMap<SerialArticleFiles.SortField>>(),
  'serial-article-images': keys<SortOptionMap<SerialArticleImages.SortField>>(),
  'serial-issues': keys<SortOptionMap<SerialIssues.SortField>>(),
  'serial-issue-files': keys<SortOptionMap<SerialIssueFiles.SortField>>(),
}
