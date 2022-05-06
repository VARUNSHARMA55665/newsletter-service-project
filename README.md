# Newsletter Service

It is a service which will send pre-decided content to a specific set of users[subscriber] at specified intervals/time by mail. 

In this project Node.js is used as server side language and Mongodb is used to store data in database, Postman is used to send api requests.

In this project we will be working with basically 3 thing  
1. Topic
2. Content
3. Subscriber

## Topic

Their will be different topics of our Newsletter Service.

Each topic have title, their various content and subscriber.

Here content will be array of ids of type content.

subscriber is array of ids of type subscriber

## Content
Each Content is linked to some topic.

Each Content have topic, contentText, sendTime.
Here topic is of type id which is id of the topic which we want to connect with,

contentText is text of content,

sendTime is time at which we want to send mail to subscriber

## Subscriber
Each Subscriber is linked to some topic.

Each Subscriber have name, email, topic.

name is name of subscriber,

email is email of subscriber, 

topic is of type id which is id of the topic which we want to subscribe.

## Execution and Installation

Pull from Github from branch master.

After pulling the code from github-

Install all dependencies that are mentioned in package.json file.

To run the server command is npm start.

This project runs on port 8000.

## Apis

#### Point to Remember:-
For Every POST request in below apis in Postman firstly set:-  
Headers:-
| Key            | Type                                |
| :--------      | :-------                            |
| Content-Type   | `application/x-www-form-urlencoded` |

Body:-  
Every Key and Value pairs data be enter in x-www-form-urlencoded

#### Create Topic - Request type - POST
localhost:8000/topic/add

| Key         | Type     |
| :-------    | :------- |
| title       | `string` |

#### Create Content - Request type - POST
localhost:8000/content/add

| Key             | Type         |
| :--------       | :-------     |
| topic           | `id`         |
| contentText     | `String`     |
| sendTime        |  `Date`      |

sendTime format should be 'YYYY-MM-DD'

#### Create Subscriber - Request type - POST
localhost:8000/content/add

| Key             | Type         |
| :-------        | :-------     |
| name            | `String`     |
| email           | `String`     |
| topic           | `id`         |

## Assumptions and Conclusion
By this service we can send email to subscriber by time of content, but we are sending mail after every 3 minutes in order to see the program execution easily.

#### Conclusion
Email is send to subscribers which are subscribered to specific topic and topic's content is being send in mail.
