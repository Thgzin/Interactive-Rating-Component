const firstCount = document.querySelector(".count1");
const secondCount = document.querySelector(".count2");
const thirdCount = document.querySelector(".count3");
const fourthCount = document.querySelector(".count4");
const fifthCount = document.querySelector(".count5");
const activeClass = document.createElement("activeClass");

const counts = [firstCount, secondCount, thirdCount, fourthCount, fifthCount];

function handleItemSelection(counts) {
  counts.forEach((item) => {
    item.addEventListener("click", () => {
      counts.forEach((el) => el.classList.remove("activeClass"));
      item.classList.add("activeClass");
    });
  });
}
function handleSubmit(counts) {
  const button = document.querySelector(".submit-btn");
  const jsBox = document.querySelector(".js-box");

  button.addEventListener("click", () => {
    const selectedItem = counts.find((item) =>
      item.classList.contains("activeClass")
    );

    if (selectedItem) {
      const selectValue = selectedItem.textContent;
      jsBox.classList.add("fade-out");

      setTimeout(() => {
        jsBox.innerHTML = `
        <img class="thankYou-image" src="images/illustration-thank-you.svg" alt="illustration-thank-you" />
        <div class="response-section">
          <p class="response-txt">You selected ${selectValue} out of 5</p>
          
          </div>
          <div class="rating-section">
            <h2>Thank you!</h2>
            <p class="appreciate-txt">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          <br>
          <button class="rate-btn js-rateBtn">Rate Again</button>
          </div>
        
        `;
        jsBox.classList.remove("fade-out");

        const rateBtn = document.querySelector(".rate-btn");
        rateBtn.addEventListener("click", () => {
          jsBox.innerHTML = renderRatingInterface();
          init();
        });
      }, 400);
    }
  });
}

function renderRatingInterface() {
  const html = `
  <main>
 <div class="box js-box">
   <div class="star-section">
     <img class="star-image" src="images/icon-star.svg" alt="icon-star" />
   </div>

   <div class="main-content">
     <h3>How did we do?</h3>
     <p>
       Please let us know how we did with your support request. All
       feedback is appreciated to help us improve our offering!
     </p>
   </div>
   <ul class="count-section">
     <li class="count1">
       <span>1</span>
     </li>
     <li class="count2">
       <span>2</span>
     </li>
     <li class="count3">
       <span>3</span>
     </li>
     <li class="count4">
       <span>4</span>
     </li>
     <li class="count5">
       <span>5</span>
     </li>
   </ul>
   <button class="submit-btn">Submit</button>
 </div>
</main>
 `;

  return html;
}

function init() {
  const counts = Array.from(
    document.querySelectorAll(".count1, .count2, .count3, .count4, .count5")
  );
  handleItemSelection(counts);
  handleSubmit(counts);
}

init();
