const { database } = require("../database/connection")
const Crud = require("../database/models/CRUD")
const { Lotes, Itens_lote } = database.models
const router = require("express").Router()

const itens_lote = new Crud(Itens_lote)
const lotes = new Crud(Lotes)

router.get("/", async (req, res) => lotes.read(req, res))

router.post("/", async (req, res) => lotes.create(req, res))

router.put("/", async (req, res) => lotes.update(req, res))

router.delete("/", async (req, res) => lotes.delete(req, res))


router.get("/itens", async (req, res) => itens_lote.read(req, res))

router.post("/itens", async (req, res) => itens_lote.create(req, res))

router.put("/itens", async (req, res) => itens_lote.update(req, res))

router.delete("/itens", async (req, res) => itens_lote.delete(req, res))


module.exports = app => {
  app.use("/lotes", router)
}