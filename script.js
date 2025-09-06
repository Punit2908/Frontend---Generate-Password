const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = '1234567890';
const symbolSet = '~!@#$%^&*()_+?/><[]}{';

const uppercase = document.getElementById('Uppercase');
const lowercase = document.getElementById('Lowercase');
const numbers = document.getElementById('Numbers');
const symbols = document.getElementById('Symbols');
const total = document.getElementById('number');
const input = document.querySelector('.text-box');

const generateData = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (password = '')=>{
    if(uppercase.checked){
        password+=generateData(upperSet);
    }
    if(lowercase.checked){
        password+=generateData(lowerSet);
    }
    if(symbols.checked){
        password+=generateData(symbolSet);
    }
    if(numbers.checked){
        password+=generateData(numberSet);
    }
    if(password.length < total.value){
        return generatePassword(password);
    }
    input.innerText = sliceString(password,total.value);
}

const sliceString = (str,num)=>{
    if(str.length>num){
        let newstr = str.substring(0,num);
        return newstr;
    }else{
        return str;
    }
}

document.querySelector('button').addEventListener('click',()=>{
    generatePassword();
})

generatePassword();