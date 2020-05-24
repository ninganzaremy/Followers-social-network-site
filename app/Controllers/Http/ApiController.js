'use strict'

class ApiController {
  async initialApp({auth}){
    return auth.user

  }
}

module.exports = ApiController
