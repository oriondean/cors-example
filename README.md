# CORS Example

A small example of how [Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) can be achieved via a locally hosted proxy without the need for any external server-side changes. The request made by the web-page is permitted since it is sent to the proxy from the page's viewpoint. The proxy handles making the request to the external API and routing the response back to the webpage.

A direct request from the web-page to the external API would be blocked due to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) most browsers implement to restrict XMLHTTPRequests only to URLs with the same origin (cross-domain request).

Additionally, a request made to the locally hosted proxy would also be blocked by the same-origin policy if the webpage is opened via the file:// protocol (e.g. opening it via your file explorer). The request is blocked as the origin is considered to be null rather than localhost. [(Further reading)](https://en.wikipedia.org/wiki/Same-origin_policy#Corner_cases_and_exceptions).

The external API could relax the same-origin policy by including `Access-Control-Allow-Origin` alongside an appropriate value for the origin in its response headers. One example of an API that does this is [Block Chain](http://blockchain.info) which mirrors the [Block Explorer](http://block-explorer.com) API. Using the Block Chain API would mean the locally hosted proxy server would not be needed.

## How to run
* Type the following commands into your command line to start up a local proxy/file server
* `npm install`
* `node server.js`
* Browse to http://localhost:2810/ to view the cors-example webpage
* You'll see Request succeeded! if the request was not blocked
* You'll see request failed! if the request was blocked
