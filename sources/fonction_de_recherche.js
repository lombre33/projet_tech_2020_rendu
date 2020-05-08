/*

This script query a googlesheet file and return a Json file. 
@author : Antoine Philippeau
@version : 1.5

*/

let rp = require ("request-promise");

function mk_json(options){
    return rp(options)
            .then(res => {
                return{response: res}
        })
    
}

function main(params){
    const my_gsheet_id = "1oczOBeUcnFxx9hZWEjyjAG-m6p7ZWR2gHdJxw6nsbQ8";
    if(params.action[1] == "bat"){
        const options = {
            url : "http://gsx2json.com/api?id="+my_gsheet_id
            +"&q="+params.action[0]+"&columns=false",
            json : true
        };
        return mk_json(options);
    } 
    else if(params.action[1] == "salle"){
        const options = {
            url : "http://gsx2json.com/api?id="+my_gsheet_id
            +"&sheet=2"+"&q="+params.action[0]+"&columns=false",
            json : true
            
        };
        return mk_json(options);
    }
    
}
   /* original code given by the IBM team  juste in case ... 
    if (params.action == "joke") {

        const options = {
        url:"http://api.icndb.com/jokes/random",

            json: true
    };
    return rp(options)

      .then(res => {

        return { response: res }

    })
 } 
 else if (params.action == "fact") {
     console.log("test");

    const options = {

        url: "https://catfact.ninja/fact",

        json: true
       
    }
    return rp(options)

       .then(res => {

        return { response: res }
   })
 }
 
 manual parse code
 */
