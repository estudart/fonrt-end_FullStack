const check_cliente = async (inputEmail, inputPassword) => {
    const formData = new FormData();
    formData.append('email', inputEmail);
    formData.append('password', inputPassword);
  
    let url = 'http://127.0.0.1:5000/check_cliente';
    fetch(url, {
      method: 'post',
      body: formData
    })
      //.then((response) => response.json())
      .then((response) => {
        //alert(response.status);
        if (response.status === 200) {
            //alert("got here!");
            window.location.href = '/front_end/index.html';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

const checkAClient = () => {
    let inputEmail = document.getElementById("newClientEmail").value;
    let inputPassword = document.getElementById("newClientPassword").value;

    if (inputEmail === '') {
        alert("Email should not be empty!");
    } else if (inputPassword === '') {
        alert("Password should not be empty!");
    } else {
      /*insertList(inputName, inputEmail, inputTelephone)*/
      check_cliente(inputEmail, inputPassword)
    }
}

$("#sign-in").on("click", checkAClient);