import { OptionalProperty } from './util'

export type DateFilter<N extends string> = {
  [k in `${N}${'Before' | 'After'}`]?: Date
}

export type EqualFilter<Attributes, K extends keyof Attributes> = {
  [k in K]?: Attributes[k]
}

export type IsInFilter<
  Attributes,
  K extends Extract<keyof Attributes, string>
> = { [k in K]?: Exclude<Attributes[k], undefined>[] } &
  {
    [k in OptionalProperty<Pick<Attributes, K>> as `${k}Empty`]?: true
  }
