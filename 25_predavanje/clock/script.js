setInterval(() => {
    // Dohvaćanje elemenata vremena
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let secondes = document.getElementById('seconds');
  
    // Dohvaćanje elemenata indikatora vremena
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
  
    // Dohvaćanje elemenata točkica
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');
  
    // Dohvaćanje trenutnog vremena
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
  
    // Dodavanje nula ispred jednoznamenkastih brojeva
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    // Postavljanje vremena
    hours.innerHTML = h + 'h';
    minutes.innerHTML = m + 'min';
    secondes.innerHTML = s + 'sec';
  
    // Postavljanje kružnih indikatora vremena
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  
    // Postavljanje pozicije točkica indikatora vremena
    dotH.style.transform = `rotate(${h * 15}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
