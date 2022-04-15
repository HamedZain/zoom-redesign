import { FC, ReactNode } from 'react'

export { ReactComponent as ZoomLogo } from './logo.svg'

const Icon: FC<{ children?: ReactNode }> = props => <span className="material-icons-round">{props.children}</span>

export const SettingsIcon = () => <Icon>settings</Icon>
export const VolumUpIcon = () => <Icon>volume_up</Icon>
export const MicIcon = () => <Icon>mic</Icon>
export const VideoCamIcon = () => <Icon>videocam</Icon>
export const VideoCamOffIcon = () => <Icon>videocam_off</Icon>
export const CameraIcon = () => <Icon>photo_camera</Icon>
export const CallEndIcon = () => <Icon>call_end</Icon>
export const ScreenShareIcon = () => <Icon>screen_share</Icon>
export const PersonAddIcon = () => <Icon>person_add</Icon>
export const FitScreenIcon = () => <Icon>fit_screen</Icon>
export const SpaceDashboardIcon = () => <Icon>space_dashboard</Icon>
export const ChatBubbleIcon = () => <Icon>chat_bubble</Icon>
