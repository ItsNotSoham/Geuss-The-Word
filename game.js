player1n=localStorage.getItem("player1name")
player2n=localStorage.getItem("player2name")
player1s=0
player2s=0
document.getElementById("name1").innerHTML=player1n+" : "
document.getElementById("name2").innerHTML=player2n+" : "
document.getElementById("score1").innerHTML=player1s
document.getElementById("score2").innerHTML=player2s
document.getElementById("playerq").innerHTML="Question turn : "+player1n
document.getElementById("playera").innerHTML="Answer turn : "+player2n
function send(){
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    c1=word.charAt(1)
    d=Math.floor(word.length/2)
    c2=word.charAt(d)
    l=word.length-1
    c3=word.charAt(l)
    ch1=word.replace(c1,"_")
    ch2=ch1.replace(c2,"_")
    ch3=ch2.replace(c3,"_")
    q="<h4 id='word_display'> Q "+ch3+"</h4>"
    a="<br>Answer : <input type='text' id='i1'>"
    c="<br><br> <button class='btn btn-info' onclick='chek()'>Submit</button>"
    x=q+a+c
    document.getElementById("quest").innerHTML=x
    document.getElementById("word").innerHTML=""
} 

qt="player1"
at="player2"
function chek(){
getans=document.getElementById("i1").value
ans=getans.toLowerCase()
if(ans==word){
    if(at=="player1"){
        player1s+=1
        document.getElementById("score1").innerHTML=player1s
    }
    else{player2s+=1
        document.getElementById("score2").innerHTML=player2s

    }
}   
if(qt=="player1")
{
    qt="player2"
    document.getElementById("playerq").innerHTML="Quetion turn : "+player2n
}
else{qt="player1"
document.getElementById("playerq").innerHTML="Quetion turn : "+player1n

}
           
if(at=="player1")
{
    at="player2"
    document.getElementById("playera").innerHTML="Answer turn : "+player2n
}
else{at="player1"
document.getElementById("playera").innerHTML="Answer turn : "+player1n

}
document.getElementById("quest").innerHTML=""

}