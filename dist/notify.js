const form = document.querySelector('form');
form.addEventListener('submit', async event => {
  event.preventDefault();
  try {
    await fetch('/', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    document.querySelector('.successMsg').hidden = false;
  } catch (e) {
    console.error(e);
  }
});
