pipeline {
    agent {
        label 'docker' 
    }

    tools{nodejs "npm"}

    stages {

         stage('InitializeDocker'){
             steps{
                script{
                  def dockerHome = tool 'mydocker'
                }
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
            agent {
                docker {
                // Set both label and image
                label 'docker'
                image 'node:7-alpine'
                args '--name docker-node' // list any args
                }
            }
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