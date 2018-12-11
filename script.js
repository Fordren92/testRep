var login = prompt("Введите логин:","");

if(login == "Админ")
{
    var password = prompt("Введите пароль:");
    if(password == "Черный Властелин")
    {
        alert("Доброе пожаловать, " + login);
    }
    else if(!password)
    {
        alert("Вход отменен");
    }
    else
    {
        alert("Пароль неверен!");
    }
}
else if(!login)
{
    alert("Вход отменен");
}
else
{
    alert("Я вас не знаю!");
}