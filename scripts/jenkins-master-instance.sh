#!/bin/bash

# instance jenkins dlm container 
# forwarding custom port host 9090 ke 8080 si containernya
# dan ekspos 50000 utk para slavenya
docker run -d --name jenkins-master -p 9090:8080 -p 50000:50000 jenkins-custom-image:latest
