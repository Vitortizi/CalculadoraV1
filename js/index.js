document.getElementById('result').addEventListener('keydown', getKey);

function getKey(event) {
    const validation = /[^0-9\,\.\*\+\-]+/g;
    if (event.keyCode === 13) {
        calculate();
    }

    if (validation.test(event.key)) {
        event.preventDefault();
    }
    const val = document.getElementById('result').value;
}

function setValue(item) {
    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = ""
    }

    const number = document.getElementById('result').value;
    document.getElementById('result').value = number + item;
}

function clean() {
    document.getElementById('result').value = 0;
}

function calculate() {
    const result = document.getElementById('result').value;

    if (result) {
        document.getElementById('result').value = eval(result);
    } else {
        document.getElementById('result').value = "..."
    }
}