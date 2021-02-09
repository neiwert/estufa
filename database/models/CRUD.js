class CRUD {
  constructor(model) {
    this.model = model
  }
  read = async (req, res) => {
    const { where } = req.body
    res
      .status(200)
      .json(
        await this.model
          .findAll(where))
  }
  create = async (req, res) => {
    const obj = req.body
    await this.model
      .create(obj)
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        console.error(error)
        res.status(400).json(error)
      })
  }
  update = async (req, res) => {
    const { set, where } = req.body

    if (!set || !where) {
      res.status(400).json({
        error: { message: "some operators missing, try follow the example below" },
        example: {
          set: {
            descricao: "alterada"
          },
          where: {
            id: 1
          }
        }
      })
    } else {
      await this.model.update(set, { where }
      ).then(result => {
        res.status(200).json({ completed: (result == 1) })
      }).catch(error => {
        console.error(error)
        res.status(400).json(error)
      })
    }
  }
  delete = async (req, res) => {
    const { where } = req.body
    if (!where) {
      res.status(400).json({
        error: { message: "some operators missing, try follow the example below" },
        example: {
          where: {
            id: 1
          }
        }
      })
    } else {
      await this.model.destroy({ where }
      ).then(result => {
        res.status(200).json({ completed: (result == 1) })
      }).catch(error => {
        console.error(error)
        res.status(400).json(error)
      })
    }
  }
}
module.exports = CRUD