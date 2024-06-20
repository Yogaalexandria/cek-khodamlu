
let firstName = '';
let lastName = '';

// OnTap Next - 1
const buttonNext = document.getElementById(`btn-continue`);
buttonNext.addEventListener(`click`, async () => {    
    // Hide First Content
    const firstContent = document.getElementById(`content-1`);
    firstContent.style.opacity = 0;
    firstContent.style.display = `none`;
    
    // Show Second Page
    const secondContent = document.getElementById(`content-2`);
    secondContent.style.opacity = 1;
    secondContent.style.display = 'block';
    
});

// OnTap Generate
const buttonGenerate = document.getElementById(`btn-continue-2`);
buttonGenerate.addEventListener(`click`, async () => {
    const inputFirstName = document.getElementById(`first-name`);
    const inputLastName = document.getElementById(`last-name`);

    if(inputFirstName.value === `` || inputLastName.value === `` ) {
        return alert(`Fill the empty Form!`)
    }

    firstName = inputFirstName.value;
    lastName = inputLastName.value;

    // Hide Previous Content
    const secondContent = document.getElementById(`content-2`);
    secondContent.style.opacity = 0;
    secondContent.style.display = 'none';

    // Generating
    const thirdContent = document.getElementById(`content-3`);
    thirdContent.style.opacity = 1;
    thirdContent.style.display = 'block';

    const textTop = document.getElementById(`text-top`);
    const textProcess = document.getElementById(`text-process`);
    textProcess.innerHTML = `Processing...`

    setTimeout(() => {
        textProcess.innerHTML = `Parsing Khodam data...`;
    }, 2200);

    setTimeout(() => {
        textProcess.innerHTML = `Checking, ${firstName}...`
    }, 4200);

    setTimeout(() => {
        textProcess.innerHTML = `Checking, ${lastName}...`
    }, 6200);
    
    setTimeout(() => {
        textProcess.innerHTML = `Finishing... `
    }, 7200);

    setTimeout(() => {
        const buttonBack = document.getElementById(`btn-continue-3`);
        
        textTop.innerHTML = getRandomString(khodams)
        textProcess.style.display = `none`
        buttonBack.style.display = `block`;

        buttonBack.addEventListener(`click`, () => location.reload());
        
    }, 8200);

});

// List of Khodams

const khodams = [
    "Remote AC <br>Midea",
    "Mouse Wireless",
    "Monyet <br>Taman Safari",
    "Harimau <br>Cibaduyut",
    "Skibidi Toilet",
    "Luth Discord",
    "Veren Skibidi",
    "Hamasified",
    "Ular berkaki <br>hamster",
    "Monyet khas <br>magelang",
    "Kuntilanak",
    "Blender Philips",
    "Botol Aqua",
    "Casing iPhone 11",
    "Telor Asin Bakar",
    "Cartridge <br>Oxva Slim",    
    "HyperX <br>Cloud II",    
];

function getRandomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}