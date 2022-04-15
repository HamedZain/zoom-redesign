import { FC } from "react"
import "./CallControls.scss"
import { Button } from "../Button/Button"
import {
    CallEndIcon,
    CameraIcon,
    ChatBubbleIcon,
    FitScreenIcon,
    MicIcon,
    PersonAddIcon,
    ScreenShareIcon,
    SettingsIcon,
    SpaceDashboardIcon,
    VideoCamIcon,
    VolumUpIcon
} from '../../icons'

export const CallControls: FC = () => {
    return <footer className="Controls">
        <div className="Controls__group">
            <Button><SettingsIcon /></Button>
            <Button><VolumUpIcon /></Button>
        </div>

        <div className="Controls__group">
            <Button><MicIcon /></Button>
            <Button><VideoCamIcon /></Button>
            <Button><CameraIcon /></Button>
            <Button><CallEndIcon /></Button>
            <Button><ScreenShareIcon /></Button>
            <Button><PersonAddIcon /></Button>
            <Button><FitScreenIcon /></Button>
        </div>

        <div className="Controls__group">
            <Button><SpaceDashboardIcon /></Button>
            <Button><ChatBubbleIcon /></Button>
        </div>
    </footer>
}
