pipeline {
agent any

environment {
    DOCKER_IMAGE = "Kaalbhairava/flash-sale-app"
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
withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
sh '''
echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
'''
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
