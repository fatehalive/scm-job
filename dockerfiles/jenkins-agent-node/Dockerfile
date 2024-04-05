# Pakai base image Node LTS
FROM node:latest

# Label image
LABEL description="Jenkins Agent (Slave) with Node.js"

# Update paket dan install dependensi
RUN apt-get update && apt-get install -y \
  git \
  openssh-client \
  ca-certificates \
  apt-transport-https \
  && rm -rf /var/lib/apt/lists/*

# Siapkan direktori kerja
WORKDIR /home/node
RUN npm install -g pnpm
ARG JENKINS_USER=jenkins
ARG JENKINS_UID=1000
ARG JENKINS_GID=1000
RUN groupadd -g ${JENKINS_GID} ${JENKINS_USER} \
  && useradd -m -u ${JENKINS_UID} -g ${JENKINS_GID} -d /home/${JENKINS_USER} ${JENKINS_USER} \
  && mkdir /home/${JENKINS_USER}/.ssh \
  && chown -R ${JENKINS_USER}:${JENKINS_GID} /home/${JENKINS_USER}

USER ${JENKINS_USER}
WORKDIR /home/${JENKINS_USER}
CMD ["node"]