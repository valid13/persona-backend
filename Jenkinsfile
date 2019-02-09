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
                sh "ls -l /var/jenkins_home/workspace/persona-backend@2"
                sh "echo $PWD"
                script {
                    node {
                        checkout scm
                        docker.build('persona-backend:1.0')
                    }
                }
            }
        }
    }
}