# Kata Node Angular uploader

- Angular version: 10
- Node 12
- Express 4

This is an example based on a file-uploader to show how to integrate frontend and backend using docker-compose.

1. Implement a simple express server with just one route to accept file uploads.

2. Implment an angular and build a file-upload component using the angular material ui-component-library.

## Run it

```sh
git clone https://github.com/newlight77/kata-node-angular-uploader.git

make compile up
```

or 
```sh
cd frontnd && npm instaall && npm run build-prod && cd -
cd backend && npm instaall && cd -

docker-compose up -d
```

Then try accessing it [here](http://localhost).
