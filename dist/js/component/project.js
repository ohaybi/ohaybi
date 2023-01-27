import projectData from "./../data/project-data.js";

const generateProject = () => {
  const feProjectList = document.getElementById("fe-project-list");
  const uiProjectList = document.getElementById("ui-project-list");
  const folderPath = "./dist/img/project";

  for (const data of projectData) {
    const getData = `
      <a id="${data.id}" href="${data.url}" target="_blank" class="group hover:scale-95 w-full aspect-[4/3] duration-700 ease-in-out rounded-t-xl overflow-hidden relative">
          <img src="${folderPath}/${data.img}" alt="${data.title}" class="duration-700 ease-in-out w-full h-full group-hover:scale-125 absolute"/>
          <h3 class="bg-gradient-to-t from-hitam-100 to-transparent text-base duration-700 ease-in-out md:text-2xl w-full font-normal group-hover:font-medium p-3 md:p-8 absolute bottom-0 left-0">${data.title}</h3>
          <h3 class="text-base duration-700 ease-in-out md:text-2xl fill-putih group-hover:fill-putih p-2 md:p-6 absolute opacity-0 group-hover:opacity-100 bottom-0 right-20 group-hover:right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" />
              </svg>
          </h3>
      </a>
  `;

    if (data.category === "fe") {
      feProjectList.innerHTML += getData;
    } else if (data.category === "ui") {
      uiProjectList.innerHTML += getData;
    }
  }
};

export default generateProject;
