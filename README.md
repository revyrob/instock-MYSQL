# 🚀 Instock Responsive Application -  MYSQL Database 
A Web Appliacation with CRUD functionality.  A variety of warehouses, their information, and the inventory within them.  
The user is able to add, edit, and delete information within the warehouses and the inventory.  
Altered the instock-json group project, converted the backend from JSON files to a MYSQL database. 

## 💻 Built with
<li>React</li>
<li>MYSQL</li>
<li>Express</li>
<li>Knex</li>
<li>Node</li>
<li>React-router-dom</li>
<li>react-dom</li>
<li>SASS</li>
<li>uuid</li>
<li>BEM</li>

## 🛠️ Installation Steps:
1. To start using this app you first need to clone the repository:

    git clone git@github.com:revyrob/instock-MYSQL.git
    
2. In the main folder run:

    npm i    

3. In each of the folders for server and client run:

    npm i

4. Create a .env file within the client folder with the following:

    REACT_APP_API_SERVER_URL=http://localhost:8080

5. Create a database called 'instock' on MYSQL.
    
6. Create a .env file within the server folder with the following:

    DB_LOCAL_DBNAME = instock
    DB_LOCAL_USER = <Enter your UserName>
    DB_LOCAL_PASSWORD = <Enter your Password>
    PORT = 8080

7. Seed and migrate the information.  Run: 

8. To run the frontend and backend run the following code in the main folder run:

    npm run dev
    


## 🔮 Future Plans for Instock

<li>Still working on CRUD operations</li>
<li>Deploy the application</li>
