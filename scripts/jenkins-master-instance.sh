#!/bin/bash

docker volume create volume_jenkins_master
docker volume create volume_jenkins_agent

docker run -d --name container_jenkins_master --mount 'type=volume,source=volume_jenkins_master,target=/var/jenkins_home' -p 9090:8080 -p 50000:50000 jenkins/master
docker run -d --name container_jenkins_agent --mount 'type=volume,source=volume_jenkins_agent,target=/home/jenkins' -p 22:22 jenkins/agent