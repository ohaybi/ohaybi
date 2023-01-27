import freebieData from "./../data/freebie-data.js";

const generateFreebies = () => {
  const freebiesList = document.getElementById("freebies-list");
  const freebiesCount = document.getElementById("freebies-count");
  const count = freebiesCount.getAttribute("aria-count");
  const folderPath = "./dist/img/freebies";
  let i = 0;
  let delay = 0;

  for (const data of freebieData) {
    freebiesList.innerHTML += `
        <a id=${data.id} href="${data.url}" target="_blank" class="relative hover:scale-95 duration-500 ease-in-out">
            <img src="${folderPath}/${data.img}" alt="${data.title}" class="rounded-2xl" />
        </a>
    `;
    delay += 100;
    i++;
    if (i == count) {
      break;
    }
  }
};

export default generateFreebies;
