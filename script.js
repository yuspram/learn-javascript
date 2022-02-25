document.getElementById('btn').onclick = function() {
    var checkboxes = document.getElementsByName('waiting');
    for (var checkbox of checkboxes) {
        checkbox.checked = !checkbox.checked;
    }
}