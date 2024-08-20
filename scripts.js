document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#form-section').scrollIntoView({ behavior: 'smooth' });
});
