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
    $ npm install

## Configure app

create a `.env` file then add url to your db and other requirements.

-   PORT=
-   API_URL=
-   API_KEY=

## Running the project - development

    $ npm run dev 

## Running the project - production

    $ npm run build 
    $ npm run start 
     

## Running Tests

    $ npm test 

## Assumptions

-   I assumed there was no need for authentication


## Whats Left To Do

-   Add authentication
-   Protect the routes by authentication
-   Log application errors and messages into a file
-   Setup a database and make sure each user have an account


## Documentation

-   [Postman Collection](https://documenter.getpostman.com/view/3064040/TVssk912)
-   [Project Management/Issues Tracker](https://www.pivotaltracker.com/n/projects/2482261)