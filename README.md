# MCP Server

A server implementation for connecting to Claude AI.

## Prerequisites

Before running this project, you need to:

1. Install Node.js and npm from [https://nodejs.org/](https://nodejs.org/)
2. Configure your Claude API credentials in the `.env` file

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Run tests:
```bash
npm test
```

## Project Structure

- `src/index.js` - Main server entry point
- `__tests__/` - Test files
- `.env` - Environment configuration

## API Endpoints

- `GET /health` - Health check endpoint