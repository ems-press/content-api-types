export type OptionalProperty<T> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K
  }[keyof T],
  undefined
>

export type UnionMap<T extends string> = { [k in T]: unknown }
