function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        handleFetchError(error);
      });
  }
  
  function appendIdToDOM(id) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `ID: ${id}`;
    document.body.appendChild(paragraph);
  }
  
  function handleFetchError(error) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMessage);
  }
  