/**
 * Created by shunshun on 2017/4/7.
 */

export const get = (url) => {
  fetch(url).then(
    res=>res.json()
  ).then(
    json=>{console.log(json)}
  ).catch(
    err=>{console.log(err)}
  );
}