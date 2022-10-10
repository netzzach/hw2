let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  
  function log(){
    if(user.isloggedin == true){
        console.log(user.firstname + "" + user.lastname);
    }else{
        cobsole.log("false");
    }
  } 

  log();