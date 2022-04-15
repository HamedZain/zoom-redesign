import { FC } from "react"
import './Header.scss'
import { useUser } from "../../hooks/useUser"
import { ZoomLogo } from "../../icons"
import { Avatar } from "../Avatar/Avatar"

export const Header: FC = () => {
    const user = useUser()

    return <header className="Header">
        <ZoomLogo className="Header__logo" />
        <div className="Header__meeting">
            <p className="Header__meeting__title">Design Check-In Meeting</p>
            <p className="Header__meeting__time">43:12</p>
        </div>
        <Avatar firstName={user.firstName} lastName={user.lastName} imgSrc={user.imgSrc} />
    </header>
}