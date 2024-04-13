
pipeline {
    agent any

    stages {
        stage('Print SCM Variables') {
            steps {
                echo "${GH_REPOSITORY_SECRET}"
                echo "${GH_REPOSITORY_VARIABLE}"
            }
        }
        stage('Print Jenkins Global Variables') {
            steps {
                echo "${JOB_NAME} akan dibuilt sesaat lagi"
                echo "This Job triggered by ${GIT_AUTHOR_NAME}"
            }
        }
    }
}
