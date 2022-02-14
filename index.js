const { hash } = window.location;
// const message = atob(hash.replace('#', '')); 
const message = window.atob(hash.replace('#', '')); 
console.log(message);

if (message) {
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('h1').innerText = message;
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  // hiding the message form toggling visibility
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');

  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});

window.location.hash;
