import { Link } from 'react-router-dom';
import Events from './DCEI Components/Events';
import './Dcei.css'
const Dcei = () => {
    return (
        <div className="bg-white">
            <Link to="/" className="btn btn-primary mb-4 mt-2 ">
            Go to Home Page
            </Link>
            <div className="complete-page">
                <div className="top-heading">
                    <img className="daiict-logo" src="https://www.daiict.ac.in/themes/daiict/images/logo-new.png" />
                    <h1 className="dcei-heading">DA-IICT Center for Entrepreneurship and Incubation</h1>
                    <img className="dcei-logo" src="http://ceid.daiict.ac.in/assets/images/logo.jpeg"></img>
                </div>
                <div>
                    <h2 className="upcoming-events">UPCOMING EVENTS</h2>
                     <Events
                     heading={"SellOut"}
                     paragraph={"This event aims to develop the persuading and convincing skills of students. Participants will be given a specific item/service to sell among the judges, and the ones with the best sales talk will be declared winners!"}
                     date={"2023-11-04T23:59:59"}/>
                    <Events
                    heading={"DCEI Workshop"}
                    paragraph={"Unlocking the doors to innovation and self-discovery, our forthcoming workshop invites college students to immerse themselves in the world of entrepreneurship "}
                    date={"2023-11-20T23:59:59"}
                    />
                    <Events
                     heading={"Swaadheenta"}
                     paragraph={"Meaning Self-Dependence in Hindi, Swadheenta invites developers to start with ideas, code them into prototypes and grill them through expert sessions into business solutions. Today, the world needs, not pieces of code, but solutions, and Swadheenta aims to provide that in 48 hours!!"}
                     date={"2023-12-31T23:59:59"}
                     />
                     <Events
                     heading={"DA TANK"}
                     paragraph={"With an imagination that goes far beyond convention, a dream bigger than just money-build the next financial empire. If you think you are the next Bill Gates, this is the place to be. Dazzle the panel with your business skills and planning for the next big startup."}
                     date={"2024-03-15T23:59:59"}
                     />
                </div>
                <div className="contact">
                    <h3>Convener and Deputy Convener</h3>
                    <p className="contact-person">Convener: Convener Name </p>
                    <p className="contact-person">Deputy Convener: Deputy Convener Name </p>
                </div>
            </div>
        </div>
    )
}
export default Dcei;
