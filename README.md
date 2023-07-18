# Supabase NextJS Auth

This project is a modern web application built using Next.js and Supabase. Supabase provides a fast, reliable, and secure backend for your application's data storage and user authentication needs.

## Description

This application provides a smooth, server-side rendered user experience with Next.js, a popular framework based on React.js. For data storage and user authentication, we leverage Supabase, an open-source Firebase alternative that provides user management, real-time databases, auto-generated APIs, and more.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Credits](#credits)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm/yarn.
- You have a Supabase account and have your Supabase project URL and public API key. For information on how to create a Supabase account, see [Supabase documentation](https://supabase.io/docs/guides/platform).
- You are familiar with React.js and Next.js.

## Installation

To install this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sgwcollins/supabase-nextjs
   ```

2. Navigate to the project directory:

   ```bash
   cd supabase-nextjs
   ```

3. Install the project dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

Create a `.env.local` file in the root of your project and insert your Supabase URL and public anon key:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```
