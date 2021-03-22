const express = require('express');
const router = express.Router();
const db = require('../db/index')
const articles = require('../db/models/article.js')
var multer = require('multer');
const article = require('../db/models/article.js');
// var upload = multer({ dest: './uploads' })

router.use(express.json());

//Test route to get started and gets all test objects from test table in db
router.get("/", async (req, res) => {
    try {
        const testResults = await articles.findAll({
            raw: true
        });
        console.log(testResults);
        res.status(200).json({
            status: "success",
            data: testResults
        })
    }
    catch (err) {
        console.error(err.message);
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/upload", upload.single("input-file"), (req, res) => {
    try {
        console.log(req.body.image);
        console.log("Run upload");
        res.status(201).json({
            status: "success",
            message: "File uploaded successfully"
        });
    } catch (error) {
        console.error(error.message);
    }
});

router.route("/uploadmulter")
    .post(upload.single('image_link'), (req, res, next) => {
        console.log(req.body);

    })

// router.route("/uploadbase")
//     .post((req, res, next) => {
//         if (req.body.headline != "") {
//             const article = await articles.create({
//                 headline: req.body.headline,
//                 category: req.body.category,
//                 summary: req.body.summary,
//                 content: req.body.content,
//                 image: req.body.image,
//                 caption: req.body.caption
//             });
//             console.log(article.dataValues)
//             res.status(201).json({
//                 status: "success",
//                 data: {
//                     article_id: article.dataValues.article_id,
//                     headline: article.dataValues.headline,
//                     category: article.dataValues.category,
//                     summary: article.dataValues.summary,
//                     content: article.dataValues.content,
//                     publication_date: article.dataValues.publication_date,
//                     image: article.dataValues.image,
//                     caption: article.dataValues.caption
//                 }
//             })
//         }
//     });

router.post("/create", async (req, res) => {
    try {
        if (req.body.headline != "") {
            const article = await articles.create({
                headline: req.body.headline,
                category: req.body.category,
                summary: req.body.summary,
                content: req.body.content,
                image_data: req.body.image,
                caption: req.body.caption
            })
            console.log(article.dataValues)
            res.status(201).json({
                status: "success",
                data: {
                    article_id: article.dataValues.article_id,
                    headline: article.dataValues.headline,
                    category: article.dataValues.category,
                    summary: article.dataValues.summary,
                    content: article.dataValues.content,
                    publication_date: article.dataValues.publication_date,
                    image_data: article.dataValues.image_data,
                    caption: article.dataValues.caption
                }
            })
        }
    }
    catch (err) {
        console.log(err)
    }
});

// Route to create a test object in DB
// router.post("/", async (req, res) => {
//     // Express JSON middleware allows for results to be in body
//     try {
//         const tests = await test.create({
//             test_id: req.body.test_id,
//             content: req.body.content,
//         })
//         console.log(tests.dataValues)
//         res.status(201).json({
//             status: "success",
//             data: {
//                 test_id: tests.dataValues.test_id,
//                 content: tests.dataValues.content
//             }
//         })
//     }
//     catch (err) {
//         console.log(err)
//     }
// });

module.exports = router;