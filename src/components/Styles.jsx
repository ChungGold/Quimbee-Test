import styled from 'styled-components'

const WholeCard = styled.div`
    height: 260px;
    width: 450px;
    font-size: 12px;

    padding: 20px;
    border: #E2E2E2 2px solid;
    border-radius: 10px;

    display: flex;
    flex-flow: column wrap;

    :hover {
    box-shadow: 0px 0px 3px 3px #535358;
    }

    @media (max-width: 992px) {
        height: 325px;
        width: 225px;
        font-size: 12px;
    
        padding: 16px;
        border: #E2E2E2 2px solid;
        border-radius: 10px;
    
        display: flex;
        flex-flow: column wrap;
    }
`

const Reviewer = styled.figure`
    width: 100%;
    height: 50px;

    display: flex;
    flex-flow: row wrap;

    margin-bottom: 16px;
`

const Pic = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    object-fit: cover;
`

const ReviewerInfo = styled.div`
    width: calc(100%-50px);
    height: 50px;

    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
`

const Name = styled.figcaption`
    font-size: 14px;
    font-weight: 600;
    color: #161619;
`

const CardInfo = styled.figcaption`
    width: 100%;
    height: calc(100%-50px);
`

const Summary = styled.p`
    font-weight: 600;
    color: #161619;

    margin-bottom: 16px;
`

const Description = styled.p`
    color: #535358;

    margin-bottom: 16px;
`

const Rating = styled.p`
    margin-bottom: 8px;
`



export { WholeCard, Reviewer, Pic, ReviewerInfo, Name, CardInfo, Summary, Description, Rating }