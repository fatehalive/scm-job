# Stage 1: Build stage
FROM node:lts-alpine AS build

# Switch to root user to install packages
USER root

# Avoid prompts
ENV DEBIAN_FRONTEND=noninteractive

# Update the package repository and install git
RUN apk update && apk add --no-cache curl git

# Install pnpm
RUN npm install -g pnpm

# Verify installations
RUN git --version && node --version && pnpm --version

# Stage 2: Setup final image
FROM jenkins/ssh-agent:alpine-jdk17

# Copy Node.js and pnpm from the build stage
COPY --from=build /usr/local/bin/node /usr/local/bin/
COPY --from=build /usr/local/bin/npm /usr/local/bin/
COPY --from=build /usr/local/bin/pnpm /usr/local/bin/
COPY --from=build /usr/local/lib/node_modules /usr/local/lib/node_modules

# Switch to root to setup environment
USER root

# Create symlinks to ensure node and npm commands work
RUN ln -s /usr/local/bin/node /usr/bin/node \
    && ln -s /usr/local/bin/npm /usr/bin/npm \
    && ln -s /usr/local/bin/pnpm /usr/bin/pnpm

# Switch back to the default user (jenkins)
USER jenkins

# Set a default working directory
WORKDIR /home/jenkins

# Entrypoint remains the same
ENTRYPOINT ["jenkins-agent"]
