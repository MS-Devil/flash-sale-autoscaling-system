pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/MS-Devil/flash-sale-autoscaling-system.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t flash-sale-app .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/deployment.yaml'
                bat 'kubectl apply -f k8s/service.yaml'
            }
        }

    }
}