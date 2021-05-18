import {HiOutlineShieldCheck, HiStar, HiOutlineStar} from 'react-icons/hi';

const Card = props => {
    return (<div className = 'card'>
        <figure className = 'reviewer'>
            <img src = {props.image} alt = {props.alt} className = 'picture'></img>
            <div className = 'reviewer-info'>
                <figcaption className = 'name'>{props.name}</figcaption>
                <figcaption className = 'verified'><HiOutlineShieldCheck />{props.verified}</figcaption>
            </div>
        </figure>
        <figcaption className = 'card-info'>
            <p className = 'summary'>{props.summary}</p>
            <p className = 'description'>{props.description}</p>
            <p>
                <span className = 'stars'><HiStar /><HiStar /><HiStar /><HiStar /><HiOutlineStar /></span>
                {props.rating}
            </p>
            <p className = 'for'>for <span className = 'quimbee'>Quimbee Bar Review</span></p>
            <p className = 'days'>Reviewed 3 days ago</p>
        </figcaption>
    </div>);
}

export default Card;