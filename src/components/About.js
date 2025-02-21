import React from 'react';

const About = () => {
    return (
        <div className="about">
            <img src="path/to/avatar.jpg" alt="个人头像" className="avatar" />
            <h1 className="name">你的姓名</h1>
            <h2 className="profession-tags">全栈开发者 | UI/UX设计师</h2>
            <p className="introduction">
                我是一名热衷于技术的全栈开发者，拥有丰富的项目经验和设计背景。我相信用户体验是产品成功的关键，致力于创造高质量的数字产品。我的目标是通过技术和设计的结合，解决实际问题并提升用户满意度。
            </p>
        </div>
    );
};

export default About;