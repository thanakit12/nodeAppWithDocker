pipeline {
   
  agent {
       docker { 
           image 'node:14-alpine' 
           label 'my-defined-label'
        }
    }
    stages {
        stage('Test') {
            steps {
                echo "PASS"
            }
        }
    }
}