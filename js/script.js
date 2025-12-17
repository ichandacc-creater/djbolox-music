// Modal logic
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("bookingForm");

  // Open modal when Book Now is clicked
  document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form submission
  form.addEventListener("submit", e => {
    e.preventDefault();
    modal.style.display = "none";
    alert("Thank you for your booking request. You will be contacted shortly. If you are not contacted, please feel free to follow up.");
    form.reset();
  });
});
