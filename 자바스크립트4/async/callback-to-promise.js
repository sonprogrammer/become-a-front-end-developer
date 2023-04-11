class UserStorage{
    loginUser(id, password){    
        return new Promise((resolve, reject) => {

            setTimeout(()=> {   //2초뒤에 이 코드 블럭이 실행된다 
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
async function checkUser(){
    try{
        const userId = await userStorage.loginUser(id, password);
        const user = await
        userStorage.getRoles(userId);
        alert(`Hello ${user.name}, you have a ${user.role}`);
    }catch(error){
        console.log(error);
    }
}
checkUser();

// userStorage
// .loginUser(id, password)
// .then(userStorage.getRoles)
// .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
// .catch(console.log);
