const nextBtn = document.querySelector(".next-btn");
const listContainer = document.querySelector(".list-container");
const descriptionCount = document.querySelector(".description .count");

// Method to fetch JSON data and assign the values to variable
window.addEventListener("load", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      data = json;
      generateList();
    });
});

let data;
let sequence = 3;
let count = 0;

// Method to handle button click event
nextBtn.addEventListener("click", () => {
  generateList();
});

// Method to generate the list and append it to the list container
function generateList() {
  if (count > data.length - 1) {
    alert("No More Data to Display");
    return;
  }

  listContainer.innerHTML = "";
  for (let i = count; i < sequence; i++) {
    if (count < data.length) {
      const singleData = data[i];
      let list = document.createElement("li");
      list.classList.add("list");
      let innerContent = `
          <span class="count">${count + 1}</span>
          <div class="details">
              <p class="name">Name: <span>${singleData.name}</span></p>
              <p class="location">Location: ${singleData.location}</p>
          </div>
          `;

      list.innerHTML = innerContent;
      listContainer.appendChild(list);
      count++;
    }
  }
  sequence += 3;

  let listItems = listContainer.querySelectorAll("li");
  descriptionCount.textContent = listItems.length;
}
