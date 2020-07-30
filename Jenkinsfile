pipeline {
   
   agent none

    tools{nodejs "npm"}

    stages {

         stage('InitializeDocker'){
              agent {
                docker {
                // Set both label and image
                label 'docker'
                image 'node:7-alpine'
                args '--name docker-node' // list any args
                }
            }
            steps{
                echo "Initailize"
            }
         }

         stage('Initial') {
            steps {
                echo "------Building-------"
                sh 'npm --version'
                sh 'npm install'
            }
        }
         stage('Docker node test') {
          
            steps {
                // Steps run in node:7-alpine docker container on docker slave
                sh 'node --version'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}