// const Card = props => {
//     return (<figure className = 'card'>
//         <img src = {props.image} alt = {props.alt}></img>
//         <p className = 'reviewer'></p>
//         <p className = 'verified'></p>
//         <figcaption className = 'card-info'>
//             <h1>{props.title}</h1>
//             <p>{props.desc}</p>
//             <span>
//                 <a href = {props.github}></a>
//                 <a href = {props.link}></a>
//             </span>
//         </figcaption>
//     </figure>);
// }

const Card = props => {
    return (<div className = 'card'>
        <figure className = 'reviewer'>
            <div className = 'image'></div>
            <figcaption className = 'name'>Chung Au</figcaption>
            <figcaption className = 'verified'>Verified purchaser</figcaption>
        </figure>
        <figcaption className = 'card-info'>
            <p className = 'summary'>Quimbee is the best thing ever. And this goes to two lines.</p>
            <p className = 'description'>I love Quim bee. It saved me in the 1L and it's saving me in 2L. I love it all and it's money well spent.</p>
            <p>4 out of 5</p>
            <p>for<span>Quimbee Bar Review</span></p>
            <p>Reviwed 3 days ago</p>
        </figcaption>
    </div>);
}

export default Card;