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
            post{
                success{
                    sh 'docker run -d -p 3000:80 ' + registry + ":$BUILD_NUMBER"
                    echo "Start On Localhost://"
                }
            }
         }

    }
  
}