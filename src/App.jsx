import styled from 'styled-components'
import Card from './components/Card'
import Reviewers from './components/Reviewers'

const createCard = (Reviewers) => {
    return (
        <Card 
        image = {Reviewers.image}
        alt = {Reviewers.alt}
        name = {Reviewers.name}
        verified = {Reviewers.verified}
        summary = {Reviewers.summary}
        description = {Reviewers.description}
        rating = {Reviewers.rating}
        daysAgo = {Reviewers.daysAgo}
        business = {Reviewers.business}
    />
    )
}

const Container = styled.div`
    min-height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;

    @media (max-width: 1350px) {
        width: 900px;
        justify-content: flex-start;
    }

    @media (max-width: 992px) {
        flex-flow: column wrap;
        justify-content: flex-start;
    }
`

const App = () => {
    return (
        <Container>
            {Reviewers.map(createCard)}
        </Container>
    );
}

export default App;