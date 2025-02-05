# stage1

Number Classification API
This is an API built with Node.js, Express, and TypeScript that classifies a given number and provides some properties about it, such as whether it's a prime number, a perfect number, or an Armstrong number. It also includes a fun fact about the number.

Features
Number Classification:

Check if a number is prime.

Check if a number is perfect.

Check if a number is an Armstrong number.

Calculate the sum of its digits.

Fun Fact:

Fetch a fun fact about the number using the Numbers API.

Error Handling:

Returns a 400 Bad Request response for invalid inputs.

# API Endpoint
GET /api/classify-number?number=<number>

1. Setup and Installation
  Clone the repository:
  git clone https://github.com/abdul-codes/number-classification-api.git
  cd number-classification-api
2. Install dependencies: npm install

3. Create a .env file and specify the port (optional): PORT=3000

4. Start the server:
     npm run dev
Usage
Send a GET request to the API endpoint with a valid number:

GET http://localhost:3000/api/classify-number?number=371
# Example Response: In json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
# Invalid Input:
# If the input is not a valid number, the API will return a 400 Bad Request response:

{
  "number": "alphabet",
  "error": true
}
