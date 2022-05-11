const message =
  "Merci pour votre message";

  const contact = document.querySelector(".contact");
  contact.addEventListener("submit", function(event){
      event.preventDefault();
      alert(message);
  })



