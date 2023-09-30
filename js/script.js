function handleGetFormData() {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const cityInput = document.getElementById("city");
  const zipCodeInput = document.getElementById("zip-code");
  const reportTextarea = document.getElementById("report");
  const statusCheckbox = document.getElementById("status");
  const warningDiv = document.querySelector(".warning");
  const warningText = document.querySelector(".warning-text");

  function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
      displayError("Nama Lengkap tidak boleh kosong");
      return false;
    }
    return true;
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(emailValue)) {
      displayError("Alamat Email tidak valid");
      return false;
    }
    return true;
  }

  function validateCity() {
    const cityValue = cityInput.value.trim();
    if (cityValue === "") {
      displayError("Domisili tidak boleh kosong");
      return false;
    }
    return true;
  }

  function validateZipCode() {
    const zipCodeValue = zipCodeInput.value.trim();
    if (zipCodeValue === "" && !isNumber(zipCodeValue)) {
      displayError("Kode Pos tidak boleh kosong dan harus berupa angka");
      return false;
    }
    return true;
  }

  function validateReport() {
    const reportValue = reportTextarea.value.trim();
    if (reportValue === "") {
      displayError("Laporan tidak boleh kosong");
      return false;
    }
    return true;
  }

  function checkboxIsChecked() {
    if (!statusCheckbox.checked) {
      displayError("Anda harus menyetujui pernyataan");
      return false;
    }
    return true;
  }

  function displayError(message) {
    warningText.textContent = message;
    warningDiv.setAttribute("style", "display: flex");
    setTimeout(function () {
      warningDiv.setAttribute("style", "display: none");
      warningText.textContent = "";
    }, 3000);
  }

  function validateFormData (event) {
    if (
      !validateName() ||
      !validateEmail() ||
      !validateCity() ||
      !validateZipCode() ||
      !validateReport() ||
      !checkboxIsChecked()
    ) {
      event.preventDefault(); // Prevent form submission if there are errors.
      return false;
    } else {
      return true;
    }
  
  }

  form.addEventListener("submit", validateFormData);
}

function isNumber(param) {
    return isNaN(param);
}

document.addEventListener("DOMContentLoaded", handleGetFormData);
