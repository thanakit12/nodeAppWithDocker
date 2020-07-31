pipeline {
   
   tools{nodejs "npm"}

   agent any

    stages{
        stage('Initial'){
            steps{
                echo "-----Initial----------"
            }
        }
        stage('Build Image For local'){
            when{
                branch 'local'
            }
            environment{
                registry = "thanakit2/nodeapp_local"
            }
            steps{
                echo "-----Start Building Image Local-----------"
                script{
                    docker.build registry + ":$BUILD_NUMBER"
                }
            }
         }

         stage('Build Image For UAT'){
            when{
                branch 'uat'
            }
            environment{
                registry = "thanakit2/nodeapp_UAT"
            }
            steps{
                echo "-----Start Building Image UAT-----------"
                script{
                    docker.build registry + ":$BUILD_NUMBER"
                }
            }
         }
        stage('Finish'){
            steps{
                echo "------Finish----------"
            }
        }
    }  
}