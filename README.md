# quickpolls-client (2.0.0)

This is the web client for QuickPolls. It was built with **Next.js 15** and it provides a **user-friendly interface** to interact with [**quickpolls-core**](https://github.com/enmanuelrdgz/quickpolls-core).

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

> Now the application should be running **locally** on port **3000**