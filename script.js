const editableInput = document.querySelector(".editable");
readonlyInput = document.querySelector(".readonly"),
  placeholder = document.querySelector(".placeholder"),
  counter = document.querySelector(".counter"),
  button = document.querySelector("button");

editableInput.oninput = (e) => {
  let element = e.target;
  checkInput(element);
  counter.style.display = "none";
}

function checkInput(element) {
  let currentLength = element.innerText.length;
  let maxLength = 100;
  let textTag;

  if (currentLength === 0) {
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  } else {
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }

  editableInput.onkeyup = () => {
    counter.style.display = "block";

    if (currentLength === 0) {
      button.classList.remove("active");
      counter.style.display = "none";
    }
  }

  counter.innerText = maxLength - currentLength;

  if (currentLength > maxLength) {
    let overText = element.innerText.substr(maxLength);
    overText = `<span class="highlight">${overText}</span>`;
    textTag = element.innerText.substr(0, maxLength) + overText;

    readonlyInput.style.zIndex = "1";
    button.classList.remove("active");
    counter.style.color = "#e0425e";
  } else {
    readonlyInput.style.zIndex = "-1";
    button.classList.add("active");
    counter.style.color = "#333";
  }
  readonlyInput.innerHTML = textTag;
}

