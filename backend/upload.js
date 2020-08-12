const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
    file.path = '/data/uploads/' + file.name;
    // file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', function (name, file){
    console.log('Uploaded ' + file.name);
    const readStream = fs.createReadStream(file.path);
  });

  form.on('end', () => {
    res.json();
  });
};
