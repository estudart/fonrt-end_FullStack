const postClient = async (inputName, inputEmail, inputTelephone, inputPassword) => {
    const formData = new FormData();
    formData.append('nome', inputName);
    formData.append('telefone', inputTelephone);
    formData.append('email', inputEmail);
    formData.append('password', inputPassword);
  
    let url = 'http://127.0.0.1:5000/cliente';
    fetch(url, {
      method: 'post',
      body: formData
    })
        .then((response) => {
        alert(response.status);
            if (response.status === 200) {
            //alert("got here!");
            window.location.href = './login_index.html';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

const newClient = () => {
    let inputName = document.getElementById("newClientName").value;
    let inputEmail = document.getElementById("newClientEmail").value;
    let inputTelephone = document.getElementById("newClientTelephone").value;
    let inputPassword = document.getElementById("newClientPassword").value;

    if (inputName === '') {
      alert("Name should not be empty!");
    /*} else if (isNaN(inputEmail) || isNaN(inputTelephone)) {
      alert("Quantidade e valor precisam ser números!");*/
    } else if (inputEmail === '') {
        alert("Email should not be empty!");
    } else if (inputTelephone === '') {
        alert("Telephone should not be empty!");
    } else if (inputPassword === '') {
        alert("Password should not be empty!");
    } else {
      /*insertList(inputName, inputEmail, inputTelephone)*/
      postClient(inputName, inputEmail, inputTelephone, inputPassword)
      alert("Client Registered!")
    }
}

$("#create").on("click", newClient)