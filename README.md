# Todo List

This app is built with NextJS and ExpressJS as a backend library. I used MongoDB as a database for my users and their todos. This app allows users to authenticate, register and create their todos that will be saved to the database.


## Architecture
![](https://i.imgur.com/eE8BBPM.png)
## UML diagrams

This is the Usecase Diagram of the app :

![image](https://i.imgur.com/g4HY4Jo.png)

and this is the entity-relationship Diagram :

![image](https://i.imgur.com/F8CTEG0.png)

## Docker

<img  width="300" height="250" src="https://i0.wp.com/ledatascientist.com/wp-content/uploads/2020/01/docker_logo.png?fit=601%2C431&ssl=1" />


Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

https://www.docker.com/

## Installation

Clone repo into your directory , you need docker to run it .

```bash
    cd my-project
    docker-compose -f Docker-compose.yaml.up
```

The application runs now at http://localhost:3000
