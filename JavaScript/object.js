function User(firsName, userName, password)
{
    this.firstName = firsName;
    this.userName = userName;
    this.password = password;

    this.ShowUser = function ()
    {
        console.log(this.firstName + this.userName + this.password);
        }
}
User("knight", "ghost", 'password');
console.log(User);

//let usersDetail = Array();
//console.log(usersDetail);