import { CustomVariant } from "../component"

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link'

export type ButtonT = CustomVariant<ButtonVariant> & React.ComponentProps<'button'>