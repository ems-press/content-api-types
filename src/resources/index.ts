import { keys } from 'ts-transformer-keys'
import { SortOption } from '../sort'
import { UnionMap } from '../util'
import * as BookSeries from './book-series'
//import * as Books from './books'
//import * as BookFiles from './book-files'
//import * as BookSupplementaryUrls from './book-supplementary-urls'
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
  //| Books.Type
  //| BookFiles.Type
  | BookSeries.Type
  //| BookSupplementaryUrls.Type
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
  //Books,
  //BookFiles,
  BookSeries,
  //BookSupplementaryUrls,
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
  //books: Books.Attributes
  //'book-files': BookFiles.Attributes
  'book-series': BookSeries.Attributes
  //'book-supplementary-urls': BookSupplementaryUrls.Attributes
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
  //books: Books.Relationships
  //'book-files': BookFiles.Relationships
  'book-series': BookSeries.Relationships
  //'book-supplementary-urls': BookSupplementaryUrls.Relationships
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
  //books: Books.SortField
  //'book-files': BookFiles.SortField
  'book-series': BookSeries.SortField
  //'book-supplementary-urls': BookSupplementaryUrls.SortField
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
  //books: SortOption<Books.SortField>
  //'book-files': SortOption<BookFiles.SortField>
  'book-series': SortOption<BookSeries.SortField>
  //'book-supplementary-urls': SortOption<BookSupplementaryUrls.SortField>
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
  //books: Books.Filter
  //'book-files': BookFiles.Filter
  'book-series': BookSeries.Filter
  //'book-supplementary-urls': BookSupplementaryUrls.Filter
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
  //books: keys<Books.Attributes>(),
  //'book-files': keys<BookFiles.Attributes>(),
  'book-series': keys<BookSeries.Attributes>(),
  //'book-supplementary-urls': keys<BookSupplementaryUrls.Attributes>(),
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
  //books: keys<Books.Relationships>(),
  //'book-files': keys<BookFiles.Relationships>(),
  'book-series': keys<BookSeries.Relationships>(),
  //'book-supplementary-urls': keys<BookSupplementaryUrls.Relationships>(),
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
  //books: keys<Books.Filter>(),
  //'book-files': keys<BookFiles.Filter>(),
  'book-series': keys<BookSeries.Filter>(),
  //'book-supplementary-urls': keys<BookSupplementaryUrls.Filter>(),
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
  //books: keys<SortFieldMap<Books.SortField>>(),
  //'book-files': keys<SortFieldMap<BookFiles.SortField>>(),
  'book-series': keys<SortFieldMap<BookSeries.SortField>>(),
  //'book-supplementary-urls': keys<
  //  SortFieldMap<BookSupplementaryUrls.SortField>
  //>(),
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
  //books: keys<SortOptionMap<Books.SortField>>(),
  //'book-files': keys<SortOptionMap<BookFiles.SortField>>(),
  'book-series': keys<SortOptionMap<BookSeries.SortField>>(),
  //'book-supplementary-urls': keys<
  //  SortOptionMap<BookSupplementaryUrls.SortField>
  //>(),
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
