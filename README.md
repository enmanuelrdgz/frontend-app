# quickpolls-client (2.0.0)

This is the web client for QuickPolls. It's built with **Next.js** and provides a user-friendly interface to create, manage, and participate in polls. The backend logic is powered by a Spring Boot API, which connects to a PostgreSQL database.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v18.19.1)
- **npm** (v9.2.0)
- [**quickpolls-core**](https://github.com/enmanuelrdgz/quickpolls-core) (v2.0.0)

## Installation

1. Clone this repository:

  ```bash
  git clone https://github.com/enmanuelrdgz/quickpolls-client.git
  cd quickpolls-client
  ```

2. Add enviroment variables:

  ```bash
  touch .env
  echo "NEXT_PUBLIC_API_URL='http://localhost:8080" >> .env
  ```

3. Install dependencies:

  ```bash
  npm install
  ```

4. Build and start the application:

  ```bash
  npm run build
  npm run start
  ```

Now you can open your browser in http://localhost:3000 to access the application