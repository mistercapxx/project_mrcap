import React, {useState} from 'react';
import './App.css';
import Basket from "./Baskt.json";
import Waving from "./Waving.json";
import Lottie from "lottie-react";
// import './MyVideoComponent.css';
import firstproj from './1project.png';
import secondproj from './2project.png';
import htmllogo from './Logos/HTML5_logo_and_wordmark.svg.png';
import csslogo from './Logos/css-logo.png';
import jslogo from './Logos/JavaScript-logo.png';
import vegaslogo from './Logos/Vegas_Pro_15.0.png';
import bazalogo from './Logos/logo-icon696.webp';
import caplogo from './Logos/capcut-logo-on-transparent-white-background-free-vector.jpg';
import inst from './Logos/Screenshot 2024-01-25 at 11.45.53.png';
import gith from './Logos/Screenshot 2024-01-25 at 11.47.20.png';
import linke from './Logos/Screenshot 2024-01-25 at 11.48.02.png';
import ttv from './Logos/Screenshot 2024-01-25 at 11.48.15.png';
import logo from './Logos/9cd879a7-c272-4710-8fff-af63facaf02d.png';
// import GoogleDriveVideo from './GoogleDriveVideo'; // Import the GoogleDriveVideo component
//
import MyVideoComponent from './MyVideoComponent';
import MyVideoComponent2 from './MyVideoComponent2';
import MyVideoComponent3 from './MyVideoComponent3';
import MyVideoComponent4 from './MyVideoComponent4';
import MyVideoComponent5 from './MyVideoComponent5';
import MyVideoComponent6 from './MyVideoComponent6';
import MyVideoComponent7 from './MyVideoComponent7';
import MyVideoComponent8 from './MyVideoComponent8';



function App() {

    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedWebsite, setSelectedWebsite] = useState('');


    const openOverlay = (image,title,description,website) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        setSelectedDescription(description);
        setSelectedWebsite(website);
        setOverlayVisible(true);
        document.body.classList.add('no-scroll');
    };
    const closeOverlay = () => {
        setSelectedImage(null);
        setSelectedTitle('');
        setSelectedDescription('');
        setSelectedWebsite('');
        setOverlayVisible(false);
        document.body.classList.remove('no-scroll');
    };



    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section)
        {
            section.scrollIntoView({behavior: "smooth"});
        }
    };
    return (
        <div>
            <div className="buttons-container">
                <button className="button" onClick={() => scrollToSection("home")}>Home</button>
                <button className="button" onClick={() => scrollToSection("projects")}>Projects</button>
                <button className="button" onClick={() => scrollToSection("creativeVideos")}>Creative Videos </button>
                <button className="button" onClick={() => scrollToSection("skills")}>Skills</button>
                <button className="button" onClick={() => scrollToSection("contacts")}>Contacts</button>
            </div>
            <Lottie className="waver" animationData={Waving}/>
            <div id="home" className="container">
                <div className="text">
                    <span className="greeting">Hello. I'm</span>
                    <br />
                    <span className="name">Mister Cap</span>
                    <br />
                    <span className="details">[ Vladimir ]</span>
                    <br />
                    <br />
                    <span className="role">&lt;&gt; Front-End Developer &lt;/&gt;</span>
                    <br/>
                    <span className="role2">&lt;&gt; Content Maker &lt;/&gt;</span>
                    <br/>

                </div>
                <div className="animation">
                    <Lottie animationData={Basket} />
                </div>
            </div>

            <div id="projects" className="projects-title">
                <span className="project_intro">Projects </span>
            </div>
            <div className="projects-items">
                <article className="projects-item" onClick={() => openOverlay(firstproj, 'Christmas ToDoList', 'Christmas animated To Do List that adds, removes task. Can search tasks by months, show all tasks inbox. Filter through today\'s tasks. Has Spotify playlist, calendar.','https://github.com/mistercapxx/ToDoList.git')}>
                    <img src={firstproj} />
                    <div className="item-title">
                        <h5> 🎄 Christmas ToDoList</h5>
                    </div>
                </article>
                <article className="projects-item" onClick={() => openOverlay(secondproj, 'Butterfly Catching Game', 'A real fun animated game that has 3 difficulty levels and bonus effect.', 'https://github.com/mistercapxx/ButterflyEffect.git')}>
                    <img className="item-second" src={secondproj}/>
                    <div className="item-title">
                        <h5> 🦋 Butterfly Catching Game</h5>
                    </div>
                </article>
            </div>

            {overlayVisible && (
                <div className="overlay">
                    <span className="close-overlay" onClick={closeOverlay}>
                        &times;
                    </span>
                    <div className="card">
                    <img src={selectedImage} className="overlay-image"/>
                    <div className="card-content">
                        <h5>{selectedTitle}</h5>
                        <h5>{selectedDescription}</h5>
                        <div className="button-section">
                            <a href={selectedWebsite} className="button-link" target="_blank" rel="noopener noreferrer">
                                <div className="button-content">
                                    <img src={logo} alt="Logo" className="button-logo" />
                                    <span className="button-text">Repository</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                    </div>
            )}
            <div id="creativeVideos" className="videos-title">
                <span className="video_intro">Creative Videos</span>
            </div>
            {/*<GoogleDriveVideo />*/}
            <div className="part1">
                <MyVideoComponent />
                <MyVideoComponent2 />
                <MyVideoComponent3 />
            </div>
            <div className="part2">
                <MyVideoComponent4 />
                <MyVideoComponent5 />
                <MyVideoComponent6 />
            </div>
            <div className="part3">
                <MyVideoComponent7 />
                <MyVideoComponent8 />
            </div>
            <div id="skills" className="skills-title">
                <span className="skills_intro">Skills</span>
            </div>
            <div className="items">
                <div className="skills-item">
                    <img src={htmllogo}/>
                    <h4>HTML 5</h4>
                </div>
                <div className="skills-item">
                    <img src={csslogo}/>
                    <h4>CSS 3</h4>
                </div>
                <div className="skills-item">
                    <img src={jslogo}/>
                    <h4>JavaScript</h4>
                </div>
                <div className="skills-item">
                    <img src={vegaslogo}/>
                    <h4>Sony Vegas</h4>
                </div>
                <div className="skills-item">
                    <img src={bazalogo}/>
                    <h4>Bazaart</h4>
                </div>
                <div className="skills-item">
                    <img src={caplogo}/>
                    <h4>CapCut</h4>
                </div>
            </div>
            <div className="videos-title">
                <span id="contacts" className="video_intro">Contacts</span>
            </div>
            <div className="contacts-items">
                <a href="https://www.instagram.com/mistercap_xx" title="Instagram" className="contacts_item">
                    <picture>
                        <img className="contacts-img" src={inst}/>
                    </picture>
                </a>
                <a href="https://github.com/mistercapxx" title="GitHub" className="contacts_item">
                    <picture>
                        <img className="contacts-img" src={gith}/>
                    </picture>
                </a>
                <a href="https://www.linkedin.com/in/xlilyomr/" title="LinkedIn" className="contacts_item">
                    <picture>
                        <img className="contacts-img" src={linke}/>
                    </picture>
                </a>
                <a href="https://www.twitch.tv/mistercap_xx" title="Twitch" className="contacts_item">
                    <picture>
                        <img className="contacts-img" src={ttv}/>
                    </picture>
                </a>
            </div>
        </div>
    );
}

export default App;

