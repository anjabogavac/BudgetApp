#  BudgetApp

BudgetApp je mobilna/web aplikacija za planiranje i praćenje budžeta, razvijena pomoću **Angular** frameworka.  
Omogućava korisnicima da dodaju, prate i brišu prihode, rashode i investicije.  
Podaci se čuvaju i sinhronizuju putem **Firebase Realtime Database**.

---

##  Funkcionalnosti

- Login i registracija korisnika  
- Dodavanje novih stavki (prihodi, rashodi, investicije)  
- Pregled svih unetih stavki sa nazivom, iznosom i kategorijom  
- Automatski prikaz ukupnog iznosa  
- Brisanje stavki (CRUD operacije)  
- Sinhronizacija sa **Firebase Realtime Database**  
- GitHub repozitorijum 

---
## Instalacija 

1. **Instaliraj Node.js i npm**  
   Preuzmi i instaliraj sa [https://nodejs.org/](https://nodejs.org/).  

2. **Instaliraj Angular CLI globalno**  
   Otvori terminal i pokreni:
   ```bash
   npm install -g @angular/cli
3.**Kloniraj repozitorijum**

git clone <https://github.com/anjabogavac/BudgetApp.git>
cd BudgetApp

4.** Instaliraj zavisnosti projekta **

npm install


## Pokretanje aplikacije

Pokreni lokalni development server komandom:

```bash
ng serve
Kada se server pokrene, otvori pregledač i idi na adresu:http://localhost:4200/
Aplikacija će se automatski ponovo učitati svaki put kada izmeniš neki od izvornog fajlova.

---

## Tehnologije

Angular CLI v20.1.6
Firebase Realtime Database
TypeScript
Visual Studio Code

---

## Firebase Integracija

Aplikacija je povezana sa **Firebase Realtime Database**, što omogućava:

- Automatsku sinhronizaciju podataka u realnom vremenu  
- Čuvanje prihoda, rashoda i investicija svakog korisnika  
- Brz i jednostavan pristup podacima sa više uređaja

Konfiguracija Firebase-a je već uključena u projektu, tako da je aplikacija spremna za pokretanje bez dodatnog podešavanja baze.

---

##  Autori
Anastasija Bogavac <anjabogavac123@gmail.com>
Ivana Andjelic <ivana_andjelic02@icloud.com>

---

## Planovi za budućnost

- Dodavanje grafikona za vizualizaciju budžeta
- Eksport podataka u CSV/PDF
- Push notifikacije za podsjetnike
- Naprednija autentifikacija korisnika

---

## Licence

Ovaj projekat je objavljen pod **MIT licencom**.
 To znači da ga možeš slobodno koristiti, modifikovati i distribuirati, uključujući u komercijalne svrhe, uz zadržavanje originalnih autora i licence.  

**Autori:** Anastasija Bogavac & Ivana Andjelic  
**Godina:** 2025



