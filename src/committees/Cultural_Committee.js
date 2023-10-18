import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const CulturalEvent = ({ clubName, events }) => {
    const calculateCountdown = (eventDate) => {
        const now = new Date();
        const targetDate = new Date(eventDate);
        const timeDifference = targetDate - now;

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        days = Math.max(days, 0);
        hours = Math.max(hours, 0);
        minutes = Math.max(minutes, 0);

        return { days, hours, minutes };
    };

    const [countdowns, setCountdowns] = useState(
        events.map((event) => calculateCountdown(event.date))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdowns(events.map((event) => calculateCountdown(event.date)));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [events]);

    return (
        <div className="container mt-5 bg-white">
            <Link to="/" className="btn btn-primary mb-4 mt-2">
                Go to Home Page
            </Link>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 ">
                    <img
                        src="../logo-new.png"
                        alt="Club Logo"
                        className="img-fluid mt-4"
                        style={{ maxHeight: "70px", maxWidth: "60px" }}
                    />
                </div>
                <div className="col-md-8 d-flex flex-column flex-sm-row align-items-center">
                    <h1 className=" mb-0 mr-sm-2">{clubName}</h1>
                </div>
            </div>
            <div className="row mt-5">
                <h2 className="text-center mb-4">upcoming Events</h2>
                {events && events.length > 0 ? (
                    events.map((event, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card glassmorphism p-3 mb-4">
                                <img
                                    src={`../images/${event.imageFileName}`}
                                    alt={event.name}
                                    className="img-fluid mb-3"
                                    style={{ maxHeight: "12em" }}
                                />
                                <h3>{event.name}</h3>
                                <p>Date: {event.date}</p>
                                <p>Time: {event.time}</p>
                                <div className="text-center">
                                    <h5>
                                        Countdown: {countdowns[index].days} days{" "}
                                        {countdowns[index].hours} hours {countdowns[index].minutes}{" "}
                                        minutes
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No current events</p>
                )}
            </div>
            <div className="text-center"></div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Events Description :</h2>
                    <h3 className="mt-4 mb-4 text-decoration-underline">Teachers Day</h3>
                    <p>
                        When we come together to express our gratitude and appreciation for
                        the wonderful educators who have played a pivotal role in shaping
                        our academic journeys, who are guiding lights in the journey of knowledge,
                        celebrating the mentors who shape our tomorrows.
                    </p>
                    <p>
                        ”Teaching is a very noble profession that shapes the character, caliber,
                        and future of an individual. If people remember me as a good teacher that
                        will be the biggest honor for me." - APJ Abdul Kalam
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h3 className="mt-4 mb-4 text-decoration-underline">Janmashtami</h3>
                    <p>
                        Celebrated to mark the birth of Lord Krishna, the festival of Janmashtami
                        is celebrated with much fervour at DAIICT. During this festival, dahi
                        handi and mud holi events are held. The festival falls during the Hindu
                        month of Bhadrapada on the Ashtami. The college's Janmashtami festival is
                        an enchanting blend of cultural richness and youthful enthusiasm. Vibrant
                        decorations, melodious bhajans, and spirited dance performances create
                        an atmosphere of devotion and merriment. The students' dedication in
                        organizing this event showcases their admirable commitment to tradition.
                        The diverse and colorful attire, heartfelt prayers, and delicious prasad further
                        elevate the celebration. This festival not only commemorates Lord Krishna's
                        birth but also fosters unity, respect, and spirituality, making it a truly memorable
                        and cherished event for everyone involved.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h3 className="mt-4 mb-4 text-decoration-underline">Tarang</h3>
                    <p>
                        It's that time of the year when the beats of the dhol and the twirl of
                        colorful attires fill the air! Think vibrant Garba, energetic Dandiya Raas,
                        mouthwatering food stalls, and a whole lot of fun. Tarang is all about
                        celebrating together and creating beautiful memories.
                        Tarang is one of the most anticipated cultural celebrations of the year, and it's
                        an event that brings the vibrant spirit of Navratri to life.
                        Navratri festival is a spectacular tapestry of tradition and jubilation.
                        The vibrant, elaborate decorations, mesmerizing garba dances, and soul-stirring
                        dandiya raas performances infuse the campus with an electrifying energy.
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <h3 className="mt-4 mb-4 text-decoration-underline">Ganesh Chaturthi</h3>
                    <p>
                        Ganesh Chaturthi, a festival celebrated with utmost enthusiasm
                        and devotion, has once again enhanced our college campus. During
                        the Ganesh Sthapna, we witnessed a crazy overflow of enthusiasm
                        and excitement as Baappa made his grand entry onto campus. It was
                        an incredible delight to capture the spontaneous dancing and celebration
                        that erupted all around during the Ganesh Visarjan, we embarked
                        on an adventure to ensure that we captured every heartwarming scene.
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <h3 className="mt-4 mb-4 text-decoration-underline">
                        Maniere
                    </h3>
                    <p>
                        MANIERE: The Fashion Night. It is an event where designers showcase their
                        fashion designs inspired by comic books, movies, TV shows, and other forms
                        of pop culture. From superhero-inspired looks to your favourite fantasy 
                        character from Harry Potter or Game of Thrones, this theme will have something
                        for everyone.Maniere is not just a fashion show but a celebration of
                        individuality and innovation in the world of fashion. We welcome all the 
                        fashion enthusiasts to come together and make this event a resounding success. 

                    </p>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-md-6">
                    <h2>Club Information</h2>
                    <p>
                        The Cultural Committee is responsible for keeping the student community of DA-IICT culturally alive, the college life happening and simultaneously preserving our culture amongst the students. It also promotes various cultural activities like music, drama and dance amongst the student community. The Cultural Committee organises various big events all year round the academic calendar, thus creating an aura of excitement and enjoyment along with providing a platform for students to showcase their talent in front of the college. Some of the main OAT events include the Dance Nite, the Drama Nite, etc. Apart from these, the Cultural Committee also takes upon its onus, the celebrations of various festivals throughout the year including Janmashtami, Eid and, one of the most popular one, Navratri. With this, it makes an attempt to promote the significance of these festivals as well as generate a homely feeling for the students. The Cultural Committee recognises itself as an important aspect of the soul of a student’s life and strives to make the college life a colourful and memorable one.
                    </p>
                </div>
                <div className="col-md-6">
                    <h2>Event Organizers</h2>
                    <ul>
                        <li>
                            <strong>Teachers Day - </strong>Organizer 1
                        </li>
                        <li>
                            <strong>Janmashtami - </strong>Organizer 2
                        </li>
                        <li>
                            <strong>Tarang - </strong>Organizer 3
                        </li>
                        <li>
                            <strong>Ganesh Chaturthi - </strong>Organizer 4
                        </li>
                        <li>
                            <strong>Maniere - </strong>Organizer 5
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Convener and Deputy Convener</h2>
                    <p>Convener: Convener Name</p>
                    <p>Deputy Convener: Deputy Convener Name</p>
                </div>
            </div>
        </div>
    );
};

const eventsData = [
    {
        name: "Teachers Day",
        date: "2023-10-15T18:00:00",
        time: "10:00 AM",
        imageFileName: "teachers-day.jpg",
    },
    {
        name: "Janmashtami",
        date: "2023-10-16T14:30:00",
        time: "2:30 PM",
        imageFileName: "mud-holi.jpg",
    },
    {
        name: "Tarang(Navratri)",
        date: "2023-10-17T14:30:00",
        time: "2:30 PM",
        imageFileName: "garba.jpg",
    },
    {
        name: "Maniere",
        date: "2023-10-16T18:30:00",
        time: "2:30 PM",
        imageFileName: "maniere.jpeg",
    },
    {
        name: "Ganesh Chaturthi",
        date: "2023-10-18T14:30:00",
        time: "2:30 PM",
        imageFileName: "ganesh-sthapana.jpeg",
    },
    // Add more event objects as needed
];

const Cultural = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <CulturalEvent clubName="Cultural Committee" events={eventsData} />
                    {/* Add other components or content here */}
                </div>
            </div>
        </div>
    );
};

export default Cultural;
