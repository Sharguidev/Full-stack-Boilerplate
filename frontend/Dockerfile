# frontend/Dockerfile
FROM node:18-alpine


# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose port
EXPOSE 4321

# Development command
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]