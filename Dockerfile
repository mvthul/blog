FROM node:23.5.0-alpine3.21 AS runtime

# Install required tools for Prisma and set up the user and group
RUN apk update && apk add --no-cache openssl \
    && addgroup -S nodejs && adduser -S blogger -G nodejs

# Set working directory and ensure correct permissions
WORKDIR /app
RUN chown blogger:nodejs /app

# Switch to the non-root user
USER blogger

# Copy package.json and install dependencies
COPY --chown=blogger:nodejs package.json package-lock.json ./
RUN npm install

# Copy Prisma schema and generate the client
COPY --chown=blogger:nodejs prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application
COPY --chown=blogger:nodejs . .
RUN npm run build

# Expose port and specify the default command
EXPOSE 3000
CMD ["npm", "run", "serve"]

# Example commands:
# docker build -t harbor.vthul-it.nl/mvthul/blog:latest .
# docker run -it -p 3000:3000 --rm --name nextjs-blog h
