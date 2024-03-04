
function increaseScoreA(){
    let scoreElement = document.getElementById("firstTeamScore");
    let scoreA = parseInt(scoreElement.innerHTML);
    scoreElement.innerHTML = ++scoreA
    
}

function increaseScoreB(){
    let scoreElement = document.getElementById("secondTeamScore");
    let scoreB = parseInt(scoreElement.innerHTML);
    scoreElement.innerHTML = ++scoreB
    return scoreB
}

function decreaseScoreA(){
    let scoreA=Number(document.getElementById("firstTeamScore").innerText);
    if(scoreA >0){
        document.getElementById("firstTeamScore").innerText= --scoreA;
    }
}
function decreaseScoreB(){
    let scoreA=Number(document.getElementById("secondTeamScore").innerText);
    if(scoreA >0){
        document.getElementById("secondTeamScore").innerText= --scoreA;
    }
}

function teamNameA(){
    let name = prompt("Bir Takım Adı Giriniz:","Galatasaray")
    document.getElementById("firstTeamName").innerHTML = name
}
function teamNameB(){
    let name = prompt("Bir Takım Adı Giriniz:","Galatasaray")
    document.getElementById("secondTeamName").innerHTML = name
}

function updateScoreA(){
    let scoreA = prompt("Skor Giriniz:")
    if (scoreA !== null && !isNaN(scoreA) && scoreA.trim() !== ""){
        document.getElementById("firstTeamScore").innerText = scoreA
    }else{
        alert("Geçersiz değer girdiniz")
    }
}
function updateScoreB(){
    let scoreA = prompt("Skor Giriniz:")
    if (scoreA !== null && !isNaN(scoreA) && scoreA.trim() !== ""){
        document.getElementById("secondTeamScore").innerText = scoreA
    }else{
        alert("Geçersiz değer girdiniz")
    }
}

function teamLogoB(){
    let logoB = prompt("Küçük harf ve türkçe karakter kullanmadan takım adı giriniz:","besiktas");
    if(logoB === null){
        return;
    }
    let newLogo =`images/${logoB}.png`;
    document.getElementById("logoTeamB").src = newLogo;    
}

function teamLogoA(){
    let logoA = prompt("Küçük harf ve türkçe karakter kullanmadan takım adı giriniz:","besiktas");
    if(logoA === null){
        return;
    }
    let newLogo =`images/${logoA}.png`;
    document.getElementById("logoTeamA").src = newLogo;    
}


function musicStart(){
    let scoreA = parseInt(document.getElementById("firstTeamScore").innerText);
    let scoreB = parseInt(document.getElementById("secondTeamScore").innerText);
    let teamMusicA = document.getElementById("teamMusicA");
    let teamMusicB = document.getElementById("teamMusicB");
    let nameA = document.getElementById("firstTeamName").innerHTML
    let nameB = document.getElementById("secondTeamName").innerHTML
    
    if (scoreA > scoreB){
        playMusic(teamMusicA);
        alert(`Tebrikler ${nameA} kazandı`)
    }else if(scoreA < scoreB){
        playMusic(teamMusicB)
        alert(`Tebrikler ${nameB} kazandı`)
    }else{
        playMusic(teamMusic0)
        alert("Her iki takımıda tebrik ederiz")
    }
}
function playMusic(audioElement) {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}
