import { CustomSize, CustomVariant, Size } from "../component"

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link'

export type ButtonT = {
    lIcon?: JSX.Element
    rIcon?: JSX.Element
} & CustomVariant<ButtonVariant> & CustomSize<Size> & React.ComponentProps<'button'>