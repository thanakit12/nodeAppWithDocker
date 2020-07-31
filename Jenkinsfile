pipeline {
   
   tools{nodejs "npm"}

   agent any

    environment {
        registry = "thanakit2/nodeappdemo"
   } 

    stages {

        stage('Clone Git'){
            steps{
                git 'https://github.com/thanakit12/nodeAppwithDocker.git'
            }
        }
        stage('Build Image'){

            // agent{
            //    docker { image 'node:alpine' }
            // }

            steps{
                echo "------Building Image-------"
                script {
                    docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Finish') {
            steps {
                echo "Build Image Success"
            }
        }
    }
}