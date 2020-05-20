'use strict'

class AuthController {
  async register({response, request, view}){
    return view.render('auth/register')

  }
  async login({response, request, view}){
    return view.render('auth/login')

  }
  async forgotPassword({response, request, view}){
    return view.render('auth/forgotPassword')

  }
}

module.exports = AuthController
