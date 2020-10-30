# exam-project 

Hvordan laste ned prosjektet mitt:

1. Gå til en mappe hvor du vil ha prosjektet. 
2. Høyreklikk på mappen —> Nytt terminalvindu på mappens plassering
3. Git clone https://github.com/tirillberg/exam-project.git
4. cd exam-project
*når du er inne på exam-project*
5. npm install
*sjekk at npm install gikk fint*
6. npm start

Programmer det de vil

Når du skal pushe det du har laget til oss andre, så skal du lage en branch med dine nye endringer

(Hvis du vet det er gjort store endringer i master, så pull’er du fra master først. Det gjør du på denne måten)
1. git stash (det betyr at du legger vekk det du har gjort, men du lagrer det i en stack)
2. git pull (puller fra master så du har siste versjon av master)
3. git stash pop (merger dine endringer med siste versjon av master)

Så skal du opprette branch
1. git checkout -b "<branch name>"
2. git add . (eventuelt istedenfor "." så skriv fil-navnet, så er det kun den som tilføyes)
3. git commit -m "<skriv her hva du har gjort på engelsk!!>"
4. git push


Skriv alltid i chatten når du pusher noe til en branch så vi alle er klar over det :) Det skal aldri pushes direkte til master!
