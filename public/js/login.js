// if login button clicked logInHandler is called
const logInHandler = async (event) => {
  console.log('working');
    event.preventDefault();
    // DOM variables
    const userName = document.querySelector('#userName')
    .value.trim();
    const userPassword = document.querySelector('#userPassword').value.trim();
   
  alert('userName: ' + userName + ' userPassword: ' + userPassword )
    // if a userName and userPassword are submitted a fetch POST is made to the api/users/login to all the userName and userPassord entred to be compared to the database
    if (userName && userPassword) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, userPassword }), 
            headers:  { 'Content-Type': 'application/json' },
        });

        // response will return OK if userName and userPassword are found in the database & this will change page loacation to main page

        if (response.ok) {
            document.location.replace('/api/pantry');
        } else {
            alert('Failed to log in. If you do not already have an account please put in a userName and password, then click the "Sign up" button. If you do have an account please enter your userName and password, then click "Log in" button.');
        }
    }
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
  
        //if reponse is OK then replace url with api/pantry route to get to pantry page
      if (response.ok) {
        document.location.replace('/api/pantry');
      } else {
        alert('Failed to sign up. You need to provide a userName and a password, then click the "Sign up" button. If you already have an account use the log in button.');
      }
    }
  };
document
    .querySelector('#logInBtn')
    .addEventListener('click', logInHandler);

document
    .querySelector('#signUpBtn')
    .addEventListener('click', signUpHandler)