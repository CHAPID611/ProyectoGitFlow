function login(username, password){
    if(username === admin && password === 'password123'){
        return 'login succesfull';
    }else{
        return 'invalid username or password'
    }
}