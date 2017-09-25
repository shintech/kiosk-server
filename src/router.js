import express from 'express'
import employees from './employees'

const router = express.Router()

export default function getRouter (options) {
  router.route('/employees')
  .get(employees(options).index)

  router.route('/employees/:id')
  .get(employees(options).show)

  return router
}
