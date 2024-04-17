FROM jenkins/jenkins:alpine-jdk17

# Jalankan perintah sebagai user root
USER root

# Tambahkan GitHub ke known_hosts untuk menghindari peringatan saat pertama kali terkoneksi via SSH
RUN mkdir -p /var/jenkins_home/.ssh && ssh-keyscan -t rsa github.com >> /var/jenkins_home/.ssh/known_hosts

# Kembali ke user jenkins
USER jenkins
