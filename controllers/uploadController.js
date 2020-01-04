
// @desc      Get Image
// @route     GET /api/v1/imageUpload
// @access    Private
exports.getImage = (req, res, next) => {
  res.statusCode = 403;
  res.end('GET operation not supported on /imageUpload');
}

// @desc      Get all Comments
// @route     POST /api/v1/imageUpload
// @access    Private
exports.addImage = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.file);
}

// @desc      Update Image
// @route     PUT /api/v1/imageUpload
// @access    Private
exports.updateImage = (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /imageUpload');
}

exports.deleteImage = (req, res, next) => {
  res.statusCode = 403;
  res.end('DELETE operation not supported on /imageUpload');
}