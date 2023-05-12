    let themeButton = document.querySelector("#theme");
    themeButton.onclick = () => {
        if (themeButton.classList.contains('bx-moon')) {
            themeButton.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
        } else {
            themeButton.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
        }
    }


    // -----------------
      // Get the header element
  const header = document.querySelector("header");

  // Create a new div element to copy the content
  let copyDiv = document.querySelector("#copyDiv");
  

  // Clone the header element and remove the .copy class from the cloned elements
  const clonedHeader = header.cloneNode(true);
  const clonedHeaderLiElements = clonedHeader.querySelectorAll("li.copy");
  clonedHeaderLiElements.forEach((element) => {
    element.classList.remove("copy");
  });

  // Copy the modified HTML content of the cloned header to the copyDiv
  copyDiv.innerHTML = clonedHeader.innerHTML;

  // Get the open and close buttons
  let openBtn = document.querySelector("#openBtn");

  openBtn.onclick = () => {
    if (openBtn.classList.contains("bx-menu")) {
      openBtn.classList.replace("bx-menu", "bx-x");
      copyDiv.classList.add("open");
    } else {
      openBtn.classList.replace("bx-x", "bx-menu");
      copyDiv.classList.remove("open");
    }
  };

  // Get the last li element within the ul in copyDiv
  const ul = copyDiv.querySelector("ul");
  const lastLi = ul.lastElementChild;
  lastLi.id = "menu-btn";
  lastLi.remove();

  console.log(lastLi);

