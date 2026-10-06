document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cart-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const card = this.closest(".product-card");
      const productName = card.querySelector(".product-title").textContent.trim();

      this.textContent = "✓ Ditambahkan";
      this.classList.remove("btn-danger");
      this.classList.add("btn-success");

      alert(productName + " berhasil ditambahkan ke keranjang!");

      setTimeout(function () {
        button.textContent = "+ Keranjang";
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
      }, 1500);
    });
  });
});