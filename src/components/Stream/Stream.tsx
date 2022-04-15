import { FC } from "react"
import "./Stream.scss"

const bg = "https://remotelab.io/wp-content/uploads/2020/08/GettyImages-1176848710.jpeg"

export const Stream: FC = () => {
    return <div className="Stream">
        <img className="Stream__img" src={bg} alt="" />
    </div>
}