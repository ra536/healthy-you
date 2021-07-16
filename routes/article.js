const express = require("express");
const router = express.Router();
const multer = require("multer");
const articles = require("../db/models/article.js");
const writer = require("../db/models/writer.js");
const { Sequelize, Op } = require("sequelize");
//const { sequelize } = require("../db/models/writer.js");
//const { array } = require("yup/lib/locale");
// var upload = multer({ dest: './uploads' })

router.use(express.json());

// Test route to get started and gets all test objects from test table in db
router.post("/", async (req, res) => {
  try {
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

// Find the writer's works.
router.post("/findWriter", async (req, res) => {
  try {
    const writerResult = await writer.findByPk(req.body.writer_id);
    res.status(201).json({
      status: "success",
      data: writerResult,
    });
  } catch (err) {
    res.json({
      status: err.errors,
    });
  }
});


router.get("/random", async (req, res) => {
  try {
    // const articleRegion = req.body.currentRegion;
    const randomResults = await articles.findOne({
      //where: {
      //  region: {
      //    [Op.contains]: [articleRegion]
      //  },
      //},
      order: [
        Sequelize.fn('RANDOM'),
      ],
      raw: true,
    });
    const writerResult = await writer.findByPk(randomResults.writer_id);
    console.log(randomResults);
    console.log(writerResult);
    res.status(200).json({
      status: "success",
      data: randomResults,
      writer: writerResult,
    });
  } catch (err) {
    console.error(err.message);
  }
});


router.post("/find", async (req, res) => {
  try {
    console.log(req.body.article_id); // TODO - Why is this undefined???
    const testResults = await articles.findAll({
      where: {
        article_id: req.body.article_id,
      },
      raw: true,
    });
    
    const writerResult = await writer.findByPk(testResults[0].writer_id);
    console.log("writer results", writerResult);
    
    res.status(200).json({
      status: "success",
      data: testResults,
      writer: writerResult,
      debug: req.body,
    });
  } catch (err) {
    console.error(err.message);
  }
});


router.post("/findByWriterID", async (req, res) => {
  try {
    const articleResult = await articles.findAll({
      where: {
        writer_id: req.body.writer_id,
      },
      raw: true,
    });
    const writerResult = await writer.findByPk(articleResult[0].writer_id);
    res.status(200).json({
      status: "success",
      data: articleResult,
      writer: writerResult,
    });
  } catch (err) {
    console.log(err.message);
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

const upload = multer({ storage, fileFilter });

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



router.post("/create", async (req, res) => {
  try {
    if (req.body.headline != "") {
      const article = await articles.create({
        headline: req.body.headline,
        category: req.body.category,
        summary: req.body.summary,
        content: req.body.content,
		region: req.body.region,
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
		  region: article.dataValues.region,
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
	  article.region = req.body.region;
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
		  region: req.body.region,
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







router.post("/category", async (req, res) => {
  try {
    // console.log(req.body);
    const articleResults = await articles.findAll({
      where: {
        category: req.body.category,
        region: {
          [Op.contains]: [req.body.currentRegion]
        },
        [Op.or]:{
          headline: {[Op.iLike]: '%'+req.body.filter+'%'},
          summary: {[Op.iLike]: '%'+req.body.filter+'%'},
          content: {[Op.iLike]: '%'+req.body.filter+'%'}
        }
      },
      raw: true,
    });

    console.log(articleResults);

    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Return articles set in the same category. (For current region)
router.post("/numCategory", async (req, res) => {
  try {
    const name = req.body.category;
    const articleRegion = req.body.currentRegion;
    const num = req.body.num;
    console.log(req.body);

    const articleResults = await articles.findAll({
      where: {
        category: name,
        region: {
          [Op.contains]: [articleRegion]
        }
      },
      limit: num,
      raw: true,
    });

    console.log(articleResults);

    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Return the most recently created articles. (For current region)
router.post("/latest", async (req, res) => {    //Adding a Region filter for the query 
  try {
    const count = req.body.numOfArticles;
	const articleRegion = req.body.currentRegion;
    const articleResults = await articles.findAll({
      //offset: skip,
      where: {
		region: {
			[Op.contains]: [articleRegion]
		},
        [Op.not]: [
          {category: ["Blog"]},
        ]
      },
      order: [
        ["created_at", "DESC"]
      ],
      limit: count,
      raw: true,
    })
    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Return articles written by the same author. (For current region)
router.post("/author", async (req, res) => {
  try {
    const id = req.body.article_id;
    const count = req.body.numOfArticles;
    const articleRegion = req.body.region;
    console.log(req.body);

    const results = await articles.findOne({
      where: {
        article_id: id,
      },
      raw: true,
    });

    const writer = results.writer_id;

    const articleResults = await articles.findAll({
      where: {
        writer_id: writer,
        article_id: {
          [Op.ne]: id,
        },
        region: {
          [Op.contains]: [articleRegion]
        }
      },
      limit: count,
    })

    console.log(articleResults)

    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Return articles set in the same category. (For current region)
router.post("/sameCategory", async (req, res) => {
  try {
    const id = req.body.article_id;
    const count = req.body.numOfArticles;
    const articleRegion = req.body.region;
    console.log(req.body);

    const results = await articles.findOne({
      where: {
        article_id: id,
      },
      raw: true,
    });

    const category = results.category;

    const articleResults = await articles.findAll({
      where: {
        category: category,
        article_id: {
          [Op.ne]: id,
        },
        region: {
          [Op.contains]: [articleRegion]
        }
      },
      limit: count,
    })
    
    console.log(articleResults)

    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Increment the number of page views for the article.
router.post("/pageView", async (req, res) => {
  try {
    const id = req.body.id;
    console.log(req.body);

    const articleResults = await articles.findByPk(req.body.id);

    console.log(articleResults);
    articleResults.page_views += 1
    await articleResults.save();

    res.status(200).json({
      status: "success",
      data: {
        page_views: req.body.page_views,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});


router.post("/mostViewed", async (req, res) => {
  try {
    const count = req.body.numOfArticles;
    const articleRegion = req.body.region;
    console.log(req.body);
    const articleResults = await articles.findAll({
      where: {
        region: {
          [Op.contains]: [articleRegion]
        }
      },
      order: [
        ["page_views", "DESC"]
      ],
      limit: count,
    });
    console.log("most viewed articles:", articleResults)

    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Return the most viewed articles of a particular category. (For current region)
router.post("/mostViewedCategory", async (req, res) => {
  try {
    const count = req.body.numOfArticles;
    const category = req.body.category;
    const articleRegion = req.body.region;
    console.log(req.body);
    const articleResults = await articles.findAll({
      where: {
        category: category,
        region: {
          [Op.contains]: [articleRegion]
        }
      },
      order: [
        ["page_views", "DESC"]
      ],
      limit: count,
    });
    console.log("most viewed articles:", articleResults)

    res.status(200).json({
      status: "success",
      data: articleResults,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Return the latest articles of a particular category. (For current region)
router.post("/latestCategory", async (req, res) => {
  try {
    const count = req.body.numOfArticles;
    const category = req.body.category;
    const articleRegion = req.body.region;
    const articleResults = await articles.findAll({
      where: {
        category: category,
        region: {
          [Op.contains]: [articleRegion]
        }
      },
      order: [
        ["created_at", "DESC"]
      ],
      limit: count,
      raw: true,
    })

    res.status(200).json({
      status: "success",
      data: articleResults,
    });

  } catch (error) {
    console.log(error.message);
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

module.exports = router;
