import React from 'react';

export default function Project(props) {

    return (
        <div class="project">
            <header>
                <a href={props.html_url} target="_blank" rel="noreferrer">{props.name}</a>
            </header>
            <a href={props.url_deploy_link} target="_blank" rel="noreferrer">
                <div class="image-div">
                    <img src={props.url_image} alt={props.name} />
                </div>
            </a>
        </div>
    )
}