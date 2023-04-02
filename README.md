# ToDo list app 

## About

ToDo list is a FullStack application composed of three services:
* Database
* Backend
* Frontend

This project was developed using macOS, if you are using a different OS the steps might differ. This application consists of a task manager system, in which it is possible to query, register, change and delete tasks in an isolated way.

## Software Engineering
### Front-end 

* Programming language:
  * **JavaScript**
         
* Frameworks
  * **React:** JavaScript library used to create dynamic and responsive user interface;
  * **ContextAPI**: used to manage the global state of the application;
  * **Axions**: HTTP client based on a simple promise for navegador and node.js, used to make requests transit between the Front and back-End.

### Back-end 

* Programming language:
  * **C#**
         
* Frameworks
  * **.NET:** used to build de aplication using C#;

### Database 

* Relational database
  * **SQL Server**
         

## SetUp

### Prerequisits

#### Tasks

* [Node.js v16.15.0](https://nodejs.org/en)
* [Docker v20.10.23](https://docs.docker.com/get-docker/)
* [ASP.NET Core Runtime 6.0.15](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
* [Microsoft SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
* [Azure Data Studio](https://learn.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-2017&tabs=redhat-install%2Credhat-uninstall)

### First steps

1. Clone the repository: `git clone git@github.com:carinacunha/project-todolist.git`
2. Navigate to the root of the repository: `cd project-todolist/front-end`
3. Install the dependencies: `npm install`
4. Install back-end dependencies: [Microsoft.EntityFramaeworkCore](https://learn.microsoft.com/en-us/ef/core/get-started/overview/install?source=recommendations)


### Database

The project utilizes the relational database Microsoft SQL Server. The project was developed using a Macbook and Microsoft does not provide a native MS SQL Server application for macOS. In order to run it, a Docker container was used. 

The command to download the image and run the container is:
```bash
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Mystr0ngP@ssw0rd!' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest
```

The command binds the port `1433` to the same port on the `localhost` so that the database can be accessed as if it were running locally.

✨ Consult [here](https://learn.microsoft.com/en-us/sql/relational-databases/security/password-policy?view=sql-server-2017) the policies to build your personalized password or use the one described in the code if you prefer.

The database was created with the help of the Azure Data Studio tool. For more information about installation and configuration click [here](https://www.linkedin.com/pulse/running-connecting-sql-server-your-mac-michael-ahearn/).

### Back-end
Before running the backend application, we have to run the migrations to populate the database. The connection between the backend and the database is configured by a `ConnectionString`. The following connection string is present in the `./project-todolist/back-end/appsettings.Development.json` file:

```json
"ConnectionStrings": {
  "DataBase": "Server=localhost;Database=SQL_Server;User Id=sa;Password=Mystr0ngP@ssw0rd!;"
}
```
Using this connections, we can populate the database using the command:
```bash
dotnet ef database update
```

Navigate to the `./project-todolist/back-end/` folder and start the application with the command:
```bash
dotnet run
```

You can test the API running by accessing the Swagger interface on `http://localhost:5209/swagger`.

## Front-end

With the back-end running, the front-end application can be started by navigating to `./project-todolist/front-end/` and running:
```bash
npm start
```
The frontend application runs at `localhost:8000/tasks`.

## Next steps
* Validate inputs on the front end
* Implement login page in frontend
* Implement user authentication
* Make the relationship between tasks and users
* Implement the typescript on the front end
* Style the application

