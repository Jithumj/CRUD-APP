# CRUD-APP

This project contains an  implementation of CRUD using ASP.NET Core REST API , React.js and sql server.This is a simple implementation of a notes  app.
it will help to store notes ,delete note and update notes.It is an implementation of the REST Api with GET,POST,PUT,DELETE methods.The crud controller is the implementation of the API,it also deals with the database connection and queries.

To run this sample, you need the following prerequisites.

**Software prerequisites:**

1. SQL Server 2016 (or higher) or an Azure SQL Database
2. Visual Studio  with the ASP.NET Core
3. Node.js 

## Run this sample

### Setup

1. From SQL Server Management Studio or Sql Server Data Tools connect to your SQL Server  database and create a notes table with an id column and a description column

2. From Visual Studio , open the **CrudAppReact.xproj** file from the root directory. Restore packages using right-click menu on the project in Visual Studio and by choosing Restore Packages item. As an alternative, you may run **dotnet restore** from the command line (from the root folder of application).

3. Add a connection string in appsettings.json or appsettings.development.json file. An example of the content of appsettings.development.json is shown in the following configuration:

```
{
  "ConnectionStrings": {
    "CrudAppDBCon": "Server=.;Database=CrudApp;Integrated Security=true"
  }
}
```

### Build and run the REST services

1. Build solution using Ctrl+Shift+B, right-click on project + Build, Build/Build Solution from menu, or **dotnet build** command from the command line (from the root folder of application).

2. Run sample app using F5 or Ctrl+F5,
  1. Open /api/Url to get all Todo items as a JSON array,
  2. Open /api/Crud/1 Url to get details about a single Todo item with id 1,
  3. Send POST, PUT, PATCH, or DELETE Http requests to update content of notes table.

<a name=sample-details></a>

## Sample details

This sample application shows how to create simple REST API service that performs CRUD operations on a simple table with two columns.
ASP.NET Core Web API is used to implement REST Service in the example.
React is used as front-end ,where the data from api is fetched using the javascript fetch()  method.
