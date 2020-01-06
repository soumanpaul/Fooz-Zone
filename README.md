## A full-fledged REST API server with Express, Nodejs, MongoDB and Mongoose




## Demo

Live project

Client React App [here](http://foodzone2020client.herokuapp.com/)
Frontend Repo [here](https://github.com/soumanpaul/ZoodZone-React-frontend)


Mobile App repo [here](https://github.com/soumanpaul/ZoodZone-Mobile-App)
Android APK Download  Available [here]()

REST API Documentatioin [here](http://foodzone2020.herokuapp.com/)

Extensive Postman version of API documentation with examples [here](https://documenter.getpostman.com/view/5731747/SWLe6nhT?version=latest)


## Technologies

* JavaScript
* Nodejs
* Expressjs
* Mongodb
* Mongoose
* Jsonwebtoken
* Passportjs


# API Endpoints

REST API for Fooz Zone Restaurant Web and Mobile App, Peopel can book a table , order food and save there favoriate Food Dishes.

## Indices

* [Users](#users)

  * [Uers SignUp](#1-uers-signup)
  * [User Login](#2-user-login)
  * [User Logout](#3-user-logout)
  * [Get All Users(Admin only)](#4-get-all-users(admin-only))

* [Dishes](#dishes)

  * [Get All Dishes](#1-get-all-dishes)
  * [Add New Dishe (Admin only)](#2-add-new-dishe-(admin-only))
  * [Update Dish (Admin only)](#3-update-dish-(admin-only))
  * [Delete All Dishes  (admin only)](#4-delete-all-dishes--(admin-only))
  * [Get Single Dish](#5-get-single-dish)
  * [Post on single  Dish](#6-post-on-single--dish)
  * [Update Dish by ID (Admin Only)](#7-update-dish-by-id-(admin-only))
  * [Delete Dish By ID](#8-delete-dish-by-id)

* [Favorates](#favorates)

  * [Get all Favorates Dishes](#1-get-all-favorates-dishes)
  * [Add Multiple Dishes](#2-add-multiple-dishes)
  * [Delete All Favorates](#3-delete-all-favorates)
  * [Get Singel Favorate Dish By ID](#4-get-singel-favorate-dish-by-id)
  * [Add Dish By Id](#5-add-dish-by-id)
  * [Delete one Favorate Dish](#6-delete-one-favorate-dish)

* [Promos](#promos)

  * [Update Promos](#1-update-promos)
  * [Delete All promos](#2-delete-all-promos)
  * [Get Promos](#3-get-promos)
  * [Get single Promo](#4-get-single-promo)
  * [Post promos](#5-post-promos)
  * [Update Promo By ID](#6-update-promo-by-id)
  * [Delete Single Promo](#7-delete-single-promo)
  * [Add Promos](#8-add-promos)

* [Comments](#comments)

  * [Get all comments](#1-get-all-comments)
  * [Add Comments](#2-add-comments)
  * [Update Comment](#3-update-comment)
  * [Deletes All Comments](#4-deletes-all-comments)
  * [Get Single Comment](#5-get-single-comment)
  * [Post comment By ID](#6-post-comment-by-id)
  * [Update Comment By ID](#7-update-comment-by-id)
  * [Delete Single Comment](#8-delete-single-comment)

* [Leaders](#leaders)

  * [Get All Leaders](#1-get-all-leaders)
  * [Add Leaders (Admin only)](#2-add-leaders-(admin-only))
  * [Update Leaders (Admin only)](#3-update-leaders-(admin-only))
  * [Delete All Leaders](#4-delete-all-leaders)
  * [Get Single Leader](#5-get-single-leader)
  * [Update Leader](#6-update-leader)
  * [Add Leader](#7-add-leader)
  * [Delete Leader](#8-delete-leader)

* [Uploads](#uploads)

  * [Upload image](#1-upload-image)


--------


## Users
All endpoints related to User Authentication.



### 1. Uers SignUp


Endpoint for New User signUp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/signup
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"firstname": "kumar",
	"lastname": "Rahul",
	"username": "souman1729paul",
	"password": "123456",
	"admin": "true"
}
```



### 2. User Login


API endpoint for user Login


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"username": "soumanpaul1729",
	"password": "123456"
}
```



### 3. User Logout


API Endpoint for User Logout


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/logout
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| TOKEN | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1Nzc0ODEyMzAsImV4cCI6MTU3NzQ4NDgzMH0.4xYLBucE8PTTQEhq1Ol06fni2KltcrjH7nfxSgJpQ5Y | user token |



### 4. Get All Users(Admin only)


Get complete list of users from Database , only admin can access this route.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NzlhOGZmNWE2YjMwZDA3M2NkZGIiLCJpYXQiOjE1Nzc0ODI2NzksImV4cCI6MTU3NzQ4NjI3OX0.TNIDMhhs-53K4O7UduyjJwsPn_FT17-yz4ZDVnKICs4 | user token |



## Dishes
API Enpoints related to various Food Dishes.



### 1. Get All Dishes


Get all collections of dishes from the database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/dishes
```



### 2. Add New Dishe (Admin only)


This Endpoint addes new dishes to Database, Only admin is allowed.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/dishes
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NzlhOGZmNWE2YjMwZDA3M2NkZGIiLCJpYXQiOjE1Nzc1MjI0NDYsImV4cCI6MTU3NzUyNjA0Nn0.SmAcc2DVk7VjLwtU-VCTjBGiroWGkpLUPBOUhRmeWuc |  |



***Body:***

```js        
{
	"name": "Zucchipakoda",
      "image": "images/zucchipakoda.png",
      "category": "appetizer",
      "label": "",
      "price": "1.99",
      "featured": false,
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
}
```



### 3. Update Dish (Admin only)


This endpoint update dishe detailes.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/dishes
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"name": "Zucchipakoda",
      "image": "images/zucchipakoda.png",
      "category": "appetizer",
      "label": "",
      "price": "2.99",
      "featured": false,
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
}
```



### 4. Delete All Dishes  (admin only)


This endpoint deletes all dishes from databaase


***Endpoint:***

```bash
Method: DELETE
Type: FILE
URL: {{URL}}/api/v1/dishes
```



### 5. Get Single Dish


This endpoint fetch a single by dish id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/dishes/5d67e18897122871225f9de9
```



### 6. Post on single  Dish


Post operation not supported	


***Endpoint:***

```bash
Method: POST
Type: 
URL: {{URL}}/api/v1/dishes/5d67e18897122871225f9de9
```



### 7. Update Dish by ID (Admin Only)


Update Dish details based on Dish ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/dishes/5e07154a6eb401478d9aa2dc
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"name": "Zucchipakoda",
      "image": "images/zucchipakoda.png",
      "category": "appetizer",
      "label": "",
      "price": "5.5",
      "featured": false,
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
}
```



### 8. Delete Dish By ID


This Endpoint deletes dish by Dish ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/dishes/5e07154a6eb401478d9aa2dc
```



## Favorates
Collections of Endpoints to adds, update, delete Favorate Dishes



### 1. Get all Favorates Dishes


This endpoint fetch all favoriates Dishes


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/favorites/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1NzgwNDY4MTYsImV4cCI6MTU3ODA1MDQxNn0.9gQGwgf_8IgpfIFS-UQ7rNtQrdSrd43Iv4WoAkNcSlA | user token |



### 2. Add Multiple Dishes


This endpoints adds multiple dishes simultaniously


***Endpoint:***

```bash
Method: POST
Type: 
URL: {{URL}}/api/v1/favorites
```



### 3. Delete All Favorates


This endpoint deletes all favorate dishes from Database.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/favorites/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1NzgwNTQ5NDEsImV4cCI6MTU3ODA1ODU0MX0.J_uYxdkYAO_o1vYv8Oe5AHmVA1weZ9oaY7F9_TYsgjg | user token |



### 4. Get Singel Favorate Dish By ID


This Endpoint add Single Dish by Dish ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/favorites/5d6a1629402d07461abd1bba
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1NzgwNTQ5NDEsImV4cCI6MTU3ODA1ODU0MX0.J_uYxdkYAO_o1vYv8Oe5AHmVA1weZ9oaY7F9_TYsgjg | user token |



### 5. Add Dish By Id


Add Favorate dish by ID


***Endpoint:***

```bash
Method: POST
Type: 
URL: {{URL}}/api/v1/favorites/5d6a1629402d07461abd1bba
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1NzgwNDY4MTYsImV4cCI6MTU3ODA1MDQxNn0.9gQGwgf_8IgpfIFS-UQ7rNtQrdSrd43Iv4WoAkNcSlA | user token |



### 6. Delete one Favorate Dish


This endpoint deletes single dish by id from favorates collections


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/favorites/5d6a1629402d07461abd1bbb
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1NzgwNTQ5NDEsImV4cCI6MTU3ODA1ODU0MX0.J_uYxdkYAO_o1vYv8Oe5AHmVA1weZ9oaY7F9_TYsgjg | user token |



## Promos



### 1. Update Promos


This endpoint is used to update promos


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/v1/promos
```



### 2. Delete All promos


This endpoint delets all promos from database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/promos
```



### 3. Get Promos


This endpoint fetch all promos


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/promos
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	
}
```



### 4. Get single Promo


This endpoint Fetch promo by promo Id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/promos/5e07545422796531f6dc326f
```



### 5. Post promos


This endpoint Post single Promo


***Endpoint:***

```bash
Method: POST
Type: 
URL: {{URL}}/api/v1/promos/5e07545422796531f6dc326f
```



### 6. Update Promo By ID


This endpoint Update promo detailes by promo ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/promos/5e07545422796531f6dc326f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"label": "New label",
    "featured": true,
    "_id": "5e07545422796531f6dc326f",
    "name": "sam admin Buffet",
    "image": "images/buffet.png",
    "price": 2999,
    "description": "Featsdghkjuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
}
```



### 7. Delete Single Promo


THis endpoint deletes promo by promo ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/promos/5e07545422796531f6dc326f
```



### 8. Add Promos


This endpoints multiple promos to database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/promos
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
[
	{
      "name": "cybertruck2 unvill",
      "image": "images/buffet.png",
      "label": "New",
      "price": "49000",
      "featured": "true",
      "description": "Tesla new product2. All for just $19.99 per person "
    },
    {
      "name": "cybertruck3 unvill",
      "image": "images/buffet.png",
      "label": "New",
      "price": "69000",
      "featured": "true",
      "description": "Tesla new product3. All for just $19.99 per person "
    }
    
    ]
```



## Comments
Collections of endpoints for create, update, fetch and delete comments



### 1. Get all comments


This endpoints fetch all comments from database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/comments
```



### 2. Add Comments


This Endpoint add new comments in dishes


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/comments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        

        {
          "rating": 5,
          "comment": "Souman commenting username souman1729 in conFusion!",
          "author": "Souman Paul",
          "date": "2019-10-16T17:57:28.556094Z"
        }

```



### 3. Update Comment


This Endpoinst Update comments


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/v1/comments
```



### 4. Deletes All Comments


This Endpoinst Deletes all comments


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/comments
```



### 5. Get Single Comment


This endoint fetch single comment by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/comments/5e07dcc5bde5533f284976c6
```



### 6. Post comment By ID


This endpoints posts comment by ID


***Endpoint:***

```bash
Method: POST
Type: 
URL: {{URL}}/api/v1/comments/5e07dcc5bde5533f284976c6
```



### 7. Update Comment By ID


This endpoint updates comment by id


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/comments/5e07e10138e6736737d7107b
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| TOKEN | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1Nzc1NzQ0NTQsImV4cCI6MTU3NzU3ODA1NH0.z6VOrQ1AsHJzv7dz_aTYOLQRW4t8L1qXgADKxOpPHNE | user token |



***Body:***

```js        

        {
          "rating": 5,
          "comment": "Souman updated comment commenting  username souman1729 in conFusion!",
          "author": "Souman Paul",
          "date": "2019-10-16T17:57:28.556094Z"
        }
```



### 8. Delete Single Comment


This endpoints deletes comment by ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/comments/5e07e10138e6736737d7107b
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| TOKEN | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1Nzc1NzQ0NTQsImV4cCI6MTU3NzU3ODA1NH0.z6VOrQ1AsHJzv7dz_aTYOLQRW4t8L1qXgADKxOpPHNE | user token |



## Leaders



### 1. Get All Leaders


This endpoint fetch all leaders from Database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/leaders
```



### 2. Add Leaders (Admin only)


This endpoints add leader to database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/leaders
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"name": "Souman Paul",
      "image": "images/sam.png",
      "designation": "CEO",
      "abbr": "CEO",
      "featured": "true",
      "description": "Our CFO, souman, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
}
```



### 3. Update Leaders (Admin only)


This endpoint Updates Leaders info


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/leaders
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"name": "Souman Paul",
      "image": "images/sam.png",
      "designation": "CEO",
      "abbr": "CEO"
}
```



### 4. Delete All Leaders


This endpoint deletes all leaders from Database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/leaders/
```



### 5. Get Single Leader


This endpoint fetch leader by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/leaders/5cf65b482df15f55fbf1ba45
```



### 6. Update Leader


This Endpoint Update Leader info by ID


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/leaders/5cf65b482df15f55fbf1ba45
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"name": "Souman chander Paul",
      "image": "images/sam.png",
      "designation": "CEO",
      "abbr": "CEO",
      "featured": "true",
      "description": "Our CFO, souman, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
}
```



### 7. Add Leader



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/leaders/5cf65b482df15f55fbf1ba45
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"name": "Sam Paul",
      "image": "images/sam.png",
      "designation": "CEO",
      "abbr": "CEO",
      "featured": "true",
      "description": "Our CFO, souman, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
}
```



### 8. Delete Leader


This endpoint deletes leader by  ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/leaders/5cf65b482df15f55fbf1ba45
```



## Uploads



### 1. Upload image


This endpoint will uoload user image


***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/imageUpload
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA2NWExZmIwNjVkMTBmODFmMzJhNzAiLCJpYXQiOjE1NzgwNDMwNjEsImV4cCI6MTU3ODA0NjY2MX0.C90QmloTZd9FaKvOJfxVQL6F3MKyFW5oepVuHWv832k | user token |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| f |  |  |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| imageFile |  |  |



---
[Back to top](#restaurant-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-01-03 18:41:08 by [docgen](https://github.com/thedevsaddam/docgen)

