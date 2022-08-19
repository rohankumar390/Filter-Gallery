const buttons = document.querySelectorAll(".btn");
const storeImages = document.querySelectorAll(".store-item");
const btn = document.querySelector(".border");

const funC = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      storeImages.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
};
funC();


  // btn.addEventListener("click", (e) => {
  //   storeImages.forEach((item) => {
  //     item.style.display = "block";
  //     item.classList.toggle("add-border");
  //   });
  // });

const func2 = () => {
  if(confirm("ARE YOU SURE ?")==true){
    item.style.display = "block";
    btn.addEventListener("click", (e) => {
      storeImages.forEach((item) => {
        item.style.display = "block";
        item.classList.toggle("add-border");
      });
    });
  }
  else{
    funC();
  }
};