const signup = async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value
    

    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
     
        alert(` wellcom ${result.user.email}`)
    } catch (err) {
        alert(err.message)
    }
}