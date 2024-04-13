FROM jenkins/inbound-agent:latest

# Switch ke root user utk install packages
USER root

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Update the package repository and install git
RUN apt-get update && apt-get install -y curl git

# Install Node.js to exec nodejs project
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs

# install pnpm
RUN npm install -g pnpm

# Verify instalasi
RUN git --version && java -version && javac -version && node --version && pnpm --version

# Switch back ke default user (jenkins)
USER jenkins

# Set a default working directory; this is where Jenkins will execute the builds
WORKDIR /home/jenkins