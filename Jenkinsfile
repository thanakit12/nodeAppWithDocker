pipeline {
   
   tools{nodejs "npm"}

   agent any

    environment {
        registry = "thanakit2/nodeappdemo_uat"
   } 

    stages {
        stage('Start'){
            steps{
                echo "--------Start-----------"
            }
        }
        stage('Build Image'){
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