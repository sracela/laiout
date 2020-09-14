const fs = require("fs");
const util = require('util');


// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

export default (req, res) => {

  console.log(req.body.filename)

  const filename = '/mnt/datos/projects_hdd/web/react/pix2code/public/tmp/output/' + req.body.filename
  // const filename = req.body.filename
  let data = {}

  function getGui() {
    return  readFile(filename + '.gui','utf8')
  }

  function getXML() {
    return readFile(filename + '.xml', 'utf8')
  }
    // Can't use `await` outside of an async function so you need to chain
  // with then()
  getGui().then(guiData => {
    // console.log(guiData);
    data.gui = guiData;
  })
  getXML().then(xmlData => {
    // console.log(xmlData);
    data.xml = xmlData;
    // console.log(data);
    res.status(200).json(data);
  })

}


// const moment = require("moment");
// const fs = require("fs");
// const formidable = require("formidable");
// import multer from "multer";



// export const config = {
//     api: {
//         bodyParse: false
//     }
// }

// const uploadForm = next => (req, res) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const form = formidable.IncomingForm({
//           multiples: true,
//           keepExtensions: true
//         });
//         form.once("error", console.error);
//         form.on("fileBegin", (name, file) => {
//             console.log("start uploading: ", file.name);
//           }).on("aborted", () => console.log("Aborted..."));
//         form.once("end", () => {
//           console.log("Done!");
//         });
//         await form.parse(req, async (err, fields, files) => {
//           if (err) {
//             throw String(JSON.stringify(err, null, 2));
//           }
//           console.log(
//             "moving file: ",
//             files.file.path,
//             " to ",
//             `public/tmp/input/${files.file.name}`
//           );
//         await fs.rename(
//           files.file.path,
//           `public/tmp/input/${files.file.name}`,
//           err => {
//             if (err) throw err;
//           }
//         );
//         //   fs.renameSync(files.file.path, `public/tmp/input/${files.file.name}`);
//           req.form = { fields, files };
//           return resolve(next(req, res));
//         });
//       } catch (error) {
//         return resolve(res.status(403).send(error));
//       }
//     });
//   };
  
//   function handler(req, res) {
//     try {
//       if (req.method === "POST") {
//           console.log("hola")
//         res.status(200).send(req.form);
//       } else {
//         throw String("Method not allowed");
//       }
//     } catch (error) {
//       res.status(400).json({ message: JSON.stringify(error, null, 2) });
//     }
//   }
  
//   export default uploadForm(handler);


// // export default async (req, res) => {
// //     res.statusCode = 200

// //     console.log(req);
// //     const form = formidable({
// //         multiple: true,
// //         uploadDir: '../../public/tmp/input/',
// //     })

// //     form.keepExtensions = true;
// //     form.keepFileName = true;

// //     form.parse(req, function (err, fields, files) {
// //         console.log(req.bodyParse)
// //         var oldpath = files.image.path;
// //         var newpath = '../../public/tmp/input/' + files.image.name;
// //         fs.rename(oldpath, newpath, function (err) {
// //             if (err) throw err;
// //             res.write('File uploaded and moved!');
// //             res.end();
// //         });
// //     })

// // }

// // var storage = multer.diskStorage({
// //     destination: function(req, file, cb) {
// //       cb(null, "public");
// //     },
// //     filename: function(req, file, cb) {
// //       cb(null, "video.mp4");
// //     }
// //   });
  
// //   var upload = multer({ storage: storage });
  
// //   export default async (req, res) => {
// //     upload.single("video")(req, {}, err => {
// //       res.send(req.file.path);
// //       res.end();
// //       console.log(req.file); // do something with the file
// //     });
// //   };