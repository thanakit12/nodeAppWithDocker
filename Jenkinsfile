pipeline {
   
   tools{nodejs "npm"}

   agent any

    when{
        branch 'local'
        environment{
            registry = "thanakit2/nodeapp_local"
        }
        stages{
            stage('Initial'){
                steps{
                    echo "Start Environment local"
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
            stage('Finish'){
                steps{
                    echo "Build Image of local Success"
                }
            }
        }
    }
    stages {

        stage("Initial"){
            when{
                branch 'local'
                environment {
                 registry = "thanakit2/nodeappdemo"
                } 
            }
            when{
                branch 'dev'
                 environment {
                 registry = "thanakit2/nodeappdemo_UAT"
                } 
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