import React from 'react';
import githubLogo from '../assets/images/github-logo.png';

export default function Project(props) {
    return (
        <div class="project">
            <header>
                <a href={props.html_url} target="_blank" rel="noreferrer">{props.repoName} <img class="github-link-logo" src={githubLogo} alt="github-logo" /></a>
            </header>
            <a href={props.url_deploy_link} target="_blank" rel="noreferrer">
                <div class="image-div">
                    <img src={props.url_image} alt={props.name} />
                </div>
            </a>
        </div>
    )
}