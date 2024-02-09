const Addition = (Number1: number, Number2: number): any => {
    return Number1 + Number2;
}

const Subtraction = (Number1: number, Number2: number): any => {
    return Number1 - Number2;
}

const Multiply = (Number1: number, Number2: number): any => {
    return Number1 * Number2;
}

const Dividing = (Number1: number, Number2: number): any => {
    return Number1 / Number2;
}

const Num1: HTMLInputElement | null = document.getElementById('Number1') as HTMLInputElement;
const Num2: HTMLInputElement | null = document.getElementById('Number2') as HTMLInputElement;
const symbol: HTMLDivElement | null = document.getElementById('Symbol') as HTMLDivElement; 

const Proceed: HTMLButtonElement | null = document.getElementById('Submit') as HTMLButtonElement;

const Operate: HTMLSelectElement | null = document.getElementById('Operation') as HTMLSelectElement;



Proceed.onclick = () => {
    const Function_Call_Number: number = parseInt(Operate.value as string);
    const numeric1: number = parseInt(Num1.value as string)
    const numeric2: number = parseInt(Num2.value as string)

    
    const Result = document.createElement('h1');
    const Ans: HTMLDivElement | null = document.getElementById('Answer-Container') as HTMLDivElement;

    if (Function_Call_Number === 1){

        symbol.innerText = "+";
        Result.innerText =  Addition(numeric1, numeric2);

    } else if (Function_Call_Number === 2){

        symbol.innerText = "-";
        Result.innerText =  Subtraction(numeric1, numeric2);

    } else if (Function_Call_Number === 3){

        symbol.innerText = "*";
        Result.innerText =  Multiply(numeric1, numeric2);

    } else if (Function_Call_Number === 4){

        symbol.innerText = "/";
        Result.innerText =  Dividing(numeric1, numeric2);

    } else {

        Result.innerText = "Select Operation";
    
    }

    Ans.appendChild(Result);
}