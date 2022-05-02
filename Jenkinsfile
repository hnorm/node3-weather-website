pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                dockerfile true
            }
            steps {
                echo 'Building..'
                sh 'node --version'
            }
        }
        stage('Test') {
            agent {
                docker 'node:18'
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
            agent any
            steps {
                echo 'Deploying....'
            }
        }
    }
}