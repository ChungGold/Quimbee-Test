import Card from './Card';

// const createCard = (Projects) => {
//     return (
//         <Card 
//         image = {Projects.image}
//         alt = {Projects.alt}
//         title = {Projects.title}
//         desc = {Projects.desc}
//         github = {Projects.github}
//         link = {Projects.link}
//     />
//     )
// }

const App = props => {
    return (<div id = 'app'>
        <Card />
    </div>);
}

export default App;