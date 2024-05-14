import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  // Stanje za pohranu knjiga
  const [knjige, postaviKnjige] = useState([]);
  const [naslov, setNaslov] = useState('');
  const [autor, setAutor] = useState('');

  // useEffect kuka za dohvaćanje knjiga pri prvom renderiranju
  useEffect(() => {
    // Funkcija za dohvaćanje knjiga s backenda
    const dohvatiKnjige = async () => {
      try {
        const response = await fetch('http://localhost:3000/knjige'); // Zamijenite URL s odgovarajućim URL-om vašeg backend servera
        const data = await response.json();
        postaviKnjige(data);
      } catch (error) {
        console.error('Greška prilikom dohvaćanja knjiga:', error);
      }
    };

    // Poziv funkcije za dohvaćanje knjiga
    dohvatiKnjige();
  }, []); // Prazno polje ovdje osigurava da će se ova funkcija izvršiti samo pri prvom renderiranju komponente

  // Funkcija za slanje zahtjeva za dodavanje nove knjige
const dodajKnjigu = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/knjige', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: naslov, author: autor })
    });

    if (response.ok) {
      // Ažuriranje stanja s novom knjigom
      const novaKnjiga = await response.json();
      postaviKnjige([...knjige, novaKnjiga]);

      // Resetiranje forme
      setNaslov('');
      setAutor('');
    } else {
      console.error('Greška prilikom dodavanja knjige:', response.statusText);
    }
  } catch (error) {
    console.error('Greška prilikom slanja zahtjeva za dodavanje knjige:', error);
  }
};


  // Funkcija za slanje zahtjeva za ažuriranje knjige
const azurirajKnjigu = async (id) => {
  
  const noviNaslov = prompt('Unesite novi naslov:');
  const noviAutor = prompt('Unesite novog autora:');

  try {
    const response = await fetch(`http://localhost:3000/knjige/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: noviNaslov, author: noviAutor })
    });

    if (response.ok) {
      // Ažuriranje stanja s ažuriranom knjigom
      const azuriranaKnjiga = await response.json();
      const azuriraneKnjige = knjige.map(knjiga =>
        knjiga._id === azuriranaKnjiga._id ? azuriranaKnjiga : knjiga
      );
      postaviKnjige(azuriraneKnjige);
    } else {
      console.error('Greška prilikom ažuriranja knjige:', response.statusText);
    }
  } catch (error) {
    console.error('Greška prilikom slanja zahtjeva za ažuriranje knjige:', error);
  }
};

// Funkcija za slanje zahtjeva za brisanje knjige
const obrisiKnjigu = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/knjige/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      // Filtriranje knjiga kako bi se uklonila obrisana knjiga
      const filtriraneKnjige = knjige.filter(knjiga => knjiga._id !== id);
      postaviKnjige(filtriraneKnjige);
    } else {
      console.error('Greška prilikom brisanja knjige:', response.statusText);
    }
  } catch (error) {
    console.error('Greška prilikom slanja zahtjeva za brisanje knjige:', error);
  }
};

  return (
    <div className="App">
      <h1>Moja Knjižnica</h1>
        <div className="knjige">
          {knjige.map(knjiga => (
            <div key={knjiga._id} className='knjiga'>
              <strong>{knjiga.title}</strong> - {knjiga.author}
              <button onClick={() => azurirajKnjigu(knjiga._id)}>Ažuriraj</button>
              <button onClick={() => obrisiKnjigu(knjiga._id)}>Obriši</button>
            </div>
          ))}
        </div>
        {/* Forma za dodavanje nove knjige */}
        <form onSubmit={dodajKnjigu}>
          <h2>Dodaj novu knjigu</h2>
          <label htmlFor="naslov">Naslov:</label>
          <input type="text" id="naslov" value={naslov} onChange={(e) => setNaslov(e.target.value)} required />
          <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} required />
          <button type="submit">Dodaj</button>
        </form>

    </div>
  );
}

export default App;
