pipeline {
agent any

stages {

    stage('Clone Code') {
        steps {
            git branch: 'main', url: 'https://github.com/MS-Devil/flash-sale-autoscaling-system.git'
        }
    }

    stage('Build Skipped (Local Docker)') {
        steps {
            echo "Docker build skipped in Jenkins (handled locally)"
        }
    }

    stage('Deploy to Kubernetes') {
        steps {
            sh 'kubectl apply -f k8s/deployment.yaml'
            sh 'kubectl apply -f k8s/service.yaml'
        }
    }

}

}
