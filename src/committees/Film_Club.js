import './FilmClub.css'
import FilmEvents from './FilmClub Components/FilmEvents';
import { Link } from 'react-router-dom';
const FilmClub = () => {
    return (
        <div className="film-page">
            <Link to="/" className="btn btn-primary mb-4 mt-2 ">
            Go to Home Page
            </Link>
            
            <div>
                <h1 className="filmclub-heading">FILM CLUB</h1>
                <h2 className="upcoming-screenings">UPCOMING SCREENINGS</h2>
            </div>
            <div className="film-final-container">
                <FilmEvents
                    eventName={"IND VS SA World Cup"}
                    description={"The highly anticipated World Cup match between India and South Africa featured thrilling moments that had cricket fans on the edge of their seats, showcasing the true spirit of the game.Join us in the screening"}
                    eventdate={"5"}
                    month={"Nov"}
                    year={"2023"}
                    time={"2"}
                    link={"https://youtu.be/YoHD9XEInc0?si=Qfrkzqo5Xaux-QGI"}
                    date={"2023-11-05T14:00:00"}
                >
                </FilmEvents>
                {<img className="film-image" src='../FilmClubImages/indSa.avif'></img>}
            </div>
            <div className="film-final-container">
                <FilmEvents
                    eventName={"3 Idiots"}
                    description={"3 Idiots, a beloved Bollywood film, captivated audiences with its humorous and thought-provoking take on the pressures of higher education. Its screening remains a delightful journey of friendship, education, and life lessons."}
                    eventdate={"15"}
                    month={"Nov"}
                    year={"2023"}
                    time={"9"}
                    link={"https://youtu.be/xvszmNXdM4w?si=ZLSDVXetV8n-V0wW"}
                    date={"2023-11-15T21:00:00"}
                >
                </FilmEvents>
                {<img className="film-image" src='../FilmClubImages/3idiotsp.jpg'></img>}
            </div>
            <div className="film-final-container">
                <FilmEvents
                    eventName={"Inception"}
                    description={"The screening of the movie Inception promises an immersive journey through the intricacies of dreams and reality, inviting viewers to explore the depths of the human mind in a mind-bending cinematic experience."}
                    eventdate={"22"}
                    month={"Nov"}
                    year={"2023"}
                    time={"9"}
                    link={"https://youtu.be/YoHD9XEInc0?si=Qfrkzqo5Xaux-QGI"}
                    date={"2023-11-22T21:00:00"}
                >
                </FilmEvents>
                {<img className="film-image" src='../FilmClubImages/inception.jpg'></img>}
            </div>
            <div className="film-final-container">
                <FilmEvents
                    eventName={"Forrest Gump"}
                    description={"The screening of Forrest Gump brought timeless charm to the audience, as Tom Hanks' iconic portrayal of the lovable, simple-minded character captivated hearts and minds, making it a cinematic classic that continues to inspire and entertain."}
                    eventdate={"02"}
                    month={"Dec"}
                    year={"2023"}
                    time={"9"}
                    link={"https://youtu.be/bLvqoHBptjg?si=Jiz6CMNeMI7d2wJP"}
                    date={"2023-12-02T21:00:00"}
                >
                </FilmEvents>
                {<img className="film-image" src='../FilmClubImages/forrestgump.webp'></img>}
            </div>
            <div className="filmclub-info">
                <h2>About Us </h2>
                <p>
                By far the most celebrated club, the Film Club occupies a special place in every student’s heart. The club was started by a few ardent movie enthusiasts with the aim of providing regular entertainment to DA-IICTians in the form of interesting as well as enlightening cinema. The club screens a movie the night before every regular holiday (Saturdays and Sundays) and Screens Matches(Cricket, Football,etc) at the Open Air Theatre (OAT). The Film Club has a wide range of movies – 250 English, 170 Hindi and 25 Other, and is also continually being increased regularly. Bears ample testimony to the fact that the club can boast not only of quantity, but also of quality. Keeping all interests in mind, the club has something for each student of DAIICT. From ‘Shutter Island’ to ‘Guide’, from ‘3 Idiots’ to ‘Devdas’, the movies cater to multiple and varied backgrounds. DA-IICT students are not merely spectators but knowledgeable about cinema.
                </p>

            </div>
            <div className="event-organizers">
                <h2>Event Organizers</h2>
                <ol>
                    <li>Organizer1</li>
                    <li>Organizer2</li>
                    <li>Organizer3</li>
                    <li>Organizer4</li>
                    <li>Organizer5</li>
                    <li>Organizer6</li>

                </ol>
            </div>
            <div className="about-film-club">
                    <h2> Convener and Deputy Convener</h2>
                    {/* Add convener and deputy convener as per the name */}
                    <p>Convener : Convener Name</p>
                    <p>Deputy Convener: Deputy Convener Name</p>

                </div>


        </div>

    )
}
export default FilmClub;
