let input=document.querySelector("textarea");
console.log(input.innerText);

input.addEventListener("input",async function(e){
    console.log(input.value);
    let value=input.value;
    let response = await fetch("/",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({value})
    });

    const data = await response.json();
    console.log(`Hash: ${data.hash}`);

    let a=document.querySelector(".box")
    a.innerText=data.hash;
});
