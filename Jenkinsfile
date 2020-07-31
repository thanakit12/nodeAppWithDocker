pipeline {
   
   tools{nodejs "npm"}

   agent any

     environment{
        registry = "thanakit2/nodeapp_uat"
     }

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
           
            steps{
                echo "-----Start Building Image UAT-----------"
                script{
                    docker.build registry + ":$BUILD_NUMBER"
                }
            }
         }

         stage('Deploy Image UAT'){
             when{
                branch 'uat'
             }
             steps{
                 echo "---------Deploy Image for UAT --------"
                 sh 'docker run -d -p 3002:3002 ' + registry + ":$BUILD_NUMBER"
             }
         }
        stage('Finish'){
            steps{
                echo "------Finish----------"
            }
        }
    }  
}