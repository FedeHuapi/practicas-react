import './App.css'
import { TwitterCard } from './TwitterCard'

export function App () {
    // const handleFollowStatus = (userName, isFollowing) => {
    //     console.log(`${userName} is ${isFollowing ? 'following' : 'not following'}`);
        
    // }



    return (
        <div className='App'>
        <TwitterCard userName="kikobeats" name="Agustin Rivero" />
        <TwitterCard userName="joarivero" name="Joana Rivero" /> {/* On follow viene de TwitterCard */}
        </div>
    )
}

