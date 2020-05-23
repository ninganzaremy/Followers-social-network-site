'use strict'

const { validate, sanitize } = use('Validator')
const Hash = use('Hash')
const User = use('App/Models/User')



class AuthController {
  async register({response, request, view}){
    return view.render('auth/register')
  }
  //validation rules

  async storeUser ({ request, session, response , auth}) {

   const validation = await validate(request.all(), {
     email: 'required|email|unique:users,email',
     password: 'required',
     confirm_password: 'required'
   })

  //check if passwords match
   if(request.input('password')==request.input('confirm_password')){

     //check if it fails validation

        if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashExcept(['password'])

          return response.redirect('back')
          return `error , there is a problem with email.`
        } else{

          //save a user to databate

          try {
            let newUser = await User.create({
              email: request.input('email'),
              password: request.input('password')})
          } catch (error) {

            //show errors if problem is with database

            console.log('error')
            session
              .withErrors([
                {field: 'database', message:'Problem with database try again'}

              ])
              .flashExcept(['password'])
            return response.redirect('back')

          }
          session.flash({notification: 'welcome to Sema'})
          return response.redirect('/home')
        }

   }else {
           //show errors if passwords don't match

     session
       .withErrors([
         {field: 'password', message:'you need to confirm password'},
         {field: 'confirm_password', message:'you need to confirm password'}
       ])
       .flashExcept(['password'])
     return response.redirect('back')
     return 'password do not match';
   }

 }


  async login({response, request, view}){
    return view.render('auth/login')

  }
  async loginUser({response, request, view, auth, session}){

    //capture the data from the form
    const postData = request.post()

    //find the user in the database by their Email
    const user = await User.query()
      .where('email', postData.email)
      .first()
    if (user){
    //Verify the password
      const passwordVerified = await Hash.verify(
        postData.password,
        user.password
      )
      if (passwordVerified) {

        //login the user

        await auth.login(user)
        session.flash({notification: 'welcome to Sema'})
        return response.redirect('/home')
      }else {
        //password incorrect

        session
          .withErrors([
            {field: 'password', message:`Incorrect Password`}

          ])
          .flashExcept(['password'])
        return response.redirect('back')

      }

    }else{
      //can't find user with tha email
      session
        .withErrors([
          {field: 'email', message:`can't find the user with that email`}

        ])
        .flashExcept(['password'])
      return response.redirect('back')

    }

  }


  async forgotPassword({response, request, view}){
    return view.render('auth/forgotPassword')

  }
  async logout({response, request, view, auth}){
    try {
      await auth.logout()
      return response.redirect('/')
    } catch (error) {
      console.log(error)
      return 'error, could not logout'
    }


  }

}

module.exports = AuthController
