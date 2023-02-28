function temps(){
    let heures = document.getElementById("Heures").value
    let minutes = document.getElementById("Minutes").value
    let secondes = document.getElementById("Secondes").value

    secondes++
    if (secondes > 59){
        secondes = 0
        minutes++
}   
    if(minutes > 59){
        minutes = 0
        heures++  
}
    if(heures > 23)
        heures = 0 
        console.log(heures,minutes,secondes)
        console.log(`L'heure dans 1 seconde sera de ${heures}heures ${minutes}minutes et ${secondes}secondes`)
        document.getElementById("résultat").innerHTML = (`L'heure dans 1 seconde sera de ${heures}heures ${minutes}minutes et ${secondes}secondes`)
}