const express = require('express')

const router = express.Router()

require('@app/route/auth')(router)
require('@app/route/todo')(router)

module.exports = router
