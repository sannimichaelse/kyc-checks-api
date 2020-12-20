## KYC CHECKS API

A simple REST API developed using node and express with typescript to perform KYC Checks using An API

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn


## Install

    $ git clone https://github.com/sannimichaelse/kyc-checks-api.git
    $ cd kyc-checks-api
    $ yarn install or npm install

## Configure app

create a `.env` file then add the following values.

-   PORT=
```{r echo=FALSE, eval=FALSE}
PORT - This is the port the application will run on. The default is 3002
```
-   API_URL=
```{r echo=FALSE, eval=FALSE}
API_URL - This is the URL of the Third party API used to perform the kyc checks
```
-   API_KEY=
```{r echo=FALSE, eval=FALSE}
API_KEY - This is the API_KEY of the Third party API used to perform the kyc checks
```
-   NODE_ENV=
```{r echo=FALSE, eval=FALSE}
NODE_ENV - This is the environment the application is running on. It can be one of development,test and production. The default is development
```

## Running the project - development

    $ npm run dev 

## Running the project - production

    $ npm run build 
    $ npm run start 
     

## Running Tests

    $ npm test 

## Running Coverage

    $ npm run coverage 

## Assumptions

-   I assumed there was no need for authentication


## Whats Left To Do

-   Add authentication using JWT
-   Protect the routes
-   Log application errors and messages into a file
-   Setup a database and make sure each user have an account before performing kyc checks


## Documentation

-   [Postman Collection](https://documenter.getpostman.com/view/3064040/TVssk912)
-   [Project Management/Issues Tracker](https://www.pivotaltracker.com/n/projects/2482261)