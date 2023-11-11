/**
 * Current year display
 */
document.getElementById("year").innerHTML = new Date().getFullYear();

/**
 * Photo filtering
 */
const filterTitle = document.querySelector(".dropdown .title");
const filterOptions = document.querySelectorAll(".dropdown .option");

filterTitle.addEventListener("click", toggleMenuDisplay);

filterOptions.forEach((option) =>
  option.addEventListener("click", handleOptionSelected)
);

//document.querySelector(".dropdown .title").addEventListener("change", handleTitleChange);

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }
  return elem;
}

function toggleDisplay(elem) {
  const curDisplayStyle = elem.style.display;
  if (curDisplayStyle === "none" || curDisplayStyle === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector(".menu");
  toggleClass(menu, "hide");
}

function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, "hide");
  const newValue = e.target.textContent + " ";
  const titleElem = document.querySelector(".dropdown .title");
  titleElem.textContent = newValue;
  const selectedOption = e.target.textContent;
  //trigger custom event
  filterSelection(selectedOption);
  //document.querySelector(".dropdown .title").dispatchEvent(new Event("change"));
}

/*function handleTitleChange(e) {
  const result = document.getElementById("result");
  result.innerHTML = "The result is: " + e.target.textContent;
}*/

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("photo");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

filterSelection("all");
