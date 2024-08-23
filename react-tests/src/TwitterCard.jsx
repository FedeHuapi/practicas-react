import { useState } from 'react'
import PropTypes from 'prop-types'

export function TwitterCard ({ userName, name, isFollowing: initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)  // <-- Es lo que le da vida a los elementos en React
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
     ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'

      const handleClick = () => {
        setIsFollowing(!isFollowing)
      }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'  alt="La imagen de Agustin" src={`https://unavatar.io/twitter/${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
        </aside>
    </article>
    )
}

TwitterCard.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,

}