import {HiOutlineShieldCheck, HiOutlineShieldExclamation, HiStar, HiOutlineStar} from 'react-icons/hi';

// NUMBER OF STARS RENDER BASED ON Reviewers.rating
const createStars = (props) => {
    switch(props) {
        case 1:
            return (<span className = 'stars'>
                <HiStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
            </span>)

        case 2:
            return (<span className = 'stars'>
                <HiStar />
                <HiStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
            </span>)

        case 3:
            return (<span className = 'stars'>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiOutlineStar />
                <HiOutlineStar />
            </span>)

        case 4:
            return (<span className = 'stars'>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiOutlineStar />
            </span>)

        case 5:
            return (<span className = 'stars'>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
            </span>)

        default:
            return (<span className = 'stars'>
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
        </span>)
    }
}

// VERIFIED STATUS RENDERS BASED ON Reviewers.verified
const verify = (props) => {
    if (props === true) {
        return (<figcaption className = 'verified'>
            <HiOutlineShieldCheck /> Verified purchaser
        </figcaption>)
    } else {
        return (<figcaption className = 'unverified'>
            <HiOutlineShieldExclamation /> Unverified
        </figcaption>)
    }
}

//CARD COMPONENT
const Card = props => {
    return (<div className = 'card'>

        <figure className = 'reviewer'>
            <img src = {props.image} alt = {props.alt} className = 'picture'></img>
            <div className = 'reviewer-info'>
                <figcaption className = 'name'>{props.name}</figcaption>
                {verify(props.verified)}
            </div>
        </figure>

        <figcaption className = 'card-info'>
            <p className = 'summary'>{props.summary}</p>
            <p className = 'description'>{props.description}</p>
            <p className = 'rating'>
                {createStars(props.rating)}
                {props.rating} out of 5
            </p>
            <p className = 'for'>for <span className = 'quimbee'>{props.business}</span></p>
            <p className = 'days'>Reviewed {props.daysAgo} days ago</p>
        </figcaption>

    </div>);
}

export default Card;