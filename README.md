# Docker x AWS Lambda

This repo contains a snippet used for my personal development as a devops engineer, 
and permits us to develop lambda functions which can be deployed on AWS Lambda using ECR to store 
Docker Image


## Installation
First, go to the functions repo
```
cd functions
```
Build using Webpack: 
```
npm install && npm run build
```
## Test
Tests use jest & babel for modules & typescript compatibility
```
npm run test
```
## Add an handler : 
Create a file in handlers directory, and export your handler.

Inside of the src/index.ts file, export your handler as it is done for the example.
And then, specify the CMD in your Lambda function with the path to the handler : `index.<handler-name>`