function login(){
    p1n=document.getElementById("player1").value;
    p2n=document.getElementById("player2").value;
    localStorage.setItem("player1name",p1n);
    localStorage.setItem("player2name",p2n);
    window.location="game.html"
}