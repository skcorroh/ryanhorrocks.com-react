import "./personalInfo.css";
import portait from "../../../assets/images/Family Portrait.jpg";
import CodeSnippet from "./CodeSnippet";
import { useEffect, useState } from "react";


export default function PersonalInfo() {


    return (
        <>
        <div className="personal-info uk-card uk-card-default uk-card-small uk-box-shadow-large"
            uk-sticky="bottom:true; offset: 30px;">
            <div className="uk-card-media-top uk-card-header uk-padding-remove">
                <img src={portait} alt="" />
            </div>
            <div className="uk-card-body uk-text-center">

                <h1 className="uk-card-title uk-text-bold uk-text-uppercase uk-margin-remove-bottom">Ryan
                    Horrocks</h1>
                <h2 className="uk-text-meta  uk-margin-remove">Front-End Web Developer</h2>
                <h3 className="uk-text-meta  uk-margin-remove">Utah, USA</h3>
                <p>Making the web a cooler place, one site at a time, since 2013.</p>
            </div>
            <div className="uk-card-media-bottom uk-card-footer uk-padding-remove">
                <CodeSnippet />
            </div>
            <div className="uk-card-footer uk-text-center" uk-margin="">
                <a href="https://www.linkedin.com/in/ryanlhorrocks/" target="_blank" rel="noreferrer"
                    className="uk-icon-button" uk-icon="icon: linkedin"
                    uk-tooltip="View my LinkedIn Profile"><span hidden>View LinkedIn</span></a>
                <a href="https://github.com/skcorroh" target="_blank" rel="noreferrer"
                    className="uk-icon-button" uk-icon="icon: github"
                    uk-tooltip="Check out my GitHub"><span hidden>View GitHub</span></a>
                <a href="mailto:admin@ryanhorrocks.com" className="uk-icon-button"
                    uk-icon="icon: mail" uk-tooltip="Better than snail mail, amirite?"><span hidden>Email Me</span></a>
                <a href="tel:8015483563" className="uk-icon-button" uk-icon="icon: phone"
                    uk-tooltip="Pick up that phone like it's 1997!"><span hidden>Call Me</span></a>
            </div>
        </div>
        <RandomJoke />
        </>
    );
}


const RandomJoke = () => {
    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single')
            .then(response => response.json())
            .then(data => { console.log(data); setJoke(data) })
    }, [])
    const [joke, setJoke] = useState(false);
    return (
        <>
            {(joke && !joke.error && joke.id !== 28 && joke.joke) &&
                <div className="uk-card uk-card-default uk-card-small uk-card-body sidebar-mt uk-animation-scale-up">
                    <p className="uk-text-bold uk-margin-remove-bottom uk-text-small">Programming Joke of the day</p>
                    <div className="uk-text-meta">{joke.joke.split('\n').map((e,i)=> <span key={`idkmbffj${i}`}>{e}<br/></span> )}</div>
                    <hr className="uk-margin-remove-bottom uk-margin-small-top" />
                    <p className="uk-margin-remove uk-text-small" style={{fontSize: "10px"}}><span style={{fontSize: "inherit"}} className="uk-text-meta">Brought to you by</span> <a className="uk-link" href="https://github.com/Sv443/JokeAPI" target="_blank" role="noreferrer">Free Joke API</a></p>
                </div>
            }
        </>
    );
}