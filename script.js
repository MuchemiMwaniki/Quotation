document.getElementById('quote-form').addEventListener('submit', function(e) {
    // 1. Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // 2. Get the values from the form inputs
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const chassisNumber = document.getElementById('chassisNumber').value;
    const partsNeeded = document.getElementById('partsNeeded').value;

    // 3. For now, we'll just log the data to the console
    console.log('New Quotation Request Submitted:');
    console.log('Customer Name:', customerName);
    console.log('Email:', customerEmail);
    console.log('Chassis Number:', chassisNumber);
    console.log('Parts Needed:', partsNeeded);
    
    // 4. Give the user a confirmation message
    alert('Thank you for your request! We will get back to you shortly.');

    // 5. Clear the form fields after submission
    document.getElementById('quote-form').reset();
});
