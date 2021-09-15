import { keys } from 'ts-transformer-keys'

import { SerialArticleFiles, SerialArticles } from './index'
import { DateFilter, IsInFilter } from '../filter'
import { UnionMap } from '../util'

export type Type = 'serial-article-images'

export type SerialArticleImageType =
  | 'full-text-jats-xml-image'
  | 'full-text-json-image'
  | 'supplementary-image'
export const serialArticleImageTypes = keys<UnionMap<SerialArticleImageType>>()

export type Attributes = Omit<SerialArticleFiles.Attributes, 'fileType'> & {
  fileType: SerialArticleImageType
  width: number
  height: number
}

export type Relationships = {
  serialArticle: { type: SerialArticles.Type; cardinality: '1' }
}

export type SortField =
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'contentType'
  | 'path'

export type Filter = DateFilter<'created' | 'updated' | 'published'> &
  IsInFilter<
    Attributes,
    | 'contentType'
    | 'path'
    | 'md5'
    | 'sha256'
    | 'fileType'
    | 'licenseCode'
    | 'languageCode'
  > & {
    serialArticle?: number[]
  }
