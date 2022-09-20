import React from 'react'

export default function SkillsBar() {
    return (
        <div className="skills_buttons">
            <div className="skills_button_section">
                <h2>Structure | Design | Development</h2>
                <div className="skills_span">                
                    <span className="html">HTML5</span>
                    <span className="css">CSS3</span>
                    <span className="css">SASS</span>
                    <span className="css">ES6</span>
                    <span className="flexbox">FlexBox</span> 
                    <span className="typescript">TypeScript</span> 
                    <span className="material">Material-UI</span> 
                </div>                            
            </div>

            <div className="skills_button_section">
                <h2>Full-Stack Application</h2>
                <div className="skills_span">                    
                    <span className="mongo">MongoDB</span>
                    <span className="express">ExpressJS</span> 
                    <span className="react">ReactJS</span>                                    
                    <span className="node">NodeJS</span>
                </div>    
            </div>

            <div className="skills_button_section">
                <h2>State Management</h2>
                <div className="skills_span">                    
                    <span className="mongo">Redux</span>
                    <span className="express">ContextAPI</span> 
                    <span className="react">Redux Persist</span>                                    
                    <span className="node">useRef</span>
                </div>    
            </div>            

            <div className="skills_button_section">
                <h2>Deployment</h2>
                <div className="skills_span">                
                    <span className="githubpages">gitHub Pages</span> 
                    <span className="heroku">Heroku</span> 
                    <span className="docker">Docker</span> 
                </div>    
            </div>

            <div className="skills_button_section">
            <h2>API Services | Data Management</h2>
            <div className="skills_span">                
                <span className="html">Firebase</span>
                <span className="html">MongoDB</span> 
                <span className="html">GraphQL</span> 
            </div>    
            </div>

            <div className="skills_button_section">
            <h2>Testing | CI/CD | Automation</h2>
            <div className="skills_span">                
                <span className="jest">Jest</span>
                <span className="github">gitHub</span>
                <span className="github">Jenkins</span>
            </div>     
            </div>            

        </div>
    )
}
