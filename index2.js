const contact = document.querySelector(".contact");
contact.addEventListener("submit", function(event){
    const message ="Merci pour votre message";
    event.preventDefault();
    alert(message);
});
