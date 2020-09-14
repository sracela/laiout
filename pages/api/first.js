const formidable = require('formidable');

export const config = {
    api: {
      bodyParser: false
    }
}

export default async(req, res) => {
    if (req.url == '/api/first' && req.method.toLowerCase() == 'post') {

      console.log("***FIRST***");

      const form = new formidable.IncomingForm();
      form.uploadDir = '/mnt/datos/projects_hdd/web/react/pix2code/public/tmp/input';
      form.on('fileBegin', function(name, file) {
        file.path = form.uploadDir + "/" + file.name;
      });
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err)
        console.log(filename)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ filename: `${filename}` }))
      });
    }
}