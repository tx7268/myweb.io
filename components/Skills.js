import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
    return (
        <div className="skills">
            <h2>技能</h2>
            <div className="skills-list">
                {skillsData.map((skill) => (
                    <div key={skill.name} className="skill-item">
                        <h3>{skill.name}</h3>
                        <div className="skill-progress" style={{ width: `${skill.proficiency}%` }}>
                            {skill.proficiency}%
                        </div>
                    </div>
                ))}
            </div>
            <div className="tools-icons">
                {/* 这里可以添加工具图标 */}
            </div>
        </div>
    );
};

export default Skills;