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
        stage('Finish'){
            steps{
                echo "------Finish----------"
            }
        }
    }  
}