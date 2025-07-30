document.addEventListener('DOMContentLoaded', function() {
    fetchQuotationRequests();
});

function fetchQuotationRequests() {
    fetch('http://127.0.0.1:5000/api/quote-requests')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(requests => {
            const listContainer = document.getElementById('quotation-list');
            listContainer.innerHTML = ''; // Clear the loading message

            if (requests.length === 0) {
                listContainer.innerHTML = '<p class="empty-message">No quotation requests found.</p>';
                return;
            }

            requests.forEach(request => {
                const quoteCard = document.createElement('div');
                quoteCard.className = 'quote-card';
                
                // Get the vehicle details object
                const vehicleDetails = JSON.parse(request.vehicleDetails);

                quoteCard.innerHTML = `
                    <div class="quote-header">
                        <h3>Quotation #${request.id}</h3>
                        <p>${new Date(request.timestamp).toLocaleString()}</p>
                    </div>
                    <div class="quote-body">
                        <p><strong>Customer:</strong> ${request.customerName}</p>
                        <p><strong>Email:</strong> ${request.customerEmail}</p>
                        <p><strong>Chassis No:</strong> ${request.chassisNumber}</p>
                        <p><strong>Vehicle:</strong> ${vehicleDetails.make || 'N/A'} ${vehicleDetails.model || ''} (${vehicleDetails.year || 'N/A'})</p>
                        <p><strong>Parts:</strong> ${request.partsNeeded}</p>
                    </div>
                    <div class="quote-actions">
                        <a href="http://127.0.0.1:5000/api/quote-pdf/${request.id}" class="action-btn" target="_blank">Download PDF</a>
                    </div>
                `;
                listContainer.appendChild(quoteCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('quotation-list').innerHTML = '<p class="error-message">Failed to load requests. Please try again.</p>';
        });
}
