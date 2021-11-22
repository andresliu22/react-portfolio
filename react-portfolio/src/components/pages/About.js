import React from 'react';
import '../../styles/Style.css';
import profilePicture from '../../assets/images/profile-picture.jpg';

export default function About() {
  return (
    <main>
      <h1>Hi, Welcome to my Website!</h1>
        <section id="about" class="section about">
            <h2>About me</h2>
            <article>
                <div class="myPhoto">
                    <img src={profilePicture} alt="my-profile" />
                </div>
                <div class="description">
                    <p>
                        Hi again! My name is Andres Liu, and I am a Full-stack Web Developer. 
                        I have a diverse set of skills, such as HTML, CSS, Javascript, React, 
                        Angular and NodeJS, and some iOS developing too using Xcode and Swift.
                        I'm proactive, self-taught and a quick learner and have the key soft skills 
                        needed to succeed: great communication, excellent teamwork and an outstanding leadership.
                    </p>
                </div>
            </article>
        </section>
    </main>
  );
}
