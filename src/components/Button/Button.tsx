import { FC, ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
    size?: 'normal' | 'large'
    color?: 'normal' | 'danger'
    onClick?: () => void
    children?: ReactNode
}

export const Button: FC<ButtonProps> = ({ size = 'normal', ...props }) => {
    return <button {...props} className={`Button Button--${size}`} />
}