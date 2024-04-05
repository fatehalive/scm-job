
pipeline {
    agent any

    stages {
        stage('Defining') {
            steps {
                    def git_repository = 'git@github.com:fatehalive/practice-cicd.git'
                    def git_branch = 'master'
                    def git_secret = 'rahasia'
            // git url: "${git_repository}", branch: "${git_branch}", credentialsId: "${git_secret}"
            }
            steps {
                    echo $git_repository
                    echo $git_branch
                    echo $git_secret
            }
        // steps {
        //     sh '''
        //         docker container run --name postgres_db -p 5432:5432 --mount "type=volume,source=postgres_volume,target=/var/lib/postgresql/data" -d postgres:latest
        //         docker container run --name redis_db -p 6379:6379 --mount "type=volume,source=redis_volume,target=/data" redis:latest
        //     '''
        // }
        }
    }
}
