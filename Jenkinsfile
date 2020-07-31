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
<<<<<<< HEAD
                environment{
                    registry = "thanakit2/nodeapp_local"
                }
                steps{
                    echo "-----Start Building Image Local-----------"
                }
            }
            when{
                branch 'dev'
                environment{
                    registry = "thanakit2/nodeapp_UAT"
                }
                steps{
                    echo "-----Start Building Image UAT-----------"
                    script{
                         docker.build registry + ":$BUILD_NUMBER"
                    }
=======
            }
            environment{
                registry = "thanakit2/nodeapp_local"
            }
            steps{
                echo "-----Start Building Image Local-----------"
                script{
                    docker.build registry + ":$BUILD_NUMBER"
>>>>>>> local
                }
            }
         }
        stage('Finish'){
            steps{
                echo "------Finish----------"
            }
        }
<<<<<<< HEAD
    }  
=======
    }
  
>>>>>>> local
}