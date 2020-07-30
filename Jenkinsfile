pipeline {
    agent any
    stages {
        
        stage('Clone'){
            // Clone Git 
            steps{
                git 'https://github.com/thanakit12/nodeAppwithDocker.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
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