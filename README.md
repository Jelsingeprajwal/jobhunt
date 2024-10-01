# JobHunt

This project is a full-stack web application that utilizes **MongoDB**, **Express.js**, **React**, and **Node.js**.

## Code Setup

Follow these steps to set up the project:

1. **Clone the Repository**  
   Use the following command to clone the repository:

   ```bash
   git clone https://github.com/Jelsingeprajwal/jobhunt.git
   ```

2. **Navigate to the Project Directory**  
   Change into the project directory:

   ```bash
   cd jobhunt
   ```

3. **Set Up the Client**  
   Navigate to the client directory and install the required packages:

   ```bash
   cd ui
   npm install
   ```

4. **Set Up the Server**  
   Navigate to the server directory and install the required packages:

   ```bash
   cd server
   npm install
   ```

5. **Create the Environment File**  
   In the server directory, create a new file named `.env` and add the following lines:

   ```
   MONGO_URI=
   PORT=
   SECRET_KEY=
   CLOUD_NAME=
   API_KEY=
   API_SECRET=
   ```

   - `MONGO_URI`: Connection string to your MongoDB database
   - `PORT`: Port number to run the server on
   - `SECRET_KEY`: Secret key for authentication
   - `CLOUD_NAME`: Name of your Cloudinary account
   - `API_KEY`: API key for your Cloudinary account
   - `API_SECRET`: API secret for your Cloudinary account

6. **Start the Server**  
   Run the following command in the server directory to start the server:

   ```bash
   npm run dev
   ```

7. **Start the Client**  
   In the client directory, run the following command to start the client:
   ```bash
   npm run dev
   ```
