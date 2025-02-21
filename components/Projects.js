import React from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div className="projects">
            <h2>我的项目</h2>
            <div className="project-cards">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>技术栈:</strong> {project.techStack.join(', ')}</p>
                        <p><strong>成果:</strong> {project.results}</p>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">查看演示</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;