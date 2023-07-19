document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Display confirmation details
    document.getElementById('nameDisplay').textContent = 'Name: ' + name;
    document.getElementById('emailDisplay').textContent = 'Email: ' + email;
    document.getElementById('phoneDisplay').textContent = 'Phone: ' + phone;
    document.getElementById('dateDisplay').textContent = 'Date: ' + date;
    document.getElementById('timeDisplay').textContent = 'Time: ' + time;
  
    // Show confirmation section and hide the form
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('appointmentForm').classList.add('hidden');
  });
  