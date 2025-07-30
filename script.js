document.getElementById('quote-form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Get the values from the form inputs
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const chassisNumber = document.getElementById('chassisNumber').value;
    const partsNeeded = document.getElementById('partsNeeded').value;
    
    // Create a JavaScript object to hold the data
    const formData = {
        customerName: customerName,
        customerEmail: customerEmail,
        chassisNumber: chassisNumber,
        partsNeeded: partsNeeded
    };

    // Send the data to your backend API using the fetch() API
    fetch('http://127.0.0.1:5000/api/quote-request', {
        method: 'POST', // We are sending data, so the method is POST
        headers: {
            'Content-Type': 'application/json', // Tell the server we are sending JSON data
        },
        body: JSON.stringify(formData) // Convert the JavaScript object to a JSON string
    })
    .then(response => response.json()) // Parse the JSON response from the backend
    .then(result => {
        // Handle the success response from the backend
        console.log('Success:', result);
        alert('Thank you for your request! We will get back to you shortly.');

        // Clear the form fields after successful submission
        document.getElementById('quote-form').reset();
    })
    .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
