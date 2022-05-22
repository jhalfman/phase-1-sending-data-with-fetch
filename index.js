// Add your code here
function submitData(name, email) {
    const newUser = {
        name: name,
        email: email,
    }
    console.log(newUser);
    const newUserObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newUser),
    }
    return fetch("http://localhost:3000/users", newUserObject)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        document.body.append(data.id);
    })
    .catch(function (error) {
        document.body.append(error.message);
    });
}