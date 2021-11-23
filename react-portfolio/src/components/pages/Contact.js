import React from 'react';
import linkedinLogo from '../../assets/images/linkedin-logo.png';
import githubLogo from '../../assets/images/github-logo.png';
import mailLogo from '../../assets/images/mail-logo.png';
import cvLogo from '../../assets/images/cv-logo.png';
import resume from '../../assets/resume/resume_andresliu.pdf';
import Form from '../Form'

export default function Contact() {
    return (
        <main>
            
            <section id="contact" class="section contact">
            <h2>Contact me</h2>
            <Form />
            <article>
                <a href="https://www.linkedin.com/in/andresliu22" target="_blank" rel="noreferrer">
                    <div class="contact-div">
                        <img src={linkedinLogo} alt="linkedin-logo" />
                    </div>
                </a>
                <a href="https://github.com/andresliu22" target="_blank" rel="noreferrer">
                    <div class="contact-div">
                        <img src={githubLogo} alt="github-logo" />
                    </div>
                </a>
                <a href="mailto:andres.liu22@gmail.com?subject=Mail from Website" target="_blank" rel="noreferrer">
                    <div class="contact-div">
                        <img src={mailLogo} alt="mail-logo" />
                    </div>
                </a> 
                <a href={resume} target="_blank" rel="noreferrer">
                    <div class="contact-div">
                        <img src={cvLogo} alt="cv-logo" />
                    </div>
                </a>
            </article>
        </section>
        </main>
    );
}