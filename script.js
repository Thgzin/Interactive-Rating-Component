const firstCount = document.querySelector(".count1");
const secondCount = document.querySelector(".count2");
const thirdCount = document.querySelector(".count3");
const fourthCount = document.querySelector(".count4");
const fifthCount = document.querySelector(".count5");
const button = document.querySelector(".submit-btn");
const activeClass = document.createElement("activeClass");

const counts = [firstCount, secondCount, thirdCount, fourthCount, fifthCount];

counts.forEach((items) => {
  items.addEventListener("click", () => {
    counts.forEach((item) => item.classList.remove("activeClass"));
    items.classList.add("activeClass");
  });
});
