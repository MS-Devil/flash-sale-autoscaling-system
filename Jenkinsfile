pipeline {
agent any

environment {
    IMAGE_NAME = "kaalbhairava/flash-sale-app"
    IMAGE_TAG = "v${BUILD_NUMBER}"
}

stages {

    stage('Clone Code') {
        steps {
            git branch: 'main', url: 'https://github.com/MS-Devil/flash-sale-autoscaling-system.git'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
        }
    }

    stage('Docker Login') {
        steps {
            withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh '''
                echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                '''
            }
        }
    }

    stage('Push Image') {
        steps {
            sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
        }
    }

    stage('Deploy to Kubernetes') {
        steps {
            sh '''
            kubectl set image deployment/flash-sale-app flash-sale-app=$IMAGE_NAME:$IMAGE_TAG
            '''
        }
    }

}

}
