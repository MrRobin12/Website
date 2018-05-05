function login_in()
{
    localStorage.setItem("isLogin", "true");
    
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
    }
}

function sign_out()
{
    localStorage.setItem("isLogin", "false");
    window.location = "home.html";
}

function myProfile()
{
    window.location = "profile.html";
}