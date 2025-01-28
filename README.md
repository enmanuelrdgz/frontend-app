# Generic Poll System Client

This is the web client for a Generic Poll System. It's built with **Next.js** and provides a user-friendly interface to create, manage, and participate in polls. The backend logic is powered by a Spring Boot API, which connects to a PostgreSQL database.

## Features

- Create and manage surveys with ease.
- Participate in surveys with a responsive and intuitive UI.
- Real-time communication with the Spring Boot API.
- Built with modern web technologies:
  - **Next.js** for server-side rendering and React-based UI.
  - **Tailwind CSS** for styling.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- Access to the Spring Boot API for backend communication

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/nextpolls-web-client.git
   cd nextpolls-web-client

2. Create a .env.local file in the root of the project and add the NEXT_PUBLIC_API_URL env variable with the url of the java api
