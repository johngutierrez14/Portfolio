const itemsPerPage = 3;
const workData = [
  {
    filter: "app",
    imgSrc: "assets/img/work-1.PNG",
    title: "COTA - CONSTRUCCIONES Y TALLER DE ARQUITECTURA S.A.S",
    category: "Innovación en Diseño y Construcción",
    description:
      "Profesionales experimentados en construcción y diseño de espacios comerciales. Transformamos entornos con creatividad y eficiencia desde 2023, creando oportunidades en la industria de la edificación.",
    createdDate: "9 sept 2023",
    services: "html css",
    role: "frontend",
    viewLink: "https://cotasas.com/",
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
          <li>View - <span><a href="${work.viewLink}">${work.viewLink}</a></span></li>
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
