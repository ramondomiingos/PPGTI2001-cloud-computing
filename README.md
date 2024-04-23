# Cloud Project
This project was the evaluation of the Cloud Computing discipline, PPGTI2001, from the UFRN master's degree. It needs to create a pod with multiple containers, it must be raised and it must meet the following requirements:
- The pod must have 4 containers and must be created using a
Kubernetes manifest (yaml file);

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
![screenshot frontend](./frontend.png "screenshot frontend")
### Docker-compose
For run using only docker-compose use 
```bash 
docker-compose up
```

services:
- mongo: MongoDB for product registration
- redis: Cache for frequent requests
- api : REST api to connect to the database.
- front: Front using React.

## Kubernets 

### Step 1: Send this  images for personal DockerHub (opcional)
 To build api image
```bash 
cd api
docker build -t <your_username>/api-products .
docker push  <your_username>/api-products
```
To build front image
 ```bash 
cd frontend
docker build -t <your_username>/front-products .
docker push  <your_username>/front-products
```

<!-- my script
 ```bash 
cd api
docker build -t ramondomiingos/api-products .
docker push  ramondomiingos/api-products
cd ..
cd frontend
docker build -t ramondomiingos/front-products .
docker push  ramondomiingos/front-products
cd ..
```
-->

The images MONGO and REDIS is oficial images, are already available on dockerhub for use.




 > It is expected that the machine environment is already pre-configured, and masters a workers joined, using `kubeadm join --token` command

### Step 2: Create namespace

```bash
kubectl get ns
kubectl create namespace products-api
kubectl get ns
kubectl config get-contexts
kubectl config set-context --current --namespace=products-api
```

**[output]** 

kubectl config set-context --current --namespace=products-api


```bash
kubectl config get-contexts
```

**[output]**
|CURRENT  | NAME                          |CLUSTER  |    AUTHINFO          | NAMESPACE|
|--------| ------------------------------| ----------| ----------| ---------- |
|\*        | kubernetes-admin@kubernetes  | kubernetes  | kubernetes-admin   |products-api|


### Step 4: Create Pod Spec
has details about each application that we will upload.

[products-pod.yaml](./products-pod.yaml)

send this file for your master ( can use scp)
```bash
scp roducts-pod.yaml remote_username@10.10.0.2:/remote/directory
```
<!--
scp roducts-pod.yaml ramon@1192.168.64.2:/
-->

### Step 5: Apply spec file

In sequence need apply this file, and check pods.


```bash
kubectl apply -f products-pod.yaml
```
** [output]**
pod/web-products created

```bash
kubectl get pods
```
**[output]**
|NAME           |READY  | STATUS |             RESTARTS  | AGE|
| ---|            ----    | ---- |  ---------| --|
|web-products   |0/4     |ContainerCreating |  0       |   40s |

while containers are created, check the logs with:
```bash
kubectl logs web-products
```
If it takes a long time to successfully create the containers, check the logs individually to see if any errors occurred, if necessary correct and apply this file again.
```bash
kubectl logs web-products -c [redis-service, mongo, frontend, api]
```
 > erro example
> |NAME       |    READY  |  STATUS      |       RESTARTS      |  AGE| 
> | ----- | ------- | ------- | ------ | ------| 
> |web-products  |   3/4     | CrashLoopBackOff  |   12 (24s ago) |   10m | 

after a few seconds, you can run this same command, and will see:


**TODO: Step-by-step run pods with k8s**