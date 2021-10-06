var switcher = document.getElementById('switch');

switcher.addEventListener('click', () => {

    if (switcher.checked == true) {
        // alert('hihi')
        toPHP();
    }
    else {
        // alert('hahaha')
        toPHP();
    }

});

function toPHP() {
    let formData = new FormData();
    formData.append('switcher', 'checked');
    fetch('action.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        return response.text()
    })
    .then(body => console.log(body));
}
