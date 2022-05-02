pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "I'm executing in node: ${env.NODE_NAME}"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo "I'm executing in node: ${env.NODE_NAME}"
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