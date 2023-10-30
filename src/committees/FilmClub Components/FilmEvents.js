import { Link } from "react-router-dom";
import FilmCountdown from "./FilmCountdown";
import './FilmEvents.css'
const FilmEvents = ({ image, eventdate, month, year, eventName, description, date,time,link }) => {
    return (

        <div>
            <div className="film-event-container">
                <div className="film-event-box">
                    <div className="film-date">
                        <p className="film-event-date">{eventdate}</p>
                        <p className="film-event-my">{month} {year}</p>
                    </div>
                    <div className="film-name-description">
                        <h2>{eventName}</h2>
                        <p className="film-paragraph">{description}</p>
                        <p className="adjust">Time :{time}PM</p>
                        <p className="adjust">Venue : LT3</p>
                        <Link to ={link} target="_blank" className="trailer-button">Trailer</Link>
                        <FilmCountdown targetDate={date} />
                    </div>
                    <img src={image} className="film-image"></img>
                </div>

            </div>

        </div>
    )
}
export default FilmEvents;