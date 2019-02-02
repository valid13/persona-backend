pipeline {
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:8-jessie' 
                    args '-p 3000:3000' 
                }
            }
            steps {
                sh 'npm install' 
            }
        }
        stage('Deploy'){
            steps {
                script {
                    docker.build + ":$BUILD_NUMBER"
                }
            }
        }
    }
}