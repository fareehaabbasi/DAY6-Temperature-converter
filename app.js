const celsius = document.querySelector("#celsius");
const kelvin = document.querySelector("#kelvin");
const fahrenheit = document.querySelector("#fahrenheit");


// celsius to fahrenheit => (0°C × 9/5) + 32 = 32°F
// celsius to kelvin => 0°C + 273.15 = 273.15K
celsius.addEventListener("input", function(){
    let c = parseFloat(celsius.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
});


// kelvin to fahrenheit => (0K − 273.15) × 9/5 + 32 = -459.7°F
// kelvin to celsius => 0K − 273.15 = -273.1°C
kelvin.addEventListener("input", function(){
    let k = parseFloat(kelvin.value);
    let f = (k - 273.15) * 9/5 + 32;
    let c = k - 273.15;
    fahrenheit.value = f;
    celsius.value = c;
});


// fahrenheit to kelvin => (32°F − 32) × 5/9 + 273.15 = 273.15K
// fahrenheit to celsius => (32°F − 32) × 5/9 = 0°C
fahrenheit.addEventListener("input", function(){
    let f = parseFloat(fahrenheit.value);
    let k = (f - 32) * 5/9 + 273.15;
    let c = (f - 32) * 5/9;
    celsius.value = c;
    kelvin.value = k;
});