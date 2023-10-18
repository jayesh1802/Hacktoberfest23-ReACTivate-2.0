import CountdownTimer from "./CountdownTimer";
import './Events.css'
const Events=({heading,paragraph,date})=>{
    return (
        <div>
            <div className="event-container">
                <div className="heading-paragraph">
                    <h1 className="event-heading">{heading}</h1>
                    <p className="event-paragraph">{paragraph}</p>
                </div>
                <div className="event-timer">
                    <CountdownTimer className="event-date-box" targetDate={date}/>
                </div>
            </div>
        </div>
    )
}
export default Events;