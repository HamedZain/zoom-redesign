import { FC } from 'react'
import './App.scss'
import { Header } from '../components/Header/Header'
import { Chat } from '../components/Chat/Chat'
import { Stream } from '../components/Stream/Stream'
import { CallControls } from '../components/CallControls/CallControls'

export const App: FC = () => {

    return (
        <div className="App">

            <Header />
            <main className="App__content">
                <div className="App__content__call">
                    <Stream />
                    <CallControls />
                </div>
                <Chat />
            </main>
        </div>
    )
}
