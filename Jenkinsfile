pipeline {
    
    agent any

    stages {
         stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
                echo "------Building-------"
            }
        }
        // stage('Build') {
        //     steps {
        //         echo '-------install dependencies---------'
        //         sh 'npm install'
        //     }
        // }
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