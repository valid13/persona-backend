pipeline {
    agent none
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
            agent any
            steps {
                sh "ls -l"
                sh "echo $PWD"
                script {
                    node {
                        docker.build('persona-backend:1.0')
                    }
                }
            }
        }
    }
}