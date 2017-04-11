/**
 * Created by shunshun on 2017/4/7.
 */

export const post = (url,data) => {
  fetch(url,
    {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({'data':data})
    }).then(
      res => res.json()
    ).then(
      json =>console.log(json)
    ).catch(
      error=>{console.log(error)}
    );
}