// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const formidable = require('formidable');

// let base64String = 
// // Remove header
// let base64Image = base64String.split(';base64,').pop();
export const config = {
  api: {
    bodyParser: false
  }
}

export default async(req, res) => {
  if (req.url == '/api/hello' && req.method.toLowerCase() == 'post') {
    console.log("hello")
    const form = new formidable.IncomingForm();

    form.uploadDir = '/mnt/datos/projects_hdd/web/react/pix2code/public/tmp/input';
    form.on('fileBegin', function(name, file) {
      file.path = form.uploadDir + "/" + file.name;
  })
    // form.parse(req);

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      // res.status(200).json({ fields, files })
      let path = "/home/sracela/data/projects/coding/python/pix2code/webapp/webapp.py";

      var filename =  files.file.name.split('.')[0];
      executeScript(path, filename)

      console.log(filename)
      // function to execute python script

    })

    async function executeScript(path, filename) {
      try {
      const { stdout, stderr } = await exec(`python3 ${path} ${filename} `); 
      // const { stdout, stderr } = await fetch(url);
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
      res.statusCode = 200
      res.json(stdout)
      } catch (e) {
      // console.error(e); 
      res.statusCode = 500
      res.json(e)
      }
      }
  }

  
  // res.statusCode = 200
}
