pipeline {
    agent any

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
        stage('Build Image') {
             agent {
                 docker "images"
                //  docker {
                //     image 'node:10.0.0-alpine' 
                //     args '-p 3000:3000' 
                // }
            }

            //   agent {
            //     docker "code-style-check-image"
            //    }
            steps{
                echo "-------Build-------"
            }

        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}