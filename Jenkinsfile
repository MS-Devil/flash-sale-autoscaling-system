pipeline {
agent any

stages {

    stage('Clone Code') {
        steps {
            git 'https://github.com/MS-Devil/flash-sale-autoscaling-system.git'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t flash-sale-app .'
        }
    }

    stage('Deploy to Kubernetes') {
        steps {
            sh 'kubectl apply -f k8s/deployment.yaml'
            sh 'kubectl apply -f k8s/service.yaml'
        }
    }

}
```

}
