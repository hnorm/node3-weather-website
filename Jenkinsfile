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
                dockerfile {
                    args 'npm install'
                }
            }
            steps {
                echo 'Testing..'
                sh 'node --version'
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