const Card = props => {
    return (<div className = 'card'>
        <figure className = 'reviewer'>
            <img src = {props.image} alt = {props.alt} className = 'profile'></img>
            <div className = 'reviewer-info'>
                <figcaption className = 'name'>{props.name}</figcaption>
                <figcaption className = 'verified'>{props.verified}</figcaption>
            </div>
        </figure>
        <figcaption className = 'card-info'>
            <p className = 'summary'>{props.summary}</p>
            <p className = 'description'>{props.description}</p>
            <p>{props.rating}</p>
            <p>for<span>Quimbee Bar Review</span></p>
            <p>Reviwed 3 days ago</p>
        </figcaption>
    </div>);
}

export default Card;