## fastify life cycle (App lifecycle)

- Event triggering
- 1) onRoute - acts when u add a new endpoint into fastify instace
- 2) onReady - run when app is ready to start listening for http request
- 3) onRegister - acts when any registration happens
- 4) onClose - acts when server is stopping

## fastify life cycle (Request lifecycle -hooks)

- `https://fastify.dev/docs/v2.15.x/Documentation/Lifecycle/`

- all are HOOks
- 1) onRequest - can be used as logging, auth, rate limiting
- 2) preParsing - modeify raw request like chaning url, change header body
- 3) preValidation - adding custom validation
- 4) validation - validating schema of request that u are getting
- 5) preHandler - func before controller/bussiness logic handles
- 6) userHandler - controller/bussiness logic handles
- and then reply
- 7) onSend 
- 8) onResponse