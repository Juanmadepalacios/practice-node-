const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

router.get("/notes/add", (req, res) => {
  res.render("notes/new-note");
});

router.post("/notes/new-note", async (req, res) => {
  //console.log(req.body);
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please write a Title" });
  }
  if (!description) {
    errors.push({ text: "Please write a Description" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Note({ title, description });
    await newNote.save();
    res.redirect("/notes");
  }
});

router.get("/notes", async (req, res) => {
  await Note.find().then((documentos) => {
    const contexto = {
      notes: documentos.map((documento) => {
        return {
          title: documento.title,
          description: documento.description,
        };
      }),
    };
    res.render("notes/all-notes", {
      notes: contexto.notes,
    });
  });
});

module.exports = router;
