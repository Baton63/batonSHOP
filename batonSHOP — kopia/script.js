document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Dodano do koszyka!");
        });
    });
});
