pipeline {
agent any

environment {
    DOCKER_IMAGE = "your-dockerhub-username/flash-sale-app"
}

stages {

    stage('Clone Code') {
        steps {
            git branch: 'main', url: 'https://github.com/MS-Devil/flash-sale-autoscaling-system.git'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t $DOCKER_IMAGE:latest .'
        }
    }

    stage('Docker Login') {
        steps {
            withCredentials([usernamePassword(credentialsId: '44912b51-4823-4682-9d85-d3ab5910b030', usernameVariable: 'Kaalbhairava', passwordVariable: 'Medsak@2002')]) {
                sh 'echo $PASS | docker login -u $USER --password-stdin'
            }
        }
    }

    stage('Push Image') {
        steps {
            sh 'docker push $DOCKER_IMAGE:latest'
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
