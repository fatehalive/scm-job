pipeline {
    agent any

    environment {
        GH_SECRET= "${env.GH_SECRET}"
        GH_VARIABLE= "${env.GH_REPO_VARIABLE}"
        GH_VAR_HARDCODE= "asdf"
    }

    stages {
        stage('Print Environment Variables') {
            steps {
                echo "GH_SECRET: ${env.GH_SECRET}"
                echo "GH_VARIABLE: ${env.GH_REPO_VARIABLE}"
                echo "GH_VAR_HARDCODE: ${env.GH_VAR_HARDCODE}"
            }
        }
        // Lanjutan alur kerja (pipeline) Anda...
    }
}
