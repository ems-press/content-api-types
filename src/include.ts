import * as Resources from './resources/index'

export type Include<T extends Resources.Type> = {
  [k in keyof Resources.RelationshipsForType<T>]?: Resources.RelationshipsForType<T>[k] extends Resources.Relationship
    ? Include<Resources.RelationshipsForType<T>[k]['type']> | true
    : never
}
