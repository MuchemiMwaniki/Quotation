from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize the Flask app
app = Flask(__name__)
# Enable CORS for all routes, allowing the frontend to communicate with this backend
CORS(app)

# This is a simple test route to make sure the server is running
@app.route('/')
def home():
    return "Backend is running!"

# This is the API endpoint that will receive the form data from your frontend
@app.route('/api/quote-request', methods=['POST'])
def handle_quote_request():
    try:
        # Get the JSON data sent from the frontend
        data = request.json
        
        # Log the received data to the console (for now)
        print("Received new quotation request:")
        print(f"Customer Name: {data.get('customerName')}")
        print(f"Email: {data.get('customerEmail')}")
        print(f"Chassis Number: {data.get('chassisNumber')}")
        print(f"Parts Needed: {data.get('partsNeeded')}")

        # You would add your database and API lookup logic here
        
        # Send a success response back to the frontend
        return jsonify({"message": "Quotation request received successfully!"}), 200

    except Exception as e:
        # Handle any errors that might occur
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    # Run the application in debug mode
    app.run(debug=True, port=5000)
