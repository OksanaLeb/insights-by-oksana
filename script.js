const translations = {
  en: {
    welcome: "Turning Data into Insights",
    subtitle: "Data Analyst | ML Enthusiast | Portfolio",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    portfolio: "Portfolio",

    // About section
    "about-title": "About Me",
    "about-photo-caption": "Data • ML • Dashboards",
    "about-p1": "Hi, I’m Oksana 👋 — a data enthusiast with a unique background. I’ve spent years working in aviation, where precision, teamwork, and problem-solving are crucial. Now, I’m channeling that experience into Data Analytics and Machine Learning.",
    "about-p2": "I love transforming raw numbers into clear insights and visual stories. My portfolio showcases projects in SQL, Python, Machine Learning and Power BI dashboards that bring data to life.",
    "about-p3": "My goal is simple: to use data to answer real-world questions and help people and businesses make smarter decisions.",

    // About highlights
    "about-hi-1": "SQL • Python • Power BI",
    "about-hi-2": "Machine Learning basics",
    "about-hi-3": "Clear, business-focused insights",

    // About buttons
    "about-btn-contact": "Contact me",
    "about-btn-portfolio": "View Portfolio →",

    // Projects
    "projects-title": "My Projects",
    proj1: "Interactive dashboard for sales analytics.",
    proj2: "Machine learning model predicting delivery times.",
    proj3: "Exploring data stories through charts and graphs.",

    // Contact
    "contact-title": "Contact"
  },
  ru: {
    welcome: "Преобразую данные в инсайты",
    subtitle: "Аналитик данных | Энтузиаст ML | Портфолио",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",
    portfolio: "Портфолио",

    // About section
    "about-title": "Обо мне",
    "about-photo-caption": "Данные • ML • Дашборды",
    "about-p1": "Привет! Я Оксана 👋 — энтузиаст данных с уникальным опытом. Несколько лет я работала в авиации, где важны точность, командная работа и умение решать задачи. Теперь я направляю этот опыт в сферу аналитики данных и машинного обучения.",
    "about-p2": "Мне нравится превращать сухие цифры в понятные инсайты и визуальные истории. В моём портфолио есть проекты по SQL, Python, машинному обучению и дашборды в Power BI, которые делают данные наглядными.",
    "about-p3": "Моя цель проста: использовать данные, чтобы отвечать на реальные вопросы и помогать людям и бизнесу принимать умные решения.",

    // About highlights
    "about-hi-1": "SQL • Python • Power BI",
    "about-hi-2": "Базовые модели ML",
    "about-hi-3": "Понятные, прикладные инсайты",

    // About buttons
    "about-btn-contact": "Связаться",
    "about-btn-portfolio": "Перейти в портфолио →",

    // Projects
    "projects-title": "Мои проекты",
    proj1: "Интерактивный дашборд для анализа продаж.",
    proj2: "Модель машинного обучения для прогнозирования доставки.",
    proj3: "Визуализация данных через графики и диаграммы.",

    // Contact
    "contact-title": "Контакты"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Авто-определение языка при первой загрузке
window.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.startsWith("ru") ? "ru" : "en";
  setLang(userLang);
});
