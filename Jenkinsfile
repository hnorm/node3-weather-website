pipeline {
    stages {
        stage('Build') {
            agent {
                dockerfile
            }
            steps {
                echo 'Building..'
                sh 'node --version'
            }
        }
        stage('Test') {
            agent {
                node:18
            }
            steps {
                echo 'Testing..'
                sh 'node --version'
                sh 'npm install'
                sh 'npm list'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}