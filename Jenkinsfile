pipeline {
    
    def app

    agent any

    tools{nodejs "npm"}

    stages {
         stage('Initial') {
            steps {
                echo "------Building-------"
                sh 'npm --version'
                sh 'npm install'
            }
        }
        stage('Build Image') {
             agent {
                 docker {
                    image 'node:6-alpine' 
                    args '-p 3000:3000' 
                }
            }
            steps {
                 script {
                     app = docker.build('thanakit2/jenkindemo')
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}