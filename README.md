# NameAddressSolution

This solution consists of three main components: a .NET Core 6 API, an Angular 15 frontend, and a test project. The solution is designed to demonstrate a basic CRUD operation where a user's name and address can be saved and displayed.

## Solution Structure

The solution is organized into three main directories:

1. **NameAddressApi/**  
   This folder contains the backend API built with .NET Core 6. The API exposes a RESTful endpoint for handling name and address data. It includes services, controllers, models, and middleware for exception handling.

2. **NameAddressApp/**  
   This folder contains the Angular 15 frontend application. The frontend interacts with the backend API to allow users to input their name and address, which are then saved and displayed. The frontend uses Angular Material for styling and provides basic validation and error handling.

3. **NameAddressApi.Tests/**  
   This folder contains the test project for the .NET Core API, using the xUnit framework. It includes unit tests for the API, ensuring that the backend logic behaves as expected, especially with edge cases and error handling.

## Setup Instructions

### Prerequisites

- **.NET Core 6 SDK**: Required to build and run the backend API.
- **Node.js & npm**: Required to build and run the Angular frontend.
- **Visual Studio 2022 or later**: For Development.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/umar-shaikh-dev/NameAddressSolution.git
```

### 2. Setting Up the Backend (NameAddressApi)

1. Navigate to the `NameAddressApi` directory:

   ```bash
   cd NameAddressSolution/NameAddressApi
   ```

2. Restore the .NET dependencies:

   ```bash
   dotnet restore
   ```

3. Ensure that the API builds successfully:

   ```bash
   dotnet build
   ```

### 3. Setting Up the Frontend (NameAddressApp)

1. Navigate to the `NameAddressApp` directory:

   ```bash
   cd ../NameAddressApp
   ```

2. Install the necessary npm packages:

   ```bash
   npm install
   ```

3. Ensure that the Angular app builds successfully:

   ```bash
   ng build
   ```

### 4. Setting Up the Tests (NameAddressApi.Tests)

1. Navigate to the `NameAddressApi.Tests` directory:

   ```bash
   cd ../NameAddressApi.Tests
   ```

2. Restore the .NET test project dependencies:

   ```bash
   dotnet restore
   ```

3. Ensure that the test project builds successfully:

   ```bash
   dotnet build
   ```

## Running the Project

You can run both the backend and frontend simultaneously using the npm script configured in the `NameAddressApp` project.

### 1. Run the Backend and Frontend Together

1. Navigate to the `NameAddressApp` directory:

   ```bash
   cd ../NameAddressApp
   ```

2. Use the following command to start both the backend and frontend:

   ```bash
   npm start
   ```

   This command will:
   - Start the backend API using `dotnet run`.
   - Serve the Angular frontend using `ng serve`.

### 2. Running Tests

#### Backend Tests

1. Navigate to the `NameAddressApi.Tests` directory:

   ```bash
   cd ../NameAddressApi.Tests
   ```

2. Run the tests using the following command:

   ```bash
   dotnet test
   ```

   This command will execute all the xUnit tests in the test project.

#### Frontend Tests

1. Navigate to the `NameAddressApp` directory:

   ```bash
   cd ../NameAddressApp
   ```

2. Run the Angular unit tests using the following command:

   ```bash
   ng test
   ```

## Project Overview

### NameAddressApi/

- **Controllers**: Contains the `PersonController`, which handles HTTP requests related to the `Person` entity.
- **Models**: Contains the `Person` model, representing the data structure for the API.
- **Services**: Contains the service layer (`IPersonService` and `PersonService`) for business logic.
- **Middleware**: Contains custom middleware for exception handling.

### NameAddressApp/

- **src/app/person-form**: Contains the main component (`PersonFormComponent`) for the user interface to input and display person data.
- **src/app/services**: Contains the `PersonService`, which handles HTTP communication with the backend API.

### NameAddressApi.Tests/

- **PersonControllerTests.cs**: Contains unit tests for the `PersonController`, ensuring correct behavior under various scenarios.
