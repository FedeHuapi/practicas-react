import PropTypes from 'prop-types'

export function TwitterCard ({ userName, name, isFollowing, onFollowStatusChange}) {
    const handleButtonClick = () => {
        onFollowStatusChange(userName, isFollowing);
    }


    return (
        <article>
        <header>
            <img alt="La imagen de Agustin" src={`https://unavatar.io/twitter/${userName}`} />
            <div>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>

        <aside>
        <button onClick={handleButtonClick}>{isFollowing ? 'Siguiendo' : 'Seguir'}</button>
        </aside>
    </article>
    )
}

TwitterCard.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    onFollowStatusChange: PropTypes.func.isRequired, // Validación
}