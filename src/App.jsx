import Card from './Card';
import Reviewers from './Reviewers';

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

const App = () => {
    return (<div id = 'app'>
        {Reviewers.map(createCard)}
    </div>);
}

export default App;