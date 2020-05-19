'use strict'

class PageController {
  async home({response, request, view}){
    return view.render('pages/home')
  }

  async welcome({response, request, view}){
    return view.render('pages/welcome')
  }
}

module.exports = PageController
