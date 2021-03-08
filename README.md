# Serverless metadata scrapping
This repository is created for Serverless-metadata-scrapping project, which has api to scrap webpage metadata.
To play with this code locally, clone this repository and do the following:

## Prerequisites
- [Node](https://nodejs.org/en/) - Ensure that your local machine has Node 812.0 or higher version installed.
- [Serverless](https://www.serverless.com/) - Ensure that your local machine has serverless framework insatlled.
- [AWS] - Ensure you have aws keys configured in your machine.

## Setup
- to work on this project you need to have node.js and serverless globally installed in your machine

### First, install global dependencies

```bash
npm install -g
```
### Install project and development dependancies
```bash
npm install
```
### Start the offline app

```bash
npm start
```
### Deploy code on AWS

```bash
Serverless deploy --test
```