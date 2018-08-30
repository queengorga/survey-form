function validateForm() {
    if (!validate()) {
        alert("Select at least one checkbox");
        return false;
    }
    return true
}

function validate() {
    var c = document.getElementsByTagName('input');
    for (var i = 0; i < c.length; i++) {
        if (c[i].name == 'where') {
            if (c[i].checked) { return true }
        }
    }
    return false;
}
