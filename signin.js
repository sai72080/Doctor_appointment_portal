document.getElementById('signin-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var userType = document.getElementById('user-type').value;


  fetch('http://localhost:3000/users?userType=' + userType)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error fetching user data.');
      }
    })
    .then(function (data) {
      var user = data.find(function (item) {
        return item.email === email && item.password === password;
      });

      if (user) {
        
        window.location.href = 'Appointment.html';
      } else {

        document.getElementById('error-message').textContent = 'Invalid email or password.';
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
});