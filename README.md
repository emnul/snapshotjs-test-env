A simple environment I use to test changes to snapshot.js

# How to Use
1. Clone this repo to your machine
2. Inside the project directory run `npm install; cd ..; git clone https://github.com/snapshot-labs/snapshot.js.git; cd snapshot.js; npm link; cd ../snapshotjs-test-env; npm link ../snapshotjs` 

This bash script will install the required packages, clone the snapshot.js repo into the parent directory of this project, and link your local snapshot.js repo to the test environment. Your changes to the local snapshot.js repo will now be reflected in the testing environment

Happy hacking!