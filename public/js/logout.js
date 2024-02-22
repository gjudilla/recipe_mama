const logOutHandler = async () => {

    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('XXXXXX');
      document.location.replace('/');

    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector('#logout-button')
    .addEventListener('click', logOutHandler)