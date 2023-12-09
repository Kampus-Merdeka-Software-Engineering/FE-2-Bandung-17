// method POST kontak kami
function setupContactForm() {
    const form = document.getElementById("formPesan");
    console.log(form, "ini form");
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const formProps = Object.fromEntries(formData);
      console.log(formProps, "ini form props");
      // try {
      //   const response = await fetch(`${apiUrl}/contact`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formProps),
      //   });
      //   const data = await response.json();
      //   console.log("Success:", data);
      // } catch (error) {
      //   console.error("Error:" error);
      // }
    });
  }