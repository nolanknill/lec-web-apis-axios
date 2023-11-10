Request / Response lifecycle

Client -> send Request
Server -> do some magic, format a response, send the response back to Client
Client -> deal with Response AKA show the information in the DOM

Client = The Browser / our JavaScript code


HTTP Methods = Request

GET = Retrieving data

PATCH = Modify specific fields of a resource
PUT = Replaces the resource (similar to PATCH)
POST = Creating a new resource
DELETE = Deletes a resource

HTTP STATUS CODES -> Response 
200 OK
401 Unauthorized (don't know who you are, sorry)
403 Forbidden (I know who you are, but you're not allowed here)
404 resource not found
500 Server doesn't know what to do




Pets API



GET https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/pets

POST https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/pets