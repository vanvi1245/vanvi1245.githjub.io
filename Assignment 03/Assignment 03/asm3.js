// Khai báo biến lấy các phần tử html
const formContainer = document.querySelector(".form-container");
const infoContainer = document.querySelector(".info-container");
const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const closeJob = document.querySelector(".close-job");
const jobHeader = document.querySelectorAll(".job-item");
const jobContent = document.querySelectorAll(".job-content");
const btnViewJobLess = document.querySelectorAll(".view-job");
const btnViewJobMore = document.querySelectorAll(".view-job-more");
const jobButton = document.querySelectorAll(".view-job");

// Xử lý sự kiện khi submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  formContainer.classList.add("hide");
  infoContainer.classList.remove("hide");
  closeJob.classList.remove("hide");
});
closeJob.addEventListener("click", (e) => {
  formContainer.classList.remove("hide");
  infoContainer.classList.add("hide");
  closeJob.classList.add("hide");
});

// const handleShow = (button) => {
//   let id = button.id;
//   let jc = Array.from(jobContent).filter((item) => item.id === id);
//   let jobContentSelected = jc[0];
//   if (window.getComputedStyle(jc[0]).display === "none") {
//     jobContentSelected.style.display = "block";
//     button.textContent = "View less";
//   } else {
//     jobContentSelected.style.display = "none";
//     button.textContent = "View more";
//   }
// };
// const handleShow = (button) => {
//   for (let i = 0; i < jobContent.length; i++) {
//     if (window.getComputedStyle(jobContent[i]).display === "none") {
//       jobContent[i].style.display = "block";
//       button.textContent = "View less";
//     } else {
//       jobContent[i].style.display = "none";
//       button.textContent = "View more";
//     }
//   }
// };

for (let i = 0; i < jobContent.length; i++) {
  jobButton[i].onclick = function () {
    if (window.getComputedStyle(jobContent[i]).display === "none") {
      jobContent[i].style.display = "block";
      jobButton[i].textContent = "View less";
    } else {
      jobContent[i].style.display = "none";
      jobButton[i].textContent = "View more";
    }
  };
}
