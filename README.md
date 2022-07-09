## Frontend

1. docker compose up -d
2. fuldt rebuild (docker compose up -d --build)

# Deploy

1. EC2 -> Ubuntu -> Docker -> Docker Dompose
1. git pull
1. docker compose up -d --build

## Parametere i docker compose

-d det betyder detacher: man kan kører videre uden at være "inde i den", altså man kan bruge command promt
--build den bygger det hele forfra, den kommer ikke noget cache. Det er godt at gøre hvis man har lavet ændringer
-logs, til at analysere det. Man får id'et ved docker ps. Man håber ikke hele id'et.
