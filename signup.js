document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var userType = document.getElementById('user-type').value;

  var user = { name: name, email: email, password: password, userType: userType };

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(function (response) {
      if (response.ok) {
        console.log('User signed up!');
        alert('Signup successful! You can now login.');
      } else {
        console.error('Error signing up user.');
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
});