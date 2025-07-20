const express = require('express');
const router = express.Router();
const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

router.get('/', (req, res) => {
  res.render('pdf-panel');
});

router.get('/fetch-questions', async (req, res) => {
  try {
    const topic = req.query.topic;
    const filePath = path.join(__dirname, '../db', `${topic}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Topic not available");
    }

    const data = JSON.parse(fs.readFileSync(filePath));

    const questionPDF = new PDFDocument();
    const solutionPDF = new PDFDocument();

    const questionPath = path.join(__dirname, '../output/questions.pdf');
    const solutionPath = path.join(__dirname, '../output/solutions.pdf');

    questionPDF.pipe(fs.createWriteStream(questionPath));
    solutionPDF.pipe(fs.createWriteStream(solutionPath));

    data.questions.forEach((q, i) => {
      questionPDF.fontSize(12).text(`Q${i + 1}: ${q.question}`);
      questionPDF.moveDown();
      solutionPDF.fontSize(12).text(`Q${i + 1}: ${q.question}`);
      solutionPDF.text(`Solution: ${q.solution}`);
      solutionPDF.moveDown();
    });

    questionPDF.end();
    solutionPDF.end();

    res.send("PDFs generated successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
