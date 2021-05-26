import {HiOutlineShieldCheck, HiOutlineShieldExclamation, HiStar, HiOutlineStar} from 'react-icons/hi'
import { WholeCard, Reviewer, Pic, ReviewerInfo, Name, CardInfo, Summary, Description, Rating  } from './Styles'

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
    return (
        <WholeCard>

            <Reviewer>
                <Pic src = {props.image} alt = {props.alt} />
                <ReviewerInfo>
                    <Name>{props.name}</Name>
                    {verify(props.verified)}
                </ReviewerInfo>
            </Reviewer>

            <CardInfo>
                <Summary>{props.summary}</Summary>
                <Description>{props.description}</Description>
                <Rating>
                    {createStars(props.rating)}
                    {props.rating} out of 5
                </Rating>
                <p className = 'for'>for <span className = 'quimbee'>{props.business}</span></p>
                <p className = 'days'>Reviewed {props.daysAgo} days ago</p>
            </CardInfo>

        </WholeCard>
    );
}

export default Card;