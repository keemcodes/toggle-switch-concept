var switcher = document.getElementById('switch');

switcher.addEventListener('click', () => {

    if (switcher.checked == true) {
        toPHP("checked");
    }
    else {
        // alert('hahaha')
        toPHP("unchecked");
    }

});

function toPHP(string) {
    let formData = new FormData();
    formData.append('switcher', string);
    fetch('action.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        return response.text()
    })
    .then(body => console.log(body));
}
