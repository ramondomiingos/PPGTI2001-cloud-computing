# Cloud Project

## About applications

### API

Product registration API

```JSON 
{
"name": "PEN_BLACK",
"description": "black pen, with transparent body",
"qtdAvailable": 12
}
```
- /product  `(get, post)`
- /product/:id  `(put, delete, get)`

### FRONT
Application that consumes the API, displaying listings and forms.
Using https://refine.dev/ as a base template.
### Docker-compose
For run using docker-compose use 
```bash 
docker-compose up
```

services:
- mongo: MongoDB for product registration
- redis: Cache for frequent requests
- api : REST api to connect to the database.
- front: Front using React.

## Kubernets 

TODO: Step-by-step run pods with k8s 