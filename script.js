const translations = {
  en: {
    welcome: "Turning Data into Insights",
    subtitle: "Data Analyst | ML Enthusiast | Portfolio",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    "about-title": "About Me",
    "about-text": "Hello! I'm Oksana, passionate about data, machine learning and creating insights through analytics.",
    "projects-title": "My Projects",
    proj1: "Interactive dashboard for sales analytics.",
    proj2: "Machine learning model predicting delivery times.",
    proj3: "Exploring data stories through charts and graphs.",
    "contact-title": "Contact"
  },
  ru: {
    welcome: "Преобразую данные в инсайты",
    subtitle: "Аналитик данных | Энтузиаст ML | Портфолио",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",
    "about-title": "Обо мне",
    "about-text": "Привет! Я Оксана, увлечена данными, машинным обучением и созданием инсайтов с помощью аналитики.",
    "projects-title": "Мои проекты",
    proj1: "Интерактивный дашборд для анализа продаж.",
    proj2: "Модель машинного обучения для прогнозирования доставки.",
    proj3: "Визуализация данных через графики и диаграммы.",
    "contact-title": "Контакты"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
