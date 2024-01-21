//for date

var currentDate = new Date();

// Define months in an array
var months = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];

// Get day, month, and year
var day = currentDate.getDate();
var monthIndex = currentDate.getMonth();
var year = currentDate.getFullYear();

// Format the date string
var formattedDate = day + " " + months[monthIndex] + ", " + year;

// Display the formatted date in the span element
document.getElementById("dateDisplay").innerText = formattedDate;

//for contct
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLTAyYrlJrMFqyPYxKL7QePPQYhB-efA_606kxE4av91xTLbLqFzqmlrQmvLBNK1Zz/exec'
const form = document.forms['newsletter']
const submitButton = document.getElementById('submit1');
form.addEventListener('submit1', e => {
  e.preventDefault()
  submitButton.textContent = 'Submitting...';
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
.then(response => alert("Thank you! Your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))

})


