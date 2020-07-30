pipeline {
    agent any
    stages {
        stage('Initial'){
            // Clone Git 
            sh 'node --version'
            sh 'npm --version'
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