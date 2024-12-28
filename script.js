function openModal() {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  };
  
