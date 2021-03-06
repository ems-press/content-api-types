import * as Resources from './resources/index'

export type Field<T extends Resources.Type> =
  | keyof Resources.AttributesForType<T>
  | keyof Resources.RelationshipsForType<T>

export type Fields = {
  [t in Resources.Type]?: Field<t>[]
}
