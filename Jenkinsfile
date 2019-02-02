pipeline {
    agent {
        docker {
            image 'node:8-jessie' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Run') {
            steps {
                sh 'npm start'
            }
        }
    }
}