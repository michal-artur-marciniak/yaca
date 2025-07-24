
# Yet Another Coding Agent (YACA) - AI-Powered App Builder

Yet Another Coding Agent (YACA) is an application that generates full-stack applications from text prompts. It uses AI agents to create, build, and deploy web applications inside secure cloud sandboxes. This project is built with a modern, AI-focused toolchain and an agent-based architecture.

## Key Features

- **🚀 Next.js 15 & React 19**: Built with the latest features of Next.js and React for optimal performance and developer experience.
- **🎨 Tailwind v4 & Shadcn/ui**: Modern and responsive design using the latest version of Tailwind CSS and a comprehensive component library.
- **📡 tRPC for Full-Stack Type Safety**: End-to-end type safety between the client and server, ensuring robust and error-free API communication.
- **🔁 Inngest for Background Jobs**: Reliable and scalable background job processing with the Inngest platform.
- **🧠 Inngest Agent Toolkit**: A powerful toolkit for building and orchestrating AI agents.
- **🔐 Clerk for Authentication**: Secure and easy-to-use authentication and user management provided by Clerk.
- **💳 Clerk for Billing**: Integrated billing and subscription management to handle different pricing plans.
- **🧱 Component and App Generation from AI Prompts**: Generate full-stack applications or individual components from simple text-based prompts.
- **🗂️ Live Project Preview**: Instantly preview generated applications with a live URL.
- **🖥️ E2B Cloud Sandboxes**: Secure and isolated runtime execution environments for generated applications.
- **🐳 Docker-Based Sandbox Templating**: Customizable sandbox environments using Docker for flexible and reproducible builds.
- **🧠 Multi-Model AI Support**: Support for various AI models, including OpenAI, Anthropic, and Grok.
- **📦 Prisma & Neon**: A modern and reliable database stack with Prisma ORM and Neon serverless Postgres.
- **🧾 Built-in Credit System**: A credit-based system for tracking and managing application usage.
- **🧪 Preview & Code Explorer Toggle**: Seamlessly switch between a live preview of the application and a detailed code explorer.

## How It Works

YACA interprets user prompts and generates code through an architecture based on AI agents. Here's a high-level overview of the process:

1.  **Prompt Input**: The user provides a text prompt describing the application or component they want to build.
2.  **AI Agent Orchestration**: The prompt is sent to an Inngest-powered AI agent, which breaks down the request into smaller, manageable tasks.
3.  **Code Generation**: The AI agent uses models like GPT-4 to generate the required code, including frontend components, backend logic, and database schemas.
4.  **Sandbox Execution**: The generated code is executed in a secure E2B cloud sandbox, which provides an isolated environment for building and running the application.
5.  **Live Preview**: Once the application is built, a live preview is made available to the user via a unique URL.
6.  **Code & Preview**: The user can inspect the generated code, view the live preview, and make further modifications as needed.

## Tech Stack

### Frontend

- **Framework**: Next.js 15
- **Library**: React 19
- **Styling**: Tailwind v4, Shadcn/ui
- **State Management**: React Query
- **API Client**: tRPC

### Backend

- **Runtime**: Node.js
- **Framework**: Next.js (API Routes)
- **Background Jobs**: Inngest
- **AI Agents**: Inngest Agent Kit
- **Database**: Prisma, Neon (Postgres)
- **Authentication**: Clerk
- **Billing**: Clerk

### Infrastructure

- **Sandboxes**: E2B
- **Containerization**: Docker
- **Deployment**: Vercel

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/michal-artur-marciniak/yaca.git
    cd yaca
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Set up environment variables**:
    Create a `.env.local` file and add the necessary environment variables for Clerk, Inngest, Neon, and E2B.

4.  **Run the development server**:
    ```bash
    pnpm dev
    ```

5.  **Open your browser**:
    Navigate to `http://localhost:3000` to see the application in action.

## Project Structure

The project is organized into the following main directories:

-   `src/app`: Contains the main application routes and pages.
-   `src/components`: Reusable UI components.
-   `src/inngest`: Inngest client, functions, and agent definitions.
-   `src/lib`: Shared libraries and utilities, including the database client.
-   `src/modules`: Feature-based modules containing UI, server-side logic, and constants.
-   `src/trpc`: tRPC server, client, and router configuration.
-   `prisma`: Prisma schema and migration files.
-   `sandbox-templates`: Docker-based templates for E2B sandboxes.

## Conclusion

YACA is an application that shows the potential of AI-driven software development. It combines a modern tech stack with an agent-based architecture to provide a straightforward way to build and deploy full-stack applications from simple text prompts. 
