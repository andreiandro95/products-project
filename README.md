How to Run the App

Clone the repository:
  git clone https://github.com/andreiandro95/products-project.git

Navigate to the project folder:
  cd products-project

Install dependencies:
  npm install

Start the development server:
    npm start
    Open your browser at http://localhost:3000 to view the app.

AI Feature Implemented
  I chose Option A – Smart Product Search (NLP).
  The implementation uses a keyword detection system to parse user queries and filter products based on detected terms such as product category, price range, and rating. This provides a natural language search   experience without relying on a complex AI model.

Tools and Libraries Used
    React.js 
    JavaScript 

Notable Assumptions
    The AI feature is a simplified, rule-based keyword detection system, not a full AI or ML model, due to time constraints.
    Product data is static and hardcoded in JSON for simplicity.
    Price filtering supports numeric ranges only.
    Ratings and number of reviews are displayed for better product context.
