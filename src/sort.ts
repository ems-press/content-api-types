export type Sort<Attributes, K extends keyof Attributes> = K extends string
  ? K | `-${K}`
  : never
