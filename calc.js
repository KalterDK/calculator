var Numbers = document.querySelectorAll('.number'),
    Operations = document.querySelectorAll('.operation'),
    DecimalBtn = document.getElementById('decimal'),
    ClearBtns = document.querySelectorAll('.clear_btn'),
    Display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';


for (var i = 0; i < Numbers.length; i++) {
    var number = Numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
}

for (var i = 0; i < Operations.length; i++) {
    var operationBtn = Operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
}

for (var i = 0; i < ClearBtns.length; i++) {
    var clearBtn = ClearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    })
}

DecimalBtn.addEventListener('click', Decima);

function numberPress(number) {
    if (MemoryNewNumber) {
        Display.value = number;
        MemoryNewNumber = false;
    } else {
        if (Display.value === '0') {
            Display.value = number;
        } else {
            Display.value += number;
        }
    }
}

function operation(op) {
    var localOperationMemory = Display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        Display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        Display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    }
}

function Decima() {
    var localDecimalMemory = Display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1 ) {
            localDecimalMemory += '.';
        }
    }
    Display.value = localDecimalMemory;
}

function clear(id) {
    if (id === 'ce') {
        Display.value = '0';
        MemoryNewNumber = true;
    } else if ( id === 'c') {
        Display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
}
