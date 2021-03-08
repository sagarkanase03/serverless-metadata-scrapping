# AGROAPP api services

This repository is created for agroapp api services.

To play with this code locally, clone this repository and do the following:

## Prerequisites

- [Node](https://nodejs.org/en/) - Ensure that your local machine has Node 8.11 or higher version installed.
- [MySQL](https://www.mysql.com/) - Install MySQL with version 5.6 or higher.

## Setup

### Clone repository from AWS CodeCommit to your local machine

### First, install global dependencies


### Install project and development dependancies

```bash
cd agroapp-api-services
npm install
```

### Configure the MySQL database

- Create database to local machine with name `agroapp_db`
- Take a look at .env file, update you're database keys

### Start the offline app

```bash
npm start
```

### To lint, use

```bash
npm run lint
```

### To run unit tests, use

```bash
npm unit-tests
```

### To run integration tests, use

```bash
npm run integration-tests
```

### If you want to run all tests, use

```bash
npm test
```
