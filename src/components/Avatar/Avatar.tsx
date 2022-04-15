import { FC } from 'react'
import './Avatar.scss'

interface AvatarProps {
    imgSrc?: string
    firstName: string
    lastName: string
}

export const Avatar: FC<AvatarProps> = ({ imgSrc, firstName, lastName }) => {
    return (
        <div className="Avatar">
            <img className="Avatar__img" src={imgSrc} alt={`${firstName} ${lastName} profile`} />
        </div>
    )
}