// Open Popup
document.querySelectorAll('.open-form').forEach(button => {
  button.addEventListener('click', function () {
    document.getElementById('form-popup').style.display = 'flex';
    document.getElementById('button-id').value = this.id; // Set Button ID
  });
});

// Close Popup
document.getElementById('close-popup').addEventListener('click', function () {
  document.getElementById('form-popup').style.display = 'none';
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let formData = new FormData(this);
  formData.append('timestamp', new Date().toLocaleString()); // Add Timestamp

  fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
    document.getElementById('form-popup').style.display = 'none';
    this.reset();
  })
  .catch(error => alert('Error: ' + error));
});