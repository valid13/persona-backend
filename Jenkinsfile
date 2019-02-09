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
                        def name = "persona-backend"
                        def image = docker.build('persona-backend:1.0')
                        sh 'docker stop persona-backend && docker rm '+ name
                        image.run('-p 90:90', '--name ' + name)
                    }
                }
            }
        }
    }
}