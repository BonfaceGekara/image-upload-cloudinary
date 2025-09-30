import Image from "../models/Image.js";
import cloudinary from "../config/cloudinary.js";

export default async function  saveImage (req,res) {
    try {
        const name =req.body.name;

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'images_demo',
            public_id: name,
            overwrite: true,
        });

        console.log(result);

        const newImage = new Image({
            name,imageLink: result.secure_url
        })

        await newImage.save();
        res.json({'result' : 'Image saved successfully'});

    } catch(err) {
        console.error(err);
    }
}
