'use strict'

class PageController {
  async home({response, request, view, auth}){

    return view.render('pages/react')
  }

  async welcome({response, request, view}){
    return view.render('pages/welcome')
  }
}

module.exports = PageController
