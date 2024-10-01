import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Basket from './Baskt.json';
import Waving from './Waving.json';
import Lottie from 'lottie-react';
import firstproj from './1project.png';
import secondproj from './2project.png';
import {
  MyVideoComponent,
  MyVideoComponent2,
  MyVideoComponent3,
  MyVideoComponent4,
  MyVideoComponent5,
  MyVideoComponent6,
  MyVideoComponent7,
  MyVideoComponent8,
} from './Videos';
import {
  htmllogo,
  csslogo,
  jslogo,
  reactlogo,
  reduxlogo,
  muilogo,
  webpacklogo,
  canvalogo,
  premierelogo,
  inst,
  gith,
  linke,
  ttv,
  telega,
} from './Logos/logos';

const Projects = () => {
  const cardRef = useRef(null);
  const projects = [
    {
      image: firstproj,
      title: 'Christmas ToDoList',
      description:
        "Christmas animated To Do List that adds, removes tasks. Can search tasks by months, show all tasks inbox. Filter through today's tasks. Has Spotify playlist, calendar.",
      website: 'https://github.com/mistercapxx/ToDoList.git',
    },
    {
      image: secondproj,
      title: 'Butterfly Catching Game',
      description:
        'A real fun animated game that has 3 difficulty levels and bonus effect.',
      website: 'https://github.com/mistercapxx/ButterflyEffect.git',
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedWebsite, setSelectedWebsite] = useState('');

  const openOverlay = (image, title, description, website) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setSelectedWebsite(website);
    setOverlayVisible(true);

  };
  const closeOverlay = () => {
    setSelectedImage(null);
    setSelectedTitle('');
    setSelectedDescription('');
    setSelectedWebsite('');
    setOverlayVisible(false);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];
  ////to close modal 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if(cardRef.current && !cardRef.current.contains(event.target)) {
        closeOverlay();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return() => {
      document.removeEventListener('mousedown',handleClickOutside);
    }
  },[closeOverlay]);

  return (
    <div className="projects"> 
      <div className="projects-items desktop-view">
        {projects.map((project, index) => (
          <article
            key={index}
            className="projects-item"
            onClick={() =>
              openOverlay(
                project.image,
                project.title,
                project.description,
                project.website
              )
            }
          >
            <img src={project.image} />
            <div className="item-title">
              <h5>{project.title}</h5>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-items mobile-view">
        <button onClick={prevProject} className="nav-arrow left-arrow">
          ◀
        </button>
        <article
          className="projects-item"
          onClick={() =>
            openOverlay(
              currentProject.image,
              currentProject.title,
              currentProject.description,
              currentProject.website
            )
          }
        >
          <img className="proj-image" src={currentProject.image} />
          <div className="item-title">
            <h5>{currentProject.title}</h5>
          </div>
        </article>
        <button onClick={nextProject} className="nav-arrow right-arrow">
          ▶
        </button>
      </div>

      {overlayVisible && (
        <div className="overlay">
          <div className="card" ref={cardRef}>
            <img src={selectedImage} className="overlay-image" />
            {/* <span className="close-overlay" onClick={closeOverlay}>
            &times;
          </span> */}
            <div className="card-content">
              <h5>{selectedTitle}</h5>
              <h6>{selectedDescription}</h6>
              <div className="button-section">
                <a href={selectedWebsite} className="button-link">
                  <div className="button-content">
                    <span className="button-text">Repository</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CreativeVideos = () => {
  const videos = [
    <MyVideoComponent />,
    <MyVideoComponent2 />,
    <MyVideoComponent3 />,
    <MyVideoComponent4 />,
    <MyVideoComponent5 />,
    <MyVideoComponent6 />,
    <MyVideoComponent7 />,
    <MyVideoComponent8 />,
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="videos-desktop">
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
      </div>

      <div className="videos-mobile">
        <button onClick={prevVideo} className="nav-arrow left-arrow">
          ◀
        </button>
        <div className="video-container">{videos[currentVideoIndex]}</div>
        <button onClick={nextVideo} className="nav-arrow right-arrow">
          ▶
        </button>
      </div>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <button
        className="menu-button" 
        onClick={toggleMenu}>
          ☰
        </button>
        {menuOpen && (
        <div className={`menu ${menuOpen ? 'show' : ''}`}>
             <button className="mob-button" onClick={() => scrollToSection('home')}>
              Home
            </button>
            <button className="mob-button" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
            <button className="mob-button" onClick={() => scrollToSection('creativeVideos')}>
              Creative Videos
            </button>
            <button className="mob-button" onClick={() => scrollToSection('skills')}>
              Skills
            </button>
            <button className="mob-button" onClick={() => scrollToSection('contacts')}>
              Contacts
            </button>
            </div>
        )}
        <div className='buttons-container'>
          <button className="button" onClick={() => scrollToSection('home')}>
            Home
          </button>
          <button
            className="button"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className="button"
            onClick={() => scrollToSection('creativeVideos')}
          >
            Creative Videos
          </button>
          <button className="button" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button
            className="button"
            onClick={() => scrollToSection('contacts')}
          >
            Contacts
          </button>
        </div>
      </div>
      <div id="home" className="container">
        <div className="text">
          <div className="greeting-container">
            <Lottie className="waver" animationData={Waving} />
            <span className="greeting">Hello. I'm</span>
          </div>
          <br />
          <span className="name">Mister Cap</span>
          <br />
          <span className="details">[ Vladimir ]</span>
          <br />
          <br />
          <span className="role">&lt;&gt; Front-End Developer &lt;/&gt;</span>
          <br />
          <span className="role2">&lt;&gt; Content Maker &lt;/&gt;</span>
          <br />
        </div>
        <div className="animation">
          <Lottie animationData={Basket} />
        </div>
      </div>

      <div id="projects" className="projects-title">
        <span className="project_intro">Projects </span>
      </div>
      <Projects />

      <div id="creativeVideos" className="videos-title">
        <span className="video_intro">Creative Videos</span>
      </div>
      <CreativeVideos />
  
      <div id="skills" className="skills-title">
        <span className="skills_intro">Skills</span>
      </div>
      <div className="items">
        <div className="skills-item">
          <img src={htmllogo} />
          <h4>HTML 5</h4>
        </div>
        <div className="skills-item">
          <img src={csslogo} />
          <h4>CSS 3</h4>
        </div>
        <div className="skills-item">
          <img src={jslogo} />
          <h4>JavaScript</h4>
        </div>
        <div className="skills-item">
          <img src={reactlogo} />
          <h4>React</h4>
        </div>
        <div className="skills-item">
          <img src={reduxlogo} />
          <h4>Redux</h4>
        </div>
        <div className="skills-item">
          <img src={muilogo} />
          <h4>Material UI</h4>
        </div>
        <div className="skills-item">
          <img src={webpacklogo} />
          <h4>Webpack</h4>
        </div>
        <div className="skills-item">
          <img src={canvalogo} />
          <h4>Canva</h4>
        </div>
        <div className="skills-item">
          <img src={premierelogo} />
          <h4>Premiere Pro</h4>
        </div>
      </div>
      <div className="videos-title">
        <span id="contacts">Contacts</span>
      </div>
      <div className="contacts-items">
        <a
          href="https://www.instagram.com/mistercap_xx"
          title="Instagram"
          className="contacts_item"
        >
          <picture>
            <img className="contacts-img-insta" src={inst} />
          </picture>
        </a>
        <a
          href="https://github.com/mistercapxx"
          title="GitHub"
          className="contacts_item"
        >
          <picture>
            <img className="contacts-img-git" src={gith} />
          </picture>
        </a>
        <a
          href="https://www.linkedin.com/in/mistercapxx/"
          title="LinkedIn"
          className="contacts_item"
        >
          <picture>
            <img className="contacts-img-linkedin" src={linke} />
          </picture>
        </a>
        <a
          href="https://www.twitch.tv/mistercap_xx"
          title="Twitch"
          className="contacts_item"
        >
          <picture>
            <img className="contacts-img-ttv" src={ttv} />
          </picture>
        </a>
        <a
          href="https://t.me/paintitblvck"
          title="Telegram"
          className="contacts_item"
        >
          <picture>
            <img className="contacts-img-telega" src={telega} />
          </picture>
        </a>
      </div>
    </>
  );
}

export default App;
