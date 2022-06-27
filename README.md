## Zadanie pre prácu

### Hotové veci
- Prepojenie stránky s API mockapi.io
- Vytvorenie Komponentu na pridávanie Itemov do ToDo Listu, ktoré sa následne pošlú do API
- Renderovanie jednotlivých Itemov z API, takže je zoznam stále aktuálny
- Možnosť pridania Title, textu a Dátumu (čas bude neskôr pridaný, keď bude integrovaný Day.js)
- Pridaný button na DELETE request, pre každý individuálny item, po ktorom sa pošle request a item sa vymaže z UI a aj z API.  
  
  Pozn. 
  - na všetku komunikáciu ohľadne API bol využitý axios, ktorý som taktiež aj prvýkrát používal. 
  - väčšina komponentov je vytvorená pomocou Material UI, ktorý som tiež používal prvýkrát, nastali docela komplikácie pri jeho integrovaní, pretože som predtým používal TailWind CSS.
  - taktiež bola veľká časť kódu skopírovaná a nie ručne vytvorená, pretože som ešte nepokročil v reacte do toho bodu kedy som s niečím ako hooks a pod. veci. Actually som vlastne len vedel prácu s props a akurát išiel na state, no chápanie aj fungovania skopírovaného kódu bolo relatívne jednoduché na základe mojich skúseností z PHP a Laravelu.   
  
  
### Nedokončené veci 
- Označenie Itemu ako dokončený, spolu so všetkým možním pre predpripravenie filtrovania
- vytvorenie filtrovania itemov podľa stavu dokončený, aktívny alebo všetky
- pridanie vyhladávania itemov podla title v rámci celého zoznamu itemov
- pridanie dátumu a času v rámci vytvorenia itemu a nie len dátumu. 
