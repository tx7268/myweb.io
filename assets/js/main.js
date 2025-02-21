// main.js 文件内容

document.addEventListener("DOMContentLoaded", function() {
    // 初始化个人信息
    loadAboutSection();
    // 初始化项目展示
    loadProjects();
    // 初始化技能展示
    loadSkills();
    // 初始化联系方式
    loadContact();

    // 初始化全屏滚动
    new fullpage('#fullpage', {
        navigation: true,
        scrollingSpeed: 700,
        afterLoad: function(origin, destination, direction) {
            destination.item.classList.add('active');
        },
        onLeave: function(origin, destination, direction) {
            origin.item.classList.remove('active');
            // 更新导航栏活动状态
            updateActiveNav(destination.anchor);
        }
    });

    // 技能交互
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            const progress = item.querySelector('.progress');
            const value = progress.dataset.value;

            // 移除其他技能的active状态
            document.querySelectorAll('.skill-details.active').forEach(el => {
                if (el !== item.querySelector('.skill-details')) el.classList.remove('active');
            });

            // 切换当前技能的状态
            item.querySelector('.skill-details').classList.toggle('active');
            if (item.querySelector('.skill-details').classList.contains('active')) {
                progress.style.width = `${value}%`;
            } else {
                progress.style.width = '0';
            }

            item.querySelector('.progress-text').textContent = `${value}%`;
        });
    });

    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 平滑滚动到指定部分
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').slice(1);
            fullpage_api.moveTo(sectionId);
        });
    });
});

// 更新导航栏活动状态
function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === sectionId) {
            link.classList.add('active');
        }
    });
}

function loadAboutSection() {
    // 这里可以添加代码来动态加载个人信息
}

function loadProjects() {
    // 这里可以添加代码来动态加载项目卡片
}

function loadSkills() {
    // 这里可以添加代码来动态加载技能可视化
}

function loadContact() {
    // 这里可以添加代码来动态加载联系方式
}