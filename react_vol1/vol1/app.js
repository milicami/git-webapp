
const musicGenres = [
    "Alternative",
    "Blues",
    "Classical",
    "Country",
    "Hip-Hop",
    "Indie Pop",
    "Jazz",
    "Rock"
];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

const GenresItems = (props) => {
    return <li>{props.genre}</li>
}

const ListOfGenres = (props) => {
    const musicGenres = (props.genres)
    return (
        <ul>
            {musicGenres.map((genre, index) => {
                return <GenresItems genre={genre} />

            })}

        </ul>
    )
}

const App = (props) => {
    return (
        <div>
            <Header title="Music genres" />
            <ListOfGenres genres={musicGenres} />
        </div>
    )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);



// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

// const Main = (props) => {
//     return (
//         <main>
//             <h2>{props.description}</h2>
//         </main>
//     )
// }

// const Body = (props) => {
//     return (
//         <div>
//             <img src={props.photo} />
//             <p>{props.info.name}</p>
//         </div>
//     )
// }

// class Info {
//     constructor(name, surname, yob) {
//         this.name = name;
//         this.surname = surname;
//         this.yob = yob;
//     }
// }

// console.log(ifo);


// const Footer = (props) => {
//     return (
//         <footer>
//             <p>{props.copyright}</p>
//         </footer>
//     )
// }



// const ifo = new Info("dfkjhg", "fskjdhg", 24);
// const App = (props) => {
//     return (
//         <div>
//             <Header title="Our first react project" />
//             <Main description="Milos i Milica konacno sede zajedno" />
//             <Body photo="https://bit.ly/2ss8i7W" info={ifo} />
//             <Footer copyright="Copyright" />
//         </div>
//     )
// }

// const rootElement = document.querySelector("#root");
// ReactDOM.render(<App />, rootElement);