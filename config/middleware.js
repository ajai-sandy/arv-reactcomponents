const fs = require('fs');
const pre_path = "src/AppComponents/";

const apiData = function (req, res, next) {
  if (req.method === 'POST' && req.url === '/api/getComponentData') {
    let body = '';
    req.on('data', chunk => {
      body += chunk; // convert Buffer to string
    });
    req.on('end', () => {
      var obj = JSON.parse(body);
      fs.readFile(pre_path + obj["componentFilePath"], function (err, data) {
        if (err) {
          throw err;
        } else {
          res.end(data);
        }
      });
    });
  } else { next(); }
};

exports.apiData = apiData;