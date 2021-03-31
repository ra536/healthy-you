const express = require("express");
const router = express.Router();
const db = require('../db/index')
const articles = require('../db/models/article.js')
const writer = require('../db/models/writer.js')
var multer = require('multer');
const article = require('../db/models/article.js');
// var upload = multer({ dest: './uploads' })

router.use(express.json());

//Test route to get started and gets all test objects from test table in db
router.post("/", async (req, res) => {
  try {
    console.log(req.body.writer_id); // TODO - Why is this undefined???
    const testResults = await articles.findAll({
      where: {
        writer_id: req.body.writer_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: testResults,
      debug: req.body,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/random", async (req, res) => {
    try {
        const randomResults = await articles.findOne({
            raw: true
        });
        const writerResult = await writer.findByPk(randomResults.writer_id);
        console.log(randomResults)
        console.log(writerResult);
        res.status(200).json({
            status: "success",
            data: randomResults,
            writer: writerResult
        });
    }
    catch (err){
        console.error(err.message);
    }
})

router.post("/find", async (req, res) => {
    try {
        console.log(req.body.article_id); // TODO - Why is this undefined???
        const testResults = await articles.findAll({
            where: {
                article_id: req.body.article_id
            },
            raw: true
        });
        const writerResult = await writer.findByPk(testResults[0].writer_id);
        console.log(writerResult);
        res.status(200).json({
            status: "success",
            data: testResults,
            writer: writerResult,
            debug: req.body
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
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/upload", upload.single("input-file"), (req, res) => {
  try {
    console.log(req.body.image);
    console.log("Run upload");
    res.status(201).json({
      status: "success",
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error(error.message);
  }
});

router
  .route("/uploadmulter")
  .post(upload.single("image_link"), (req, res, next) => {
    console.log(req.body);
  });

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
        image_caption: req.body.caption,
        writer_id: req.body.writer_id,
      });
      console.log(article.dataValues);
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
          image_caption: article.dataValues.caption,
          writer_id: article.dataValues.writer_id,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/delete", async (req, res) => {
  try {
    if (req.body.headline != "") {
      const article = await articles.destroy({
        where: {
          article_id: req.body.article_id,
        },
      });
      console.log(article.dataValues);
      res.status(201).json({
        status: "success",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/update", async (req, res) => {
  try {
    if (req.body.headline != "") {
      const article = await articles.findByPk(req.body.article_id);
      console.log(req.body.headline);
      console.log(article);
      article.headline = req.body.headline;
      article.category = req.body.category;
      article.summary = req.body.summary;
      article.content = req.body.content;
      article.image_data = req.body.image;
      article.image_caption = req.body.caption;
      await article.save();
      res.status(201).json({
        status: "success",
        data: {
          headline: req.body.headline,
          category: req.body.category,
          summary: req.body.summary,
          content: req.body.content,
          image_data: req.body.image,
          caption: req.body.caption,
          writer_id: req.body.writer_id,
        },
      });
    }
  } catch (err) {
    console.log(err);
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
