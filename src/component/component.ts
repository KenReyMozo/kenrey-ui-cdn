type Variant = 'primary' | 'secondary'
export type Shade = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type Size = 'lg' | 'md' | 'sm' | 'xl'

export type Colorable = {
  variant?: Variant
  shade?: Shade
}

export type CustomVariant<T> = {
  variant?: T
}

export type CustomSize<T> = {
  size?: T
}
