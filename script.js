let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = eval(string/100);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '+/-'){
            string = eval(string*(-1));
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'BS'){ 
                var exp = document.querySelector('input').value;
                document.querySelector('input').value = exp.substring(0, exp.length - 1);
                string = document.querySelector('input').value;            
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }
    })
})