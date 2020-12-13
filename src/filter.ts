export type DateFilter<N extends string> = {
  [k in `${N}${'Before' | 'After'}`]?: Date
}

export type EqualFilter<Attributes, K extends keyof Attributes> = {
  [k in K]?: Attributes[k]
}
