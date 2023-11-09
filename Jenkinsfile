pipeline {
    agent any
 
    stages {

        stage("Node version") {
            steps {
                sh "node -v" 
            }
        } 

        stage("Build - Production") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }

        stage("Deploy - Production") {
            steps {
                sh "sudo rm -rf /var/www/html/batlaz"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/html/batlaz/"
            }
        }
    }
}