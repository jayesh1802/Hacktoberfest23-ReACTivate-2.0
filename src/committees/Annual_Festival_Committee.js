import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timeLineElements from "./AnnualFestivalComponents/timeLineElements";
import AnnualCountdown from "./AnnualFestivalComponents/AnnualCountdown";
import './AnnualFestival.css'
import ShootingStars from "./AnnualFestivalComponents/shootingstars";
import { Link } from "react-router-dom";
const AnnualFestival = () => {
    return (
        <div>
            <Link to="/" className="btn btn-primary mb-4 mt-2 ">
            Go to Home Page
            </Link>
            <div>
                <h1 className="synapse-top-heading">ANNUAL FESTIVAL COMMITTEE</h1>
                <h1 className="synapse-top-heading">SYNAPSE</h1>
                <h2 className="synapse-subheading">Upcoming Events</h2>
            </div>
            <ShootingStars/>
            <div>
                <VerticalTimeline>
                    {
                        timeLineElements.map(element => {
                            return (
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.eventdate}
                                >
                                    <h3 className="vertical-timeline-title">{element.title}</h3>
                                    <p className="annual-event-description">{element.descirption}</p>
                                    <AnnualCountdown targetDate={element.date}></AnnualCountdown>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
            <div className="synapse-info">
                <h2>About Us </h2>
                <p>
                The Annual Festival Committee of DA-IICT works to provide a platform for students around the country to compete and showcase their talent. We are the proud organizers of the annual techno-cultural festival of DA-IICT – Synapse. Synapse is a celebration – a celebration of culture, technology and life. It is about realizing the underlying inherent junction of the three in an electrifying atmosphere. One of the most prominent college fests of Gujarat, it is a spectacle of our talent, aspirations, creativity and vision. Through exciting workshops, impressive events, and mesmerizing pro-nights, Synapse is a medium through which the youth can express their views; be it through art, culture, technological skills, knowledge or entertainment. It is a time when the student community comes forward to show its intensity, passion and enthusiasm. We, at Synapse, hope to create the best four days at DA-IICT in an effort to give back to the DA-IICT community, students and faculty alike, for all their love, hard work, and dedication.
                </p>

            </div>
            <div className="synapse-event-organizers">
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
            <div className="about-synapse">
                    <h2> Convener and Deputy Convener</h2>
                    {/* Add convener and deputy convener as per the name */}
                    <p>Convener : Convener Name</p>
                    <p>Deputy Convener: Deputy Convener Name</p>

                </div>
        </div>
    )
}
export default AnnualFestival;