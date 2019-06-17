module.exports ={
      adminLogin: async (req, res) => {
        var isAuthenticated = false
        const db = req.app.get('db')
    
        const { userName, password } = req.body
    
        let clientResponse = await db.adminLogin({ userName })
        let client = clientResponse[0]
        console.log('pizza', client)
    
    
    
        if (!client) {
          return res.status(401).send('invalid email')
        }
    
    
         if(password === client.password){
              isAuthenticated= true
             console.log(isAuthenticated)
         }
         else isAuthenticated = false
    
        if (!isAuthenticated) {
          return res.status(403).send('incorrect password/ or Email')
        }
  
        req.session.admin = {
          id: client.id,
          userName: client.username,
          admin: client.admin_status

        }
        console.log(req.session.admin)
        res.status(200).send(req.session.admin)
    
    
      },

      logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
      },

      sessionCheck: async (req, res) => {
        console.log('this is req.session serverside', req.session.admin)
        res.status(200).send(req.session.admin)
    
      },



}