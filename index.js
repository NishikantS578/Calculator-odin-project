

const display= document.querySelector(".display");
const key=document.querySelectorAll(".key");

const keyArray=[...key];
let expression="";

keyArray.forEach(function(item)
{
    item.addEventListener("click",function()
    {
        let operatorIndex=0;
        let firstNumber=0;
        let secondNumber=0;

        if(isPresent("equal",item))
        {
            while(!Number(expression) && Number(expression)!=0)
            {
                for(let i=0;i<expression.length;i++)
                {
                    if(expression[i]=="+"||
                    expression[i]=="-"||
                    expression[i]=="*"||
                    expression[i]=="/")
                    {
                        operatorIndex=i;
                        firstNumber=expression.slice(0,i);
                        let j=i+1;
                        while(j<expression.length)
                        {
                            if(expression.length==j+1)
                            {
                                secondNumber=expression.slice(i+1,);
                                expression=String(Math.round((calculation(Number(firstNumber),Number(secondNumber),expression[operatorIndex])*10))/10);
                                break;
                            }
                            else if(expression[j]=="+"||
                            expression[j]=="-"||
                            expression[j]=="*"||
                            expression[j]=="/")
                            {
                                secondNumber=expression.slice(i+1,j);
                                expression=String(Math.round((calculation(Number(firstNumber),Number(secondNumber),expression[operatorIndex])*10))/10);
                                break;
                            }
                            j++;
                        }
                    }
                }
            }
            display.textContent=expression;
        }
        else if(isPresent("clear",item))
        {
            expression="";
            display.textContent=expression;
        }
        else
        {
            if(expression[expression.length-1]!= "+" &&
            expression[expression.length-1]!= "-" &&
            expression[expression.length-1]!= "*" &&
            expression[expression.length-1]!= "/")
            {
               display.textContent+=item.textContent;
            }
            else if(item.textContent!= "+" &&
            item.textContent!= "-" &&
            item.textContent!= "*" &&
            item.textContent!= "/")
            {
                display.textContent+=item.textContent;
            }
            expression=display.textContent;
        }
    });
});


function isPresent(classOfElement,item)
{
    let flag= false;
    item.classList.forEach(function(item)
    {
        if(item==classOfElement)
        {
            flag= true;
        }
    });
    return flag;
}

function calculation(firstNumber,secondNumber,operator)
{
    if(operator=="+")
    {
        return firstNumber+secondNumber;
    }
    if(operator=="-")
    {
        return firstNumber-secondNumber;
    }
    if(operator=="*")
    {
        return firstNumber*secondNumber;
    }
    if(operator=="/")
    {
        return firstNumber/secondNumber;
    }
    
}