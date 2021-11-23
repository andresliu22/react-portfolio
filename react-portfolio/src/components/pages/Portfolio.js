import React, { useEffect, useState } from 'react';
import Project from '../Project';
import API from '../utils/API';

export default function Portfolio(){

    const [result, setResult] = useState([]);

    const getAllRepos = () => 
        API.getRepos()
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                const repo = res.data[i];
                
                const repoName = repo.name.replaceAll("-", " ");
                const name = repoName.slice(0, 1).toUpperCase() + repoName.slice(1);
                // const url_name = repo.name;
                // const url_github = repo.html_url;
                const url_image =`https://raw.githubusercontent.com/andresliu22/${repo.name}/main/assets/images/site-img.PNG`;
                
                let url_deploy_link;
                if (repo.name === "haunted-forum") {
                    url_deploy_link = "https://warm-springs-18820.herokuapp.com/";
                } else if (repo.name === "tech-blog") {
                    url_deploy_link = "https://andresliu-tech-blog.herokuapp.com/"
                } else if (repo.name === "note-taker") {
                    url_deploy_link = "https://andresliu-note-taker.herokuapp.com/"
                } else {
                    url_deploy_link =`https://andresliu22.github.io/${repo.name}`;
                }

                res.data[i].repoName = name;
                res.data[i].url_image = url_image;
                res.data[i].url_deploy_link = url_deploy_link;

            }
            setResult(res.data);
        })
        .catch((err) => console.log(err));
    
    useEffect(() => {
        getAllRepos();
    }, []);

    return (
        <main>
            <section id="work" class="section work">
                <h2>My Work</h2>
                <article id="work-repos">
                    {result.map(repo => (
                        repo.stargazers_count > 0 && (
                            // <div class="project">
                            //     <header>
                            //         <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                            //     </header>
                            //     <a href={repo.url_deploy_link} target="_blank" rel="noreferrer">
                            //         <div class="image-div">
                            //             <img src={repo.url_image} alt={repo.url_name} />
                            //         </div>
                            //     </a>
                            // </div>
                            <Project name={repo.name} html_url={repo.html_url} url_deploy_link={repo.url_deploy_link} url_image={repo.url_image} />
                        )
                    ))}
                </article>
            </section>         
        </main>
    );
};