
color = "red"
text = "Sample Text"
document.getElementById("red").addEventListener('click', ()=>{
    document.getElementById('tshirt').style.backgroundColor = "red"
    color="red"
})
document.getElementById("blue").addEventListener('click', ()=>{
    document.getElementById('tshirt').style.backgroundColor = "blue"
    color="blue"
})
document.getElementById("yellow").addEventListener('click', ()=>{
    document.getElementById('tshirt').style.backgroundColor = "yellow"
    color="yellow"
})
document.getElementById("green").addEventListener('click', ()=>{
    document.getElementById('tshirt').style.backgroundColor = "green"
    color="green"
})


document.getElementById('shirt-text').addEventListener('keyup', (e)=>{
    document.getElementById('tshirt-text').innerHTML = e.target.value
    text = e.target.value

})

document.getElementById('submit').addEventListener('click', ()=>{
    if(document.getElementById('number').value==0){
        document.getElementById('error-message').innerHTML = "At least 1 shirt must ordered!"
    }
    else{
        document.getElementById('error-message').innerHTML = ""
        alert('Order Submitted Successfully!!\nSelected Color:'+color+"\nShirt Text : "+text+"\nNumber of shirts: "+document.getElementById('number').value+"\nTotal Amount: £"+document.getElementById('number').value*4)
        
    }
    

})