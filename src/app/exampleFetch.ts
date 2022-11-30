let ui = document.createElement('div');
let container = <HTMLDivElement>document.querySelector('#app');
container.appendChild(ui);

ui.innerHTML = `
<div style="box-shadow: 2px 2px #333;padding: 1em;max-width:200px;margin:auto;margin-top:3em;">
    Enter Number: <input type="number">
    <button>Do Magic!!!!</button>
    <div class="result"></div>
</div>
`;

let inp = <HTMLInputElement>ui.querySelector('input');
let result = <HTMLDivElement>ui.querySelector('div.result');
let button = <HTMLButtonElement>ui.querySelector('button');

button.addEventListener(
    'click',
    async function () {
        console.log('Clicked button, go fetch...');
        let number = inp.valueAsNumber;
        try {
            var response = await fetch(`/.netlify/functions/secret?number=${number}`);
        } catch (err) {
            result.innerHTML = `
            Encountered an error :(
                <pre>${JSON.stringify(err)}</pre>
            )`;
            return;
        }
        if (response) {
            let json = await response.json();
            result.innerHTML = json.result;
        } else {
            result.innerHTML = 'Null response?';
        }        
    }
)



