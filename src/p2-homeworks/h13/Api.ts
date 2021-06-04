


export const API = {


     getData(checked:boolean):Promise<any> {
         let response = fetch('https://neko-cafe-back.herokuapp.com/auth/test',
      {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify({success: checked})
      })

         return response
    }


}





