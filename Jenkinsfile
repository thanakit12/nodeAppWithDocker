pipeline {
    
    agent any

    tools{nodejs "npm"}
    stages {
         stage('Build') {
            steps {
                // nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                //     sh 'npm config ls'
                // }
                echo "------Building-------"
                sh 'npm --version'
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