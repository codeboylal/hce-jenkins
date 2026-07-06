// Beginner-friendly pipeline: 3 stages, each doing one clear thing.
pipeline {
    agent any

    environment {
        DOCKER_IMAGE   = 'devops-practice-site'
        CONTAINER_NAME = 'devops-practice-site-container'
    }

    stages {

        stage('Get Code') {
            steps {
                echo 'Step 1: pulling the latest code from GitHub'
                git branch: 'main', url: 'https://github.com/codeboylal/hce-jenkins.git'
            }
        }

        stage('Build Image') {
            steps {
                echo 'Step 2: building a Docker image from the Dockerfile'
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Deploy') {
            steps {
                echo 'Step 3: stopping the old container (if one exists)'
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"

                echo 'Step 4: starting a new container from the fresh image'
                sh "docker run -d --name ${CONTAINER_NAME} -p 8080:80 ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        success {
            echo 'Done! Visit http://<your-ec2-public-ip>:8080 to see the site.'
        }
        failure {
            echo 'Pipeline failed — scroll up to see which stage broke and why.'
        }
    }
}
