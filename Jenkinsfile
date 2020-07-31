pipeline {
   
   tools{nodejs "npm"}

   agent any

     environment{
        registry = "thanakit2/nodeapp_local"
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
            steps{
                echo "-----Start Building Image Local-----------"
                script{
                    docker.build registry + ":$BUILD_NUMBER"
                }
            }
         }

         stage('Deploy for local'){
             when{
                 branch 'local'
             }
             steps{
                 echo "---------Deploy Image for local---------"
                 sh 'docker run -d -p 3000:80 ' + registry + ":$BUILD_NUMBER"
             }
         }
         
         stage("Success"){
             steps{
                 echo "Deploy Success"
             }
         }

    }
  
}