// Change text content 
function changeTitle() {
  const title = document.getElementById("title");
  title.textContent = "Empowering Students to Succeed in Sciences & Tech!";
  title.style.color = "#ffeb3b";
  title.style.backgroundColor = "#333";
  title.style.padding = "16px";
  title.style.borderRadius = "10px";
}

// Add or remove motivation message
function showMessage() {
  const area = document.getElementById("message-area");
  if (area.textContent === "") {
    const msg = document.createElement("p");
    msg.textContent = "You can achieve greatness with the right guidance and mindset!";
    msg.style.color = "green";
    msg.style.fontWeight = "bold";
    area.appendChild(msg);
  } else {
    area.textContent = "";
  }
}

  
