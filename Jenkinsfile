// pipeline {
//     agent any

//     tools{nodejs "npm"}

//     stages {

//          stage('InitializeDocker'){
//              steps{
//                 script{
//                   def dockerHome = tool 'mydocker'
//                 }
//              }
//          }

//          stage('Initial') {
//             steps {
//                 echo "------Building-------"
//                 sh 'npm --version'
//                 sh 'npm install'
//             }
//         }
//         stage('Build Image') {
//              agent {
//                  docker {
//                     image 'node:10.0.0-alpine' 
//                     args '-p 3000:3000' 
//                 }
//             }
//             steps {
//                  script {
                     
//                     def app = docker.build('thanakit2/jenkindemo')
//                 }
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying....'
//             }
//         }
//     }
// }


node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("thanakit2/nodeapp")
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
}