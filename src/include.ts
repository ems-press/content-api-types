import * as Resources from './resources'

export type Include<T extends Resources.Type> = {
  [k in keyof Resources.RelationshipsForType<T>]?: Resources.RelationshipsForType<T>[k] extends Resources.Type
    ? Include<Resources.RelationshipsForType<T>[k]> | true
    : never
}
