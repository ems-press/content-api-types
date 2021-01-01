export type SortOption<
  Attributes,
  K extends keyof Attributes
> = K extends string ? K | `-${K}` : never
