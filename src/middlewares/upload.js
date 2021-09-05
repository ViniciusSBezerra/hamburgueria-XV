const multer = require("multer");
const path = require("path");
const crypto = require("bcrypt");

module.exports = {
   dest: path.resolve(__dirname , "..", ".." , "uploads"),

   storage: multer.diskStorage({
       destination: (req, file, cb) =>{
           cb(null, path.resolve(__dirname ,"..", ".." , "uploads"))
       },
       filename: (req, file, cb) =>{
           crypto.randomBytes(8, (err, hash) =>{
               if(err) cb(err);

               const filename = `${hash.toString("hex")}${file.originalname}`
               cb(null, filename)
           })
       }
   }),
    limits:{
        filesize: 2 * 1024 * 1024 * 1024 * 1024 * 1024
    },

    fileFilter: (req, file, cb) =>{
        const extencoespermitidas = [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "image/pjpeg"
        ]

        if(extencoespermitidas.includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(new Error("formato invalido"))
        }
    }
}