pipeline {
    
     agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }

    stages {
        stage('Initial'){
            // Clone Git 
            steps{
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Build') {
            steps {
                echo '-------install dependencies---------'
                sh 'npm install'
            }
        }
        stage('Test') {

            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}