import AWS from "aws-sdk"
import multer from "multer"
import multerS3 from "multer-s3"

import config from "../config.js"

AWS.config.update({
  accessKeyId: config.awsAccess.key,
  secretAccessKey: config.awsSecret.key,
  region: "us-east-2"
})

/**
 * access key: AKIAW3RYDDORK3VTRYVX
secret access key: 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

 */


const s3 = new AWS.S3()

const uploadImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.s3Bucket.name,
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

export default uploadImage