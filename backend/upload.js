const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    console.log('file', file.name);
    const readStream = fs.createReadStream(file.path);
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
