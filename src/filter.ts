export type DateFilter<N extends string> = {
  [k in `${N}${'Before' | 'After'}`]?: Date
}

export type EqualFilter<Attributes, K extends keyof Attributes> = {
  [k in K]?: Attributes[k]
}

export type OptionalProperty<T> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K
  }[keyof T],
  undefined
>

export type IsInFilter<
  Attributes,
  K extends Extract<keyof Attributes, string>
> = { [k in K]?: Exclude<Attributes[k], undefined>[] } &
  { [k in OptionalProperty<Pick<Attributes, K>> as `${k}Empty`]?: true }
