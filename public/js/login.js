// if login button clicked logInHandler is called
const logInHandler = async (event) => {
    event.preventDefault();
    // DOM variables
    const userName = document.querySelector('#userName')
    .value.trim();
    const userPassword = document.querySelector('#userPassword').value.trim();
    // const email = document.querySelector('#email-login').value.trim();
    // const password = document.querySelector('#password-login').value.trim();
  
    // if a userName and userPassword are submitted a fetch POST is made to the api/users/login to all the userName and userPassord entred to be compared to the database
    if (userName && userPassword) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, userPassword }), 
            headers:  { 'Content-Type': 'application/json' },
        });

        // response will return OK if userName and userPassword are found in the database & this will change page loacation to main page

        //XXXXXXXX NEED TO REPLACE WITH ACTUAL ROUTE
        if (response.ok) {
            document.location.replace('/api/XXXXXXXXX');
        } else {
            alert('Failed to log in');
        }
    }
    // if (email && password) {
    //   const response = await fetch('/api/users/login', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to log in.');
    //   }
    // }
  };

  // if signup button is clicked the signup handler fxn is called
  const signUpHandler = async (event) => {
    event.preventDefault();
  
    // DOM variables
    const userName = document.querySelector('#userName')
    .value.trim();
    const userPassword = document.querySelector('#userPassword').value.trim();

    // if userName and userPassword submitted to signup then a fetch POST request is made to api/users
    if (userName && userPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ userName, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
        //if reponse is OK then replace with actual route
        //XXXXXXXX need to replace XXXXXX
      if (response.ok) {
        document.location.replace('/api/pantry');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
document
    .querySelector('#logInBtn')
    .addEventListenter('click', logInHandler);

document
    .querySelector('#signUpBtn')
    .addEventListener('click', signUpHandler)