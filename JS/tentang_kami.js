document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("formPesan");
 
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
 
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const message = document.getElementById("message").value;
 
    if (!name || !address || !message) {
      showSweetAlert(
        "Error",
        "Silakan lengkapi semua kolom formulir!",
        "error"
      );
      return;
    }
 
    const formData = {
      name,
      address,
      message,
    };
 
    // Kirim data ke backend
    fetch("https://be-2-bandung-17-production.up.railway.app/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Terjadi kesalahan saat mengirim formulir.");
        }
        return response.json();
      })
      .then((data) => {
        showSweetAlert(
          "Success",
          "Pesan Anda berhasil dikirim! TERBAIK",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error:", error.message);
        showSweetAlert(
          "Error",
          "Terjadi kesalahan saat mengirim Pesan. Silakan coba lagi nanti.",
          "error"
        );
      });
  });
 
  function showSweetAlert(title, text, icon) {
    // Menampilkan SweetAlert
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "#645cff",
    });
  }
});


