pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/fqthedeveloper/my-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-portfolio')
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop previous container if running
                    sh 'docker rm -f portfolio || true'
                    // Run new container
                    docker.image('my-portfolio').run('-d -p 3000:80 --name portfolio')
                }
            }
        }
    }
}
