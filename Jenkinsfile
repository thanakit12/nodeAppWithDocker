pipeline {
    agent any
    stages {
        stage('Clone Git '){
            // Clone Git 
            steps{
                git 'https://github.com/thanakit12/nodeAppwithDocker.git'
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