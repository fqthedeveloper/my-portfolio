pipeline {
  agent any

  tools {
    nodejs "NodeJS_18" // Add this tool name in Jenkins config
  }

  environment {
    REPO_URL = 'https://github.com/fqthedeveloper/my-portfolio.git'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git url: "${REPO_URL}"
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build React App') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Serve App') {
      steps {
        sh 'npm install -g serve'
        sh 'serve -s build -l 3000 &'
      }
    }
  }

  post {
    success {
      echo 'App is deployed at port 3000'
    }
  }
}
