const user = {
    username : "Madhav",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()


const addTwo = (num1, num2) => {
    return num1 + num2
}

// or

const addnums = (n1, n2) => (n1 + n2)
 