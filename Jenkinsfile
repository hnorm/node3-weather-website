pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "I'm executing in node: ${env.NODE_NAME}"
                sh 'node --version'
                sh 'npm -v'
                sj 'npm install -g npm@latest'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo "I'm executing in node: ${env.NODE_NAME}"
                sh 'node --version'
                sh 'npm -v'
                sh 'npm install'
                sh 'npm list'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo "I'm executing in node: ${env.NODE_NAME}"
            }
        }
    }
}