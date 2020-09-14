
export default (req, res) => {
    if (req.url == '/api/first' && req.method.toLowerCase() == 'post') {

      console.log("***FIRST***");
      res.status(200).json(req.body);
    }
}