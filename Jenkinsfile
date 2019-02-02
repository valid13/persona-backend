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
        stage('Deploy'){
            steps {
                sh 'docker build -t persona-back-end --no-cache .'
                sh 'docker tag persona-back-end localhost:3000/persona-back-end'
                sh 'docker push localhost:3000/react-app'
                sh 'docker rmi -f persona-back-end localhost:3000/persona-back-end'
            }
        }
    }
}