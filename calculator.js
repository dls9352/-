function Inputvalue(text){
    document.getElementById('result').value += text
}
function Valueclear(){
    document.getElementById('result').value = ""
}
function Valueslice(){
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1)
}
function Valueout(){
    var Final = document.getElementById('result').value;
    document.getElementById('result').value = eval(
        Final.replace(/x/g,"*").replace(/÷/g, "/")
        )
}
var math = ["+", "-", "x", "÷"]
function solo(text){
    var last = document.getElementById('result').value.slice(-1);
    if (!math.includes(last)){
        document.getElementById('result').value += text
    }
}