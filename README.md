A simple environment I use to test changes to snapshot.js

# How to Use
1. Clone this repo to your machine
2. Open up a terminal window and navigate to the project directory.
3. In the terminal window run `npm install; cd ..; git clone https://github.com/snapshot-labs/snapshot.js.git; cd snapshot.js; yarn; npm link; cd ../snapshotjs-test-env; npm link ../snapshotjs` This bash script will install the required packages, clone the snapshot.js repo into the parent directory of this project, and link your local snapshot.js repo to the test environment.
4. Run `npm run dev` to start your test env
5. Open a second terminal window and run `cd ../snapshot.js; yarn dev;` to make sure your snapshot.js are recompiled and bundled as you make changes.

Happy hacking!