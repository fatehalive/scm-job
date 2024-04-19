
pipeline {
    agent any

    environment {
        GH_SECRET=env.GH_SECRET
        GH_VARIABLE=env.GH_REPO_VARIABLE
    }

    stages {
        stage('Print SCM Variables') {
            steps {
                echo "${GH_SECRET}"
                echo "${GH_VARIABLE}"
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
