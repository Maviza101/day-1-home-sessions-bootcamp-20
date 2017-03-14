# How to run this project
* Clone this repo.
```bash
git clone https://github.com/Maviza101/day-1-home-sessions-bootcamp-20.git
```
* Install Node JS. Full instructions can be found [here](https://nodejs.org/en/download/).
<<<<<<< HEAD
* Install Jasmine using:
```bash
npm install -g jasmine
```
* Open a terminal and `cd` (i.e navigate) into the directory of the repo you cloned above.
* Enter these commands:

```bash
export JASMINE_CONFIG_PATH=tests/jasmine.json
jasmine
```

## Important Notice
Note that this project uses a custom configuration for Jasmine, which can be found in 
`tests/jasmine.json`. So every time you try to run the project, you need to run the 
`export` command above. If you want to set the config file permanently, you may 
consult [this link](http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables) for instructions on that.
=======
* Open a terminal and `cd` (i.e navigate) into the directory of the repo you cloned above.
* Enter this command:
```bash
npm test
```
* That's all! NPM will install all any required dependencies and run the provided tests on the project.

## Adding your own tests
* Just add them under the `tests` directory and save them with the format `something_spec.js`.
* Run `npm` tests again and it will all tests, both new and old.
>>>>>>> feat/data-types
