import './App.css'
import { TwitterCard } from './TwitterCard'

export function App () {
    const handleFollowStatus = (userName, isFollowing) => {
        console.log(`${userName} is ${isFollowing ? 'following' : 'not following'}`);
        
    }



    return (
        <div className='App'>
        <TwitterCard isFollowing={true}  userName="kikobeats" name="Agustin Rivero" onFollowStatusChange={{handleFollowStatus}}/>
        <TwitterCard isFollowing={false}  userName="joarivero" name="Joana Rivero" onFollowStatusChange={handleFollowStatus}/> {/* On follow viene de TwitterCard */}
        </div>
    )
}

