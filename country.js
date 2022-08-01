class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["green", "white", "red"]);
let algeria = new Country("Algeria", "Arabic and Berber", "marhaban bialealami!", ["blue", "yellow", "red"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai!", ["red", "white"]);
let russia = new Country("Russia", "Russian", "Privet, mir!", ["white", "blue", "red"]);



    // for (let i = 0; i < Country.name.length; i++)
    // {
    //     console.log[i];
    // }

    // let CountryChoose = prompt(`What Country would you like to choose?  Your options are: ${i}`);
    // alert(`${CountryChoose}`);

//switching country properties    
function SwitchCountry() 
{
    let countryNameNode = document.querySelector("#CountryName");
    let countrycolor1Node = document.querySelector("#Color1");
    let countrycolor2Node = document.querySelector("#Color2");
    let countrycolor3Node = document.querySelector("#Color3");
    let countryLangNode = document.querySelector("#OfficialLanguage");
    let countryGreetingNode = document.querySelector("#HelloWorld");
    let countryList = document.querySelector("#CountryList");

    if (countryList.value === "USA") 
    {
        countryNameNode.innerText = usa.name;
        countryLangNode.innerText = usa.lang;
        countryGreetingNode.innerText = usa.greeting;
        countrycolor1Node.style.backgroundColor = usa.colors[0];
        countrycolor2Node.style.backgroundColor = usa.colors[1];
        countrycolor3Node.style.backgroundColor = usa.colors[2];

    }
    else if (countryList.value === "Mexico")
    {        
        countryNameNode.innerText = mexico.name;
        countryLangNode.innerText = mexico.lang;
        countryGreetingNode.innerText = mexico.greeting;
        countrycolor1Node.style.backgroundColor = mexico.colors[0];
        countrycolor2Node.style.backgroundColor = mexico.colors[1];
        countrycolor3Node.style.backgroundColor = mexico.colors[2];        
    }
    else if (countryList.value === "Algeria")
    {
        countryNameNode.innerText = algeria.name;
        countryLangNode.innerText = algeria.lang;
        countryGreetingNode.innerText = algeria.greeting;
        countrycolor1Node.style.backgroundColor = algeria.colors[0];
        countrycolor2Node.style.backgroundColor = algeria.colors[1];
        countrycolor3Node.style.backgroundColor = algeria.colors[2];  
    }
    else if (countryList.value === "Japan") 
    {
        countryNameNode.innerText = japan.name;
        countryLangNode.innerText = japan.lang;
        countryGreetingNode.innerText = japan.greeting;
        countrycolor1Node.style.backgroundColor = japan.colors[0];
        countrycolor2Node.style.backgroundColor = japan.colors[1];
        countrycolor3Node.style.backgroundColor = japan.colors[2];  
    }
    else if (countryList.value === "Russia") 
    {
        countryNameNode.innerText = russia.name;
        countryLangNode.innerText = russia.lang;
        countryGreetingNode.innerText = russia.greeting;
        countrycolor1Node.style.backgroundColor = russia.colors[0];
        countrycolor2Node.style.backgroundColor = russia.colors[1];
        countrycolor3Node.style.backgroundColor = russia.colors[2];  
    }

    //create logic "color1 = " so when choosing a new country and displaying, all coilorson screen should change.
}
