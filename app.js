const buttons = document.querySelector(".key-container");
const screen = document.querySelector('.screen span');

let input = "";

buttons.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.button')) {
        const value = target.textContent;

        // operation handling
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            input += ` ${value} `
        }
        // Calculation
        else if (value === '=') {
            try {
                let result = eval(input);
                screen.textContent = result;
                console.log(`${input} = ${result}`);
                input = ''
            } catch (error) {
                screen.textContent = "Error";
                console.error('Invalid calculation', error);
            }
        }
        // Clear all content
        else if (value === 'AC') {
            input = ""
            screen.innerHTML = "0";
        }
        // remove the newest input digit
        else if (value === 'Clear') {
            if (input.length > 0) {
                input = input.slice(0, -1)
                screen.textContent = input || "0";
            }
        }
        // expression capture
        else {
            input += value;
            screen.textContent = input;
        }
    }
});