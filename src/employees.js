export default function (options) {
  const { logger, db } = options
  const queries = {}

  queries.index = (req, res) => {
    db.any('SELECT * FROM employees')
    .then(result => {
      res.status(200)
      .json({
        body: result
      })
    })
    .catch(err => {
      logger.error(err)
    })
  }

  queries.show = (req, res) => {
    const employeeID = parseInt(req.params.id)

    db.one('SELECT * FROM employees WHERE id = $1', [employeeID])
    .then(result => {
      res.status(200)
      .json({
        body: result
      })
    })
    .catch(err => {
      logger.error(err)
    })
  }

  queries.punch = (req, res) => {
    const employeeID = parseInt(req.params.id)

    db.none('UPDATE employees SET clocked_in = NOT clocked_in WHERE id = $1', [employeeID])
    .then(() => {
      res.status(200)
      .json({
        body: 'success'
      })
    })
    .catch(err => {
      logger.error(err)
    })
  }

  return queries
}
