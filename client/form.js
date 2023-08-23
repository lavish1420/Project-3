
document.getElementById('btn').addEventListener('click',(e) =>{
    e.preventDefault()

    const userfirst_name = document.getElementById('firstname').value
    const userlast_name = document.getElementById('lastname').value
    const user_dob = document.getElementById('dob').value
    const user_email  = document.getElementById('email').value
    const user_password = document.getElementById('password').value

    const user = {
        firstname : userfirst_name,
        lastname : userlast_name,
        dob :user_dob,
        email:user_email,
        password:user_password
    }

    const url = `http://localhost:8082/users`
    const xhr = new XMLHttpRequest()
    xhr.open('POST',url)
   
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.setRequestHeader('Access-Control-Allow-origin','*')

    xhr.onreadystatechange = () =>
    {
        if(xhr.status==200 && xhr.readyState == 4)
        {
            console.log(user)
            console.log(xhr.responseText)
        }
    }
    xhr.send(JSON.stringify(user))





// web,jpa,pstgresql -> dependiences we need in spring boot
})