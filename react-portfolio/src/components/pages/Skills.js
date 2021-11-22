import React from 'react';
import htmlLogo from '../../assets/images/html-logo.png';
import angularLogo from '../../assets/images/angular-logo.png';
import cssLogo from '../../assets/images/css-logo.png';
import reactLogo from '../../assets/images/react-logo.png';
import javascriptLogo from '../../assets/images/javascript-logo.png';
import xcodeLogo from '../../assets/images/xcode-logo.png';
import swiftLogo from '../../assets/images/swift-logo.png';
import sqlLogo from '../../assets/images/sql-logo.png';

export default function Skills() {
    return (
        <main>
            <section id="skills" class="section skills">
            <h2>Skills</h2>
            <article>
                <div class="skill">
                    <img src={htmlLogo} alt="html-logo" />
                </div>
                <div class="skill">
                    <img src={angularLogo} alt="angular-logo" />
                </div>
                <div class="skill">
                    <img src={cssLogo} alt="css-logo" />
                </div>
                <div class="skill">
                    <img src={reactLogo} alt="react-logo" />
                </div>
                <div class="skill">
                    <img src={javascriptLogo} alt="javascript-logo" />
                </div>
                <div class="skill">
                    <img src={xcodeLogo} alt="xcode-logo" />
                </div>
                <div class="skill">
                    <img src={swiftLogo} alt="swift-logo" />
                </div>
                <div class="skill">
                    <img src={sqlLogo} alt="sql-logo" />
                </div>
            </article>
        </section>
        </main>
    );
}