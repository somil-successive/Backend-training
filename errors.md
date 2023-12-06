# Client-Side Status Codes:

## 400 Bad RequestPermalink

The 400 Bad Request error message is one of the most generic HTTP status codes. It implies that you did not correctly format your API request. If no additional error information is given in the response body, you have to check the docs.

## 401 UnauthorizedPermalink

This status code means you haven’t yet authenticated against the API. The API doesn’t know who you are and it won’t serve you.For most APIs you need to sign up and get an API key.

## 403 ForbiddenPermalink

The forbidden status indicates that you don’t have permission to request that URL. You’re authenticated, but the user or role you’re authenticated for isn’t permitted to make the API request.

## 404 Not FoundPermalink

This is by far the most common HTTP status code you can get. It indicates that the URL you used in your request doesn’t exist on the API server, or origin server.

## 429 Too Many RequestsPermalink

Most API subscription plans have limits — the cheaper the plan, the fewer requests per second are allowed for your API key.
If you’re sending too many requests in a short amount of time, consider throttling them in your client.

# Server-Side Status Codes:

## 500 Internal Server ErrorPermalink

This HTTP status code can mean anything really, but it usually indicates the API server crashed. It could have been caused by something related to your API call.

## 502 Bad GatewayPermalink

This response tells you that the server you were calling wasn’t the actual API server, but a gateway or proxy. The proxy server tries to call the API server in your name. This error response also indicates that the API server didn’t answer.

## 503 Service UnavailablePermalink

The 503 Service Unavailable Status indicates a server error. Too many API requests were sent and now the API can’t handle any more of them.

## 504 Gateway Timed OutPermalink

Like the 502 Bad Gateway status, this response code tells you that the server you were calling is a proxy for the real API server. This time, the problem is the API server’s slow response.

## 501 Not ImplementedPermalink

The 501 Not Implemented status code is related to the HTTP method you used to request an URL. You can try a different HTTP method to make the request.
