function validate(form)
{
    fail = validateForename(form.forename.value);
    fail += validateSurname(form.surname.value);
    fail += validateUsername(form.username.value);
    fail += validatePassword(form.password.value);
    fail += validateAge(form.age.value);
    fail += validateEmail(form.email.value);

    if (fail == "") return true;
    else
    {
        alert(fail); 
        return false;
    }
}

function validateForename(field)
{
    return (field == "") ? "No name was entered.\n" : "";
}

function validateSurname(field)
{
    return (field == "") ? "No name was entered\n" : "";
}

function validateUsername(field)
{
    if (field == "")
    {
        return "No name was entered.\n";
    }
    else if (field.length < 6)
    {
        return "Username must be at least more than 6 characters.\n";
    }
    else if (/[^a-zA-Z0-9_-]/.test(field))
    {
        return "Only a-z, A-Z, 0-9, - and _ allowed in usernames.\n"
    }
    else
    {
        return "";
    }
    
}

function validatePassword(field)
{
    if (field == "")
    {
        return "No password was entered.\n";
    }
    else if (field.length < 6)
    {
        return "Password must be at least 6 characters.\n";
    }
    else if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) || !/[0-9]/.test(field))
    {
        return "Password requires one each of a-z, A-Z and 0-9.\n"
    }
    else
    {
        return ""
    }
    
}

function validateAge(field)
{
    if (field == "" || isNaN(field))
    {
        return "No age was entered";
    }
    else if (field < 18 || field > 110)
    {
        return "Age must be more than 18.\n";
    }
    else 
    {
        return "";
    }
    
}

function validateEmail(field)
{
    if (field == "")
    {
        return "No email was entered.\n";
    }
    else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(field))
    {
        return "The email addree is invalid.\n";
    }
    else
    {
        return "";
    }
    
}

document.write("Cats are friendly. i like cats.".replace(/cats/gi, "dogs"));

document.write(/f[oi]x/.test("the quick brown "));