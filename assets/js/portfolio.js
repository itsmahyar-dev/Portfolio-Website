// portfolio.js - Project data and pagination logic

// Project data - all your projects in an array
const projectsData = [
  {
    id: 1,
    category: "personal",
    link: " http://vikaskoledev.vercel.app/",
    image: "./assets/images/project-1.png",
    title: "<b style=\"color:font-weight: bold;\">Portfolio Website</b>",
    description: "- Portfolio Development.<br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> In progress.",
    alt: "Portfolio-Website",
  },
  {
    id: 2,
    category: "personal",
    link: "https://github.com/GHOSTs-OCTOPUS/Online-Doctor-Appointment-System",
    image: "./assets/images/project-2.png",
    title: "<b style=\"color:font-weight: bold;\">Online Doctor's Appointment System.</b>",
    description: "- Web Application<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "doctor-appointment-system",
  },
  {
    id: 3,
    category: "personal",
    link: "https://github.com/GHOSTs-OCTOPUS/APPLICATION-OF-BANK-MANAGEMENT-SYSTEM-USING-C-LANG",
    image: "./assets/images/project-5.png",
    title: "<b style=\"color:font-weight: bold;\">Application-Of-Bank-Management-System-Using-C-Lang.</b>",
    description: "- Application<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "bank-system",
  },
  {
    id: 4,
    category: "personal",
    link: "https://ghosts-octopus.github.io/Typing-Speed-Test/",
    image: "./assets/images/project-12.png",
    title: "<b style=\"color:font-weight: bold;\">Typing-Speed-Test</b>",
    description: "- Web Application<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Typing-Speed-Test",
  },
  {
    id: 5,
    category: "client",
    link: "https://github.com/GHOSTs-OCTOPUS/Loan-Status-Prediction-Using-SVM-",
    image: "./assets/images/project-3.png",
    title: "<b style=\"color:font-weight: bold;\">Loan-Status-Prediction-Using-SVM</b>",
    description: "- Web Applications<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Loan-Status-Prediction-Using-SVM",
  },
  {
    id: 6,
    category: "client",
    link: "https://github.com/GHOSTs-OCTOPUS/LMS-Library-Management-System-master",
    image: "./assets/images/project-9.png",
    title: "<b style=\"color:font-weight: bold;\">Library-Management-System</b>",
    description: "- Desktop Application<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed",
    alt: "LMS-Library-Management-System-master",
  },
  {
    id: 7,
    category: "client",
    link: "https://github.com/GHOSTs-OCTOPUS/CLIENT01_secure-cookie-reporting-webpage-project",
    image: "./assets/images/project-10.jpg",
    title: "<b style=\"color:font-weight: bold;\">Secure-Cookie-Reporting-Webpage-Project</b>",
    description: "- Web Applications<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "secure-cookie-reporting-webpage-project",
  },
  {
    id: 8,
    category: "client",
    link: "https://madhurianalytics.vercel.app/",
    image: "./assets/images/project-11.jpg",
    title: "<b style=\"color:font-weight: bold;\">Big-data-analyst-profile</b>",
    description: "- Portfolio<br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Big-data-analyst",
  },
  {
    id: 9,
    category: "client",
    link: "https://github.com/GHOSTs-OCTOPUS/2FA-Authentication-Application",
    image: "./assets/images/2FA Authentication Application.jpg",
    title: "<b style=\"color:font-weight: bold;\">2FA Authentication Application</b>",
    description: "- Web development<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "2FA Authentication Application",
  },
  {
    id: 10,
    category: "client",
    link: "https://github.com/GHOSTs-OCTOPUS/Logo-Design-Work",
    image: "./assets/images/Logo Design Work.png",
    title: "<b style=\"color:font-weight: bold;\">Logo-Designs</b>",
    description: "- Logo Design Work<br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Logo Design Work",
  },
  {
    id: 11,
    category: "client",
    link: "https://ui-ux-design-work.vercel.app/",
    image: "./assets/images/UI UX Designer.png",
    title: "<b style=\"color:font-weight: bold;\">UI|UX Design</b>",
    description: "- UI-UX-Design-Work<br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "UI-UX Design Work",
  },
  {
    id: 12,
    category: "client",
    link: "https://github.com/GHOSTs-OCTOPUS/Content-Writing-Work",
    image: "./assets/images/Content Writer.png",
    title: "<b style=\"color:font-weight: bold;\">Content-Writing</b>",
    description: "- Content-Writing-Work<br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Content Writing Work",
  },
  {
    id: 13,
    category: "other",
    link: "https://github.com/GHOSTs-OCTOPUS/Phonebook-C-Project",
    image: "./assets/images/project-4.JPG",
    title: "<b style=\"color:font-weight: bold;\">Phonebook-C-Project</b>",
    description: "- Application<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "phonebook",
  },
  {
    id: 14,
    category: "other",
    link: "https://ghosts-octopus.github.io/Tetris-Game/",
    image: "./assets/images/project-6.png",
    title: "<b style=\"color:font-weight: bold;\">Tetris-Game</b>",
    description: "- Web Game<br /><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Tetris-Game",
  },
  {
    id: 15,
    category: "other",
    link: "https://github.com/GHOST-OCTOPUS/keylogger",
    image: "./assets/images/project-8.jpg",
    title: "<b style=\"color:font-weight: bold;\">keylogger</b>",
    description: "- Security Tool<br/> <b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "keylogger",
  },
  
  {
    id: 16,
    category: "personal",
    link: "https://beautyzone-two.vercel.app/",
    image: "./assets/images/BeautyZone.png",
    title: "<b style=\"color:font-weight: bold;\">Beauty-Zone</b>",
    description:
      "- Demo Template for Beauty Parlour & Makeup Service <br/> <b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Beauty-Zone",
  },
  {
    id: 17,
    category: "personal",
    link: "https://demo-e-store-website.vercel.app/",
    image: "./assets/images/E-Commerce Platform.png",
    title: "<b style=\"color:font-weight: bold;\">E-Commerce Platform</b>",
    description: "- Demo Template for Online Store <br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "E-Commerce Platform",
  },
  {
    id: 18,
    category: "personal",
    link: "https://eflyer-e-store-website.vercel.app/",
    image: "./assets/images/Eflyer-e-store-website.png",
    title: "<b style=\"color:font-weight: bold;\">E-Flyer</b>",
    description: "- Demo Template for Online Store <br/> <b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "E-Flyer",
  },
  {
    id: 19,
    category: "personal",
    link: "https://fitness-club-landingpage.vercel.app/",
    image: "./assets/images/Gym-Landingpage.png",
    title: "<b style=\"color:font-weight: bold;\">Fitness-Club</b>",
    description: "- Demo Template for Fitness Club <br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Fitness-Club",
  },
  {
    id: 20,
      category: "personal",
      link: "https://ice-cream-parlours.vercel.app/",
      image: "./assets/images/Ice-Cream-Parler.png",
      title: "<b style=\"color:font-weight: bold;\">Ice-Cream-Parlours</b>",
      description: "- Demo Template for Ice Cream Parlours <br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
      alt: "Ice-Cream-Parlours",
  },
  {
    id: 21,
    category: "personal",
    link: "https://interior-design-marketing-agency.vercel.app/",
    image: "./assets/images/Interior-Designer-Marketing-Agency.png",
    title: "<b style=\"color:font-weight: bold;\">Interior-Designer-Marketing-Agency</b>",
    description: "- Demo Template for Interior Design Marketing Agency <br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Interior-Designer-Marketing-Agency",
  },
  {
    id: 22,
    category: "personal",
    link: "https://lighten-online-shop.vercel.app/",
    image: "./assets/images/Lighten-Online-Shop.png",
    title: "<b style=\"color:font-weight: bold;\">Lighten-Online-Shop</b>",
    description: "- Demo Template for Online Store <br/><b style=\"color: var(--orange-yellow-crayola); font-weight: bold;\"> ‣ Status:</b> Completed.",
    alt: "Lighten-Online-Shop",
  }
];

// Pagination settings
const projectsPerPage = 6;
let currentPage = 1;
let currentFilter = "all";
let filteredProjects = [...projectsData];

// DOM elements (will be initialized when DOM is loaded)
let projectList, paginationInfo, startItem, endItem, totalItems;
let prevBtn, nextBtn, paginationNumbers, paginationContainer;

// Initialize when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM elements
  projectList = document.getElementById("projectList");
  paginationInfo = document.getElementById("paginationInfo");
  startItem = document.getElementById("startItem");
  endItem = document.getElementById("endItem");
  totalItems = document.getElementById("totalItems");
  prevBtn = document.getElementById("prevBtn");
  nextBtn = document.getElementById("nextBtn");
  paginationNumbers = document.getElementById("paginationNumbers");
  paginationContainer = document.getElementById("paginationContainer");

  // Initialize the portfolio
  renderProjects();
  setupPagination();
  setupFilterButtons();

  // Also setup mobile filter select
  setupFilterSelect();
});

// Render projects for current page
function renderProjects() {
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const pageProjects = filteredProjects.slice(startIndex, endIndex);

  // Clear project list
  projectList.innerHTML = "";

  // Add projects for current page
  pageProjects.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.className = "project-item active";
    projectItem.setAttribute("data-filter-item", "");
    projectItem.setAttribute("data-category", project.category);

    projectItem.innerHTML = `
      <a href="${project.link}" target="_blank">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.alt}" loading="lazy"/>
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.description}</p>
      </a>
    `;

    projectList.appendChild(projectItem);
  });

  // Update pagination info
  updatePaginationInfo();

  // Show/hide pagination based on number of projects
  if (filteredProjects.length <= projectsPerPage) {
    paginationContainer.style.display = "none";
  } else {
    paginationContainer.style.display = "block";
  }
}

// Update pagination information
function updatePaginationInfo() {
  const total = filteredProjects.length;
  const start = (currentPage - 1) * projectsPerPage + 1;
  const end = Math.min(currentPage * projectsPerPage, total);

  startItem.textContent = start;
  endItem.textContent = end;
  totalItems.textContent = total;

  // Update button states
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(total / projectsPerPage);

  // Update page numbers
  renderPageNumbers();
}

// Render page number buttons
function renderPageNumbers() {
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  paginationNumbers.innerHTML = "";

  if (totalPages <= 1) return;

  // Always show first page
  addPageNumber(1);

  // Show ellipsis if needed
  if (currentPage > 3) {
    const ellipsis = document.createElement("span");
    ellipsis.className = "pagination-ellipsis";
    ellipsis.textContent = "...";
    paginationNumbers.appendChild(ellipsis);
  }

  // Show pages around current page
  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    if (i !== 1 && i !== totalPages) {
      addPageNumber(i);
    }
  }

  // Show ellipsis if needed
  if (currentPage < totalPages - 2) {
    const ellipsis = document.createElement("span");
    ellipsis.className = "pagination-ellipsis";
    ellipsis.textContent = "...";
    paginationNumbers.appendChild(ellipsis);
  }

  // Always show last page if there is more than one page
  if (totalPages > 1) {
    addPageNumber(totalPages);
  }
}

// Add a page number button
function addPageNumber(pageNumber) {
  const pageBtn = document.createElement("button");
  pageBtn.className = "pagination-number";
  if (pageNumber === currentPage) {
    pageBtn.classList.add("active");
  }
  pageBtn.textContent = pageNumber;
  pageBtn.addEventListener("click", () => {
    currentPage = pageNumber;
    renderProjects();
  });
  paginationNumbers.appendChild(pageBtn);
}

// Setup pagination controls
function setupPagination() {
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProjects();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderProjects();
    }
  });
}

// Setup filter buttons
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      applyFilter(filter);

      // Update active state of filter buttons
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Update mobile filter select value
      updateFilterSelectValue(filter);
    });
  });
}

// Setup mobile filter select
function setupFilterSelect() {
  const filterSelect = document.querySelector(".filter-select");
  const selectValue = document.querySelector(".select-value");
  const selectList = document.querySelector(".select-list");

  if (filterSelect && selectValue && selectList) {
    // Toggle select list
    filterSelect.addEventListener("click", () => {
      selectList.classList.toggle("active");
    });

    // Close select when clicking outside
    document.addEventListener("click", (e) => {
      if (!filterSelect.contains(e.target)) {
        selectList.classList.remove("active");
      }
    });

    // Handle select item clicks
    const selectItems = selectList.querySelectorAll(".select-item button");
    selectItems.forEach((item) => {
      item.addEventListener("click", () => {
        const filter = item.getAttribute("data-filter");
        applyFilter(filter);
        updateFilterSelectValue(filter);

        // Update active state in filter buttons
        const filterButtons = document.querySelectorAll("[data-filter-btn]");
        filterButtons.forEach((b) => {
          b.classList.remove("active");
          if (b.getAttribute("data-filter") === filter) {
            b.classList.add("active");
          }
        });

        // Close select list
        selectList.classList.remove("active");
      });
    });
  }
}

// Update mobile filter select display value
function updateFilterSelectValue(filter) {
  const selectValue = document.querySelector(".select-value");
  if (!selectValue) return;

  let displayText = "Select category";
  switch (filter) {
    case "all":
      displayText = "All";
      break;
    case "personal":
      displayText = "Personal Project";
      break;
    case "client":
      displayText = "Freelancer Project";
      break;
    case "other":
      displayText = "Other";
      break;
  }

  selectValue.textContent = displayText;
}

// Apply filter to projects
function applyFilter(filter) {
  currentFilter = filter;
  currentPage = 1;

  // Filter projects
  if (filter === "all") {
    filteredProjects = [...projectsData];
  } else {
    filteredProjects = projectsData.filter(
      (project) => project.category === filter,
    );
  }

  // Render filtered projects
  renderProjects();
}

// Export functions if needed for other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    projectsData,
    projectsPerPage,
    renderProjects,
    applyFilter,
  };
}
