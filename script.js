const btn = document.querySelector('#btnGet');
const form = document.querySelector('#inForm');
const outPut = document.querySelector('#outArea');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.reset();
})

btn.addEventListener("click", getApi);

function getApi() {

    const inBox = document.querySelector('#inBox');
    const userInput = inBox.value;
    let urI = `https://www.swapi.tech/api/people/?name=${userInput}`;
    if (userInput !== '' && userInput !== null) {


        console.log(userInput);
        fetch(urI)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                let prop = data.result[0].properties;
                console.log(prop.height);
                outPut.value = `        ${prop.name.toUpperCase()}
Height:  ${prop.height} - Mass: ${prop.mass}
Gender: ${prop.gender} - Hair color: ${prop.hair_color} `
                console.log(typeof userInput);
            })
            .catch(err => console.log(` Error: ${err}`));
    } else {
        alert('No input Found');
    }
}