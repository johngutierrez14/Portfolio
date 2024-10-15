const itemsPerPage = 3;
const workData = [
  {
    filter: "web",
    imgSrc: "assets/img/work-1.PNG",
    title: "COTA - CONSTRUCCIONES Y TALLER DE ARQUITECTURA S.A.S",
    category: "Innovación en Diseño y Construcción",
    description:
      "Desarrollé una página web interactiva usando HTML para la estructura, CSS para el diseño responsivo, y JavaScript para agregar interactividad. Implementé un menú dinámico, una galería de imágenes con animaciones. Utilicé event listeners y manipulación del DOM para mejorar la experiencia del usuario, optimizando el rendimiento y asegurando la compatibilidad en dispositivos móviles.",
    createdDate: "9 sept 2023",
    services: "html css",
    role: "frontend",
    viewLink: "https://cotasas.com/",
    viewName: "https://cotasas.com/"
  },
  {
    filter: "dashboard",
    imgSrc: "assets/img/Portada Logistica.webp",
    title: "Dashboard operaciones logisticas",
    category: "Visualizaciones con Power BI",
    description:
      "",
    createdDate: "14 nov 2023",
    services: "Power BI Desktop, Power Bi Services",
    role: "Data Analyst",
    viewLink: "",
    viewName: "Ver PDF",
  },
  {
    filter: "web",
    imgSrc: "assets/img/Logip.PNG",
    title: "LOGISTICAS & PROCESOS DEL CARIBE S.A.S",
    category: "Diseño de pagina web",
    description: "Es un sitio web creado en WordPress",
    createdDate: "14 nov 2023",
    services: "WordPress,",
    role: "Designer",
    viewLink: "https://logip.co/",
    viewName: "https://logip.co/",
  },
  {
    filter: "dashboard",
    imgSrc: "assets/img/Portada MIPRES.webp",
    title: "Integración de MIPRES con Power BI",
    category: "Dashboard",
    description: "En el proyecto de integración de MIPRES con Power BI, me conecté al webservice de MIPRES utilizando la API REST para acceder a los datos de prescripción en formato JSON. Gestioné estos archivos, transformando y limpiando los datos con Power Query para estructurarlos correctamente y permitir un análisis eficiente. Luego, establecí la conexión de los datos gestionados con Power BI para automatizar la actualización y visualización. A partir de esto, creé una serie de KPI y métricas clave, incluyendo el número de prescripciones emitidas, la tasa de aprobación de tratamientos y los tiempos promedio de respuesta. Finalmente, desarrollé dashboards interactivos que permitieron a los equipos de gestión analizar los datos de manera visual y tomar decisiones informadas basadas en indicadores de rendimiento y cumplimiento, mejorando significativamente la gestión y el monitoreo de los procesos en MIPRES.",
    createdDate: "agosto 2024",
    services: "APIRest, Power BI, Power Query, Python",
    role: "Developer",
    viewLink: "assets/docs/Proyecto MIPRES.pdf",
    viewName: "Ver PDF",
  },
  {
    filter: "Aplicaciones",
    imgSrc: "assets/img/AppLogip.png",
    title: "App a",
    category: "Appsheet",
    description: "Desarrollé una aplicación a medida en AppSheet para Logip, enfocada en la gestión integral de servicios logísticos, recursos humanos y mantenimiento de equipos. La aplicación permite a los usuarios registrar y rastrear solicitudes de servicios logísticos, gestionar la asignación de personal y recursos, y programar el mantenimiento de equipos de manera eficiente.",
    createdDate: "agosto 2023",
    services: "Appsheet, Google Sheet, Power BI",
    role: "Developer",
    viewLink: "",
    viewName: "Ver PDF",
  },

  // Puedes agregar más objetos de trabajo aquí si es necesario
];

const workContainer = document.getElementById("work-container");
const paginationContainer = document.getElementById("pagination");

function createWorkElement(work) {
  const workCard = document.createElement("div");
  workCard.innerHTML = `
    <div class="work_card mix ${work.filter}">
      <img src="${work.imgSrc}" alt="" class="work_img" />
      <h3 class="work_title">${work.title}</h3>
      <span class="work_button">Demo <i class="uil uil-arrow-right work_button-icon"></i></span>
      <div class="portfolio_item-details">
        <h3 class="details_title">${work.category}</h3>
        <p class="details_description">${work.description}</p>
        <ul class="details_info">
          <li>Created - <span>${work.createdDate}</span></li>
          <li>Services - <span>${work.services}</span></li>
          <li>Role - <span>${work.role}</span></li>
          <li>View - <span><a href="${work.viewLink}" target="_blank">${work.viewName}</a></span></li>
        </ul>
      </div>
    `;
  return workCard;
}

function displayPage(page) {
  workContainer.innerHTML = "";
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedWork = workData.slice(startIndex, endIndex);

  displayedWork.forEach((work) => {
    const workElement = createWorkElement(work);
    workContainer.appendChild(workElement);
  });
}

function createPagination() {
  const totalPages = Math.ceil(workData.length / itemsPerPage);
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("span");
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => displayPage(i));
    paginationContainer.appendChild(pageButton);
  }
}

displayPage(1);
createPagination();
