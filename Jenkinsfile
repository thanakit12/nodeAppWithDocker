pipeline {
   
   tools{nodejs "npm"}

   agent any

    environment {
        registry = "thanakit2/nodeappdemo"
   } 

    stages {
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