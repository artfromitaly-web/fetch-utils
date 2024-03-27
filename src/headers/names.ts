//#region Common
/**
 * These are headers that can occur as both request and response headers
 */

/**
 * The `Connection` general header controls whether the network connection stays
 * open after the current transaction finishes. If the value sent is
 * `keep-alive`, the connection is persistent and not closed, allowing for
 * subsequent requests to the same server to be done.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)
 */
export const Connection = 'Connection'

/**
 * The `Cache-Control` HTTP header field holds directives (instructions) — in
 * both requests and responses — that control [caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
 * in browsers and shared caches (e.g. Proxies, CDNs).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
 */
export const CacheControl = 'Cache-Control'

/**
 * The `Content-Length` header indicates the size of the message body, in bytes,
 * sent to the recipient.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
 */
export const ContentLength = 'Content-Length'

/**
 * The `Content-Type` representation header is used to indicate the original
 * media type of the resource (prior to any content encoding applied for
 * sending).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
 */
export const ContentType = 'Content-Type'

/**
 * The `Date` general HTTP header contains the date and time at which the
 * message was originated.
 *
 * > Warning: Date is listed in the forbidden header names in the fetch spec,
 * so this code will not send the Date header:
 *
 * > ```js
 * fetch('https://httpbin.org/get', {
 *   'headers': {
 *     'Date': (new Date()).toUTCString()
 *   }
 * })
 * > ```
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date)
 */
export const Date = 'Date'

/**
 * The `Pragma` HTTP/1.0 general header is an implementation-specific header
 * that may have various effects along the request-response chain. This header
 * serves for backwards compatibility with the HTTP/1.0 caches that do not have
 * a [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
 * HTTP/1.1 header.
 *
 * > **Note:** `Pragma` is not specified for HTTP responses and is therefore not
 * > a reliable replacement for the general HTTP/1.1 `Cache-Control` header,
 * > although its behavior is the same as `Cache-Control: no-cache` if the
 * > `Cache-Control` header field is omitted in a request.
 * >
 * > Use `Pragma` only for backwards compatibility with HTTP/1.0 clients.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma)
 */
export const Pragma = 'Pragma'

/**
 * The HTTP 1.1 (only) `Upgrade` header can be used to upgrade an already
 * established client/server connection to a different protocol (over the same
 * transport protocol).
 *
 * For example, it can be used by a client to upgrade a connection from
 * HTTP 1.1 to HTTP 2.0, or an HTTP or HTTPS connection into a WebSocket.
 *
 * > **Warning:** HTTP/2 explicitly disallows the use of this mechanism/header;
 * > it is specific to HTTP/1.1.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
 */
export const Upgrade = 'Upgrade'

/**
 * Informs the server of proxies through which the request was sent
 */
export const Via = 'Via'

/**
 * The `Want-Digest` HTTP header is primarily used in a request, to ask the
 * server to provide a [digest](https://developer.mozilla.org/en-US/docs/Glossary/Digest)
 * of the requested resource using the
 * {@link Digest} response header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Want-Digest)
 */
export const WantDigest = 'Want-Digest'

/**
 * The `Warning` HTTP header contains information about possible problems with
 * the status of the message. More than one `Warning` header may appear in a
 * response.
 *
 *
 * > @deprecated This feature is no longer recommended.
 * > Though some browsers might still support it, it may have already been
 * > removed from the relevant web standards, may be in the process of being
 * > dropped, or may only be kept for compatibility purposes. Avoid using it,
 * > and update existing code if possible; see the compatibility table at the
 * > bottom of this page to guide your decision. Be aware that this feature may
 * > cease to work at any time.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning)
 */
export const Warning = 'Warning'
//#endregion

//#region Request

//#region General

/**
 * Acceptable instance-manipulations for the request.
 */
export const Aim = 'A-IM'

/**
 * The `Accept` request HTTP header indicates which content types, expressed as
 * [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types),
 * the client is able to understand.
 *
 * The server uses [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * to select one of the proposals and informs the client of the choice with the
 * Content-Type response header.
 *
 * Browsers set required values for this header based on the context of the
 * request. For example, a browser uses different values in a request when
 * fetches a CSS stylesheet, image, video, or a script.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)
 */
export const Accept = 'Accept'

/**
 * The `Accept-Charset` request HTTP header was a header that advertised a
 * client's supported character encodings. It is no longer widely used.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset)
 */
export const AcceptCharset = 'Accept-Charset'

/**
 * The `Accept-Encoding` request HTTP header indicates the content encoding
 * (usually a compression algorithm) that the client can understand. The server
 * uses [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * to select one of the proposal and informs the client of that choice with the
 * `Content-Encoding` response header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)
 */
export const AcceptEncoding = 'Accept-Encoding'

/**
 * The `Accept-Language` request HTTP header indicates the natural language and
 * locale that the client prefers. The server uses
 * [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * to select one of the proposals and informs the client of the choice with the
 * `Content-Language` response header.
 *
 * Browsers set required values for this header according to their active user
 * interface language. Users rarely change it, and such changes are not
 * recommended because they may lead to fingerprinting.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
 */
export const AcceptLanguage = 'Accept-Language'

/**
 * Request a past version of the resource prior to the datetime passed
 */
export const AcceptDatetime = 'Accept-Datetime'

/**
 * The HTTP `Authorization` request header can be used to provide credentials
 * that authenticate a user agent with a server, allowing access to a protected
 * resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
 */
export const Authorization = 'Authorization'

/**
 * The `Cookie` HTTP request header contains stored HTTP cookies associated with
 * the server (i.e. previously sent by the server with the
 * [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
 * header or set in Javascript using
 * [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie)
 */
export const Cookie = 'Cookie'

/**
 * The `Expect` HTTP request header indicates expectations that need to be met
 * by the server to handle the request successfully.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)
 */
export const Expect = 'Expect'

/**
 * The `Forwarded` request header contains information that may be added by
 * [reverse proxy servers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling)
 * (load balancers, CDNs, and so on) that would otherwise be altered or lost
 * when proxy servers are involved in the path of the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded)
 */
export const Forwarded = 'Forwarded'

/**
 * The `From` request header contains an Internet email address for a human user
 * who controls the requesting user agent.
 *
 * > Warning: You must not use the From header for access control or
 * > authentication.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From)
 */
export const From = 'From'

/**
 * The `Host` request header specifies the host and port number of the server
 * to which the request is being sent.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)
 */
export const Host = 'Host'

/**
 * The `If-Match` HTTP request header makes the request conditional. For
 * [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) and
 * [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
 * methods, the server will return the requested resource only if it matches
 * one of the listed `ETags`. For [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
 * and other non-safe methods, it will only upload the resource in this case.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)
 */
export const IfMatch = 'If-Match'

/**
 * The `If-Modified-Since` request HTTP header makes the request conditional:
 * the server sends back the requested resource, with a
 * [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 * status, only if it has been last modified after the given date.
 *
 * If the resource has not been modified since, the response is a
 * [`304`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) without
 * any body; the `Last-Modified` response header of a previous request contains
 * the date of last modification. Unlike
 * {@link IfUnmodifiedSince `If-Unmodified-Since`}, `If-Modified-Since` can
 * only be used with a `GET` or `HEAD`.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)
 */
export const IfModifiedSince = 'If-Modified-Since'

/**
 * The `If-None-Match` HTTP request header makes the request conditional.
 * For [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) and
 * [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
 * methods, the server will return the requested resource, with a
 * [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) status,
 * only if it doesn't have an [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 * matching the given ones.
 *
 * For other methods, the request will be processed only if the eventually
 * existing resource's [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 * doesn't match any of the values listed.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)
 */
export const IfNoneMatch = 'If-None-Match'

/**
 * The `If-Range` HTTP request header makes a range request conditional: if the
 * condition is fulfilled, the range request is issued, and the server sends
 * back a [`206`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
 * `Partial Content` answer with the appropriate body.
 *
 * If the condition is not fulfilled, the full resource is sent back with a
 * [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) `OK`
 * status.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range)
 */
export const IfRange = 'If-Range'

/**
 * The HTTP `If-Unmodified-Since` request header makes the request for the
 * resource conditional: the server will send the requested resource or accept
 * it in the case of a [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
 * or another non-[safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP)
 * method only if the resource has not been modified after the date specified by
 * this HTTP header.
 *
 * If the resource has been modified after the specified date, the response
 * will be a [`412`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412)
 * `Precondition Failed` error.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)
 */
export const IfUnmodifiedSince = 'If-Unmodified-Since'

/**
 * Limit the number of times the message can be forwarded through proxies or
 * gateways
 */
export const MaxForwards = 'Max-Forwards'

/**
 * The HTTP `Proxy-Authorization` request header contains the credentials to
 * authenticate a user agent to a proxy server, usually after the server has
 * responded with a [407](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407)
 * `Proxy Authentication Required` status and the
 * [`Proxy-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
 * header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)
 */
export const ProxyAuthorization = 'Proxy-Authorization'

/**
 * The `Range` HTTP request header indicates the part of a document that the
 * server should return. Several parts can be requested with one Range header
 * at once, and the server may send back these ranges in a multipart document.
 *
 * If the server sends back ranges, it uses the
 * [`206 Partial Content`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
 * for the response.
 *
 * If the ranges are invalid, the server returns the
 * [`416 Range Not Satisfiable`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416)
 * error.
 *
 * The server can also ignore the `Range` header and return the whole document
 * with a [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 * status code.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
 */
export const Range = 'Range'

/**
 * The `Referer` HTTP request header contains an absolute or partial address of
 * the page that makes the request. The `Referer` header allows a server to
 * identify a page where people are visiting it from.
 *
 * This data can be used for analytics, logging, optimized caching, and more.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
 */
export const Referer = 'Referer'

/**
 * The `Save-Data` [network client hint](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints#network_client_hints)
 * request header field is a boolean which indicates the client's preference for
 * reduced data usage. This could be for reasons such as high transfer costs,
 * slow connection speeds, etc.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data)
 */
export const SaveData = 'Save-Data'

/**
 * Specify the encodings the client can accept. Accepted values:
 *
 *   - `compress`
 *   - `deflate`
 *   - `gzip`
 *   - `trailers`
 *
 * Only `trailers` is supported in HTTP/2
 */
export const Te = 'TE'

/**
 * The HTTP `Upgrade-Insecure-Requests` request header sends a signal to the
 * server expressing the client's preference for an encrypted and authenticated
 * response, and that it can successfully handle the
 * [upgrade-insecure-requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
 * [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) directive.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)
 */
export const UpgradeInsecureRequests = 'Upgrade-Insecure-Requests'

/**
 * The `User-Agent` [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
 * is a characteristic string that lets servers and network peers identify the
 * application, operating system, vendor, and/or version of the requesting
 * user agent.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)
 */
export const UserAgent = 'User-Agent'

//#endregion

//#region Cors

/**
 * The `Access-Control-Request-Headers` request header is used by browsers when
 * issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request),
 * to let the server know which HTTP headers the client might send when the
 * actual request is made (such as with `setRequestHeader()`).
 *
 * The complementary server-side header of `Access-Control-Allow-Headers` will
 * answer this browser-side header.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)
 */
export const AccessControlRequestHeaders = 'Access-Control-Request-Headers'

/**
 * The `Access-Control-Request-Method` request header is used by browsers when
 * issuing a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request),
 * to let the server know which [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
 * will be used when the actual request is made.
 *
 * This header is necessary as the preflight request is always an
 * [`OPTIONS`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)
 * and doesn't use the same method as the actual request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)
 */
export const AccessControlRequestMethod = 'Access-Control-Request-Method'

/**
 * The `Origin` request header indicates the
 * [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)
 * (scheme, hostname, and port) that caused the request. For example, if a user
 * agent needs to request resources included in a page, or fetched by scripts
 * that it executes, then the origin of the page may be included in the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
 */
export const Origin = 'Origin'

//#endregion

//#region Fetch Metadata

/**
 * The `Sec-Fetch-Dest` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * indicates the request's destination. That is the initiator of the original
 * fetch request, which is where (and how) the fetched data will be used.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)
 */
export const SecFetchDest = 'Sec-Fetch-Dest'

/**
 * The `Sec-Fetch-Mode` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * indicates the mode of the request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode)
 */
export const SecFetchMode = 'Sec-Fetch-Mode'

/**
 * The `Sec-Fetch-Site` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * indicates the relationship between a request initiator's origin and the
 * origin of the requested resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site)
 */
export const SecFetchSite = 'Sec-Fetch-Site'

/**
 * The `Sec-Fetch-User` [fetch metadata request header](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header)
 * is only sent for requests initiated by user activation, and its value will
 * always be `?1`.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User)
 */
export const SecFetchUser = 'Sec-Fetch-User'

//#endregion

//#region Non-Standard

/**
 * The `DNT` (Do Not Track) request header indicates the user's tracking
 * preference. It lets users indicate whether they would prefer privacy rather
 * than personalized content.
 *
 * > @deprecated This feature is no longer recommended. Though some browsers
 * > might still support it, it may have already been removed from the relevant
 * > web standards, may be in the process of being dropped, or may only be kept
 * > for compatibility purposes. Avoid using it, and update existing code if
 * > possible; see the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT#browser_compatibility)
 * > to guide your decision. Be aware that this feature may cease to work at any
 * > time.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT)
 */
export const Dnt = 'DNT'

/**
 * The `X-Forwarded-For` (XFF) header is a de-facto standard header for
 * identifying the originating IP address of a client connecting to a web server
 * through an HTTP proxy or a load balancer.
 *
 * When traffic is intercepted between clients and servers, server access logs
 * contain the IP address of the proxy or load balancer only. To see the
 * original IP address of the client, the `X-Forwarded-For` request header is
 * used.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)
 */
export const XForwardedFor = 'X-Forwarded-For'

/**
 * The `X-Forwarded-Host` (XFH) header is a de-facto standard header for
 * identifying the original host requested by the client in the
 * {@link Host} HTTP request header.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host)
 */
export const XForwardedHost = 'X-Forwarded-Host'

/**
 * The `X-Forwarded-Proto` (XFP) header is a de-facto standard header for
 * identifying the protocol (HTTP or HTTPS) that a client used to connect to
 * your proxy or load balancer.
 *
 * Your server access logs contain the protocol used between the server and the
 * load balancer, but not the protocol used between the client and the load
 * balancer.
 *
 * To determine the protocol used between the client and the load balancer,
 * the `X-Forwarded-Proto` request header can be used.
 *
 * @note Non-standard, but defacto-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto)
 */
export const XForwardedProto = 'X-Forwarded-Proto'

/**
 * Identifies XHR requests
 * @note Non-standard
 */
export const XRequestedWith = 'X-Requested-With'

/**
 * Used to prevent CSRF
 * @note Non-standard
 */
export const XCSRFToken = 'X-CSRF-Token'

//#endregion

//#endregion

//#region Response

//#region General

/**
 * The `Accept-Patch` response HTTP header advertises which media-type the
 * server is able to understand in a PATCH request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch)
 */
export const AcceptPatch = 'Accept-Patch'

/**
 * The `Accept-Post` response HTTP header advertises which
 * [media types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
 * are accepted by the server for HTTP post requests.
 */
export const AcceptPost = 'Accept-Post'

/**
 * The `Accept-Ranges` HTTP response header is a marker used by the server to
 * advertise its support for partial requests from the client for file
 * downloads. The value of this field indicates the unit that can be used to
 * define a range.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges)
 */
export const AcceptRanges = 'Accept-Ranges'

/**
 * The `Age` header contains the time in seconds the object was in a proxy
 * cache.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age)
 */
export const Age = 'Age'

/**
 * The `Allow` header lists the set of methods supported by a resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow)
 */
export const Allow = 'Allow'

/**
 * The `Alt-Svc` HTTP header allows a server to indicate that another network
 * location (the "alternative service") can be treated as authoritative for
 * that origin when making future requests.
 *
 * [Read more]https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc()
 */
export const AltSvc = 'Alt-Svc'

/**
 * The `Clear-Site-Data` header clears browsing data (cookies, storage, cache)
 * associated with the requesting website. It allows web developers to have
 * more control over the data stored by a client browser for their origins.
 *
 * @note This feature is available only in secure contexts (HTTPS)
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data)
 */
export const ClearSiteData = 'Clear-Site-Data'

/**
 * In a regular HTTP response, the `Content-Disposition` response header is a
 * header indicating if the content is expected to be displayed inline in the
 * browser, that is, as a Web page or as part of a Web page, or as an
 * attachment, that is downloaded and saved locally.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)
 */
export const ContentDisposition = 'Content-Disposition'

/**
 * The `Content-Encoding` [representation header](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header)
 * lists any encodings that have been applied to the representation (message
 * payload), and in what order. This lets the recipient know how to decode the
 * representation in order to obtain the original payload format.
 *
 * Content encoding is mainly used to compress the message data without losing
 * information about the origin media type.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)
 */
export const ContentEncoding = 'Content-Encoding'

/**
 * The `Content-Language` [representation header](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header)
 * is used to describe the language(s) intended for the audience, so users can
 * differentiate it according to their own preferred language.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language)
 */
export const ContentLanguage = 'Content-Language'

/**
 * The `Content-Location` header indicates an alternate location for the
 * returned data. The principal use is to indicate the URL of a resource
 * transmitted as the result of
 * [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location)
 */
export const ContentLocation = 'Content-Location'

/**
 * The `Content-Range` response HTTP header indicates where in a full body
 * message a partial message belongs.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
 */
export const ContentRange = 'Content-Range'

/**
 * The HTTP `Content-Security-Policy-Report-Only` response header allows web
 * developers to experiment with policies by monitoring (but not enforcing)
 * their effects.
 *
 * These violation reports consist of JSON documents sent via an HTTP `POST`
 * request to the specified URI.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only)
 */
export const ContentSecurityPolicyReportOnly = 'Content-Security-Policy-Report-Only'

/**
 * Specifies the delta-encoding entity tag of the response
 */
export const DeltaBase = 'Delta-Base'

/**
 * The `Digest` response HTTP header provides a digest of the selected
 * representation of the requested resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Digest)
 */
export const Digest = 'Digest'

/**
 * The `ETag` (or entity tag) HTTP response header is an identifier for a
 * specific version of a resource. It lets caches be more efficient and save
 * bandwidth, as a web server does not need to resend a full response if the
 * content was not changed. Additionally, etags help to prevent simultaneous
 * updates of a resource from overwriting each other
 * (["mid-air collisions"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#avoiding_mid-air_collisions)).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
 */
export const ETag = 'ETag'

/**
 * The `Expect-CT` header lets sites opt in to reporting and/or enforcement of
 * [Certificate Transparency](https://developer.mozilla.org/en-US/docs/Web/Security/Certificate_Transparency)
 * requirements, to prevent the use of misissued certificates for that site
 * from going unnoticed.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
 */
export const ExpectCT = 'Expect-CT'

/**
 * The `Expires` HTTP header contains the date/time after which the response is
 * considered expired.
 *
 * Invalid expiration dates with value `0` represent a date in the past and mean
 * that the resource is already expired.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires)
 */
export const Expires = 'Expires'

/**
 * Instance-manipulations applied to the response
 */
export const IM = 'IM'

/**
 * The `Last-Modified` response HTTP header contains a date and time when the
 * origin server believes the resource was last modified. It is used as a
 * validator to determine if the resource is the same as the previously stored
 * one.
 *
 * Less accurate than an {@link ETag} header, it is a fallback mechanism.
 * Conditional requests containing
 * [`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)
 * or [`If-Unmodified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)
 * headers make use of this field.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified)
 */
export const LastModified = 'Last-Modified'

/**
 * The HTTP `Link` entity-header field provides a means for serializing one or
 * more links in HTTP headers. It is semantically equivalent to the HTML
 * [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
 * element.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
 */
export const Link = 'Link'

/**
 * The `Location` response header indicates the URL to redirect a page to. It
 * only provides a meaning when served with a `3xx` (redirection) or `201`
 * (created) status response.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
 */
export const Location = 'Location'

/**
 * The HTTP `NEL` response header is used to configure network request logging.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL)
 */
export const Nel = 'NEL'

/**
 * The HTTP `Proxy-Authenticate` response header defines the authentication
 * method that should be used to gain access to a resource behind a
 * [proxy server](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server).
 * It authenticates the request to the proxy server, allowing it to transmit
 * the request further.
 *
 * The `Proxy-Authenticate` header is sent along with a
 * [`407 Proxy Authentication Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
 */
export const ProxyAuthenticate = 'Proxy-Authenticate'

/**
 * @deprecated Use [Certificate Transparency](https://developer.mozilla.org/en-US/docs/Web/Security/Certificate_Transparency)
 * and [Expect-CT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
 * header instead.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins)
 */
export const PublicKeyPins = 'Public-Key-Pins'

/**
 * The `Referrer-Policy` HTTP header controls how much referrer information
 * (sent with the {@link Referer `Referer`} header) should be included with
 * requests.
 *
 * Aside from the HTTP header, you can set this policy in HTML.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
 */
export const ReferrerPolicy = 'Referrer-Policy'

/**
 * The `Retry-After` response HTTP header indicates how long the user agent
 * should wait before making a follow-up request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
 */
export const RetryAfter = 'Retry-After'

/**
 * The `Sec-WebSocket-Accept` header is used in the websocket opening handshake.
 * It would appear in the response headers. That is, this is header is sent from
 * server to client to inform that server is willing to initiate a websocket
 * connection.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept)
 */
export const SecWebSocketAccept = 'Sec-WebSocket-Accept'

/**
 * The `Server` header describes the software used by the origin server that
 * handled the request — that is, the server that generated the response.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)
 */
export const Server = 'Server'

/**
 * The `Server-Timing` header communicates one or more metrics and descriptions
 * for a given request-response cycle. It is used to surface any backend server
 * timing metrics (e.g. database read/write, CPU time, file system access, etc.)
 * in the developer tools in the user's browser or in the
 * [PerformanceServerTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming)
 * interface.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)
 */
export const ServerTiming = 'Server-Timing'

/**
 * The `Set-Cookie` HTTP response header is used to send a cookie from the
 * server to the user agent, so that the user agent can send it back to the
 * server later.
 *
 * To send multiple cookies, multiple `Set-Cookie` headers should be sent in
 * the same response.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
 */
export const SetCookie = 'Set-Cookie'

/**
 * The `SourceMap` HTTP response header links generated code to a source map,
 * enabling the browser to reconstruct the original source and present the
 * reconstructed original in the debugger.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap)
 */
export const SourceMap = 'SourceMap'

/**
 * The HTTP `Strict-Transport-Security` response header (often abbreviated as
 * [HSTS](https://developer.mozilla.org/en-US/docs/Glossary/HSTS)) informs
 * browsers that the site should only be accessed using HTTPS, and that any
 * future attempts to access it using HTTP should automatically be converted to
 * HTTPS.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
 */
export const StrictTransportSecurity = 'Strict-Transport-Security'

/**
 * The `Timing-Allow-Origin` response header specifies origins that are allowed
 * to see values of attributes retrieved via features of the
 * [Resource Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API),
 * which would otherwise be reported as zero due to cross-origin restrictions.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin)
 */
export const TimingAllowOrigin = 'Timing-Allow-Origin'

/**
 * The `Trailer` response header allows the sender to include additional fields
 * at the end of chunked messages in order to supply metadata that might be
 * dynamically generated while the message body is sent, such as a message
 * integrity check, digital signature, or post-processing status.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)
 */
export const Trailer = 'Trailer'

/**
 * The `Transfer-Encoding` header specifies the form of encoding used to safely
 * transfer the [payload body](https://developer.mozilla.org/en-US/docs/Glossary/Payload_body)
 * to the user.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
 */
export const TransferEncoding = 'Transfer-Encoding'

/**
 * The `Tk` response header indicates the tracking status that applied to the
 * corresponding request.
 *
 * > @derecated This feature is no longer recommended.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Tk)
 */
export const Tk = 'Tk'

/**
 * The `Vary` HTTP response header describes the parts of the request message
 * aside from the method and URL that influenced the content of the response it
 * occurs in. Most often, this is used to create a cache key when
 * [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)
 * is in use.
 *
 * [Read mote](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)
 */
export const Vary = 'Vary'

/**
 * The HTTP `WWW-Authenticate` response header defines the
 * [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
 * methods ("challenges") that might be used to gain access to a specific
 * resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
 */
export const WWWAuthenticate = 'WWW-Authenticate'

/**
 * The `X-Content-Type-Options` response HTTP header is a marker used by the
 * server to indicate that the
 * [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
 * advertised in the {@link ContentType `Content-Type`} headers should be
 * followed and not be changed.
 *
 * The header allows you to avoid
 * [MIME type sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)
 * by saying that the MIME types are deliberately configured.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
 */
export const XContentTypeOptions = 'X-Content-Type-Options'

/**
 * The `X-DNS-Prefetch-Control` HTTP response header controls DNS prefetching,
 * a feature by which browsers proactively perform domain name resolution on
 * both links that the user may choose to follow as well as URLs for items
 * referenced by the document, including images, CSS, JavaScript, and so forth.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
 */
export const XDNSPrefetchControl = 'X-DNS-Prefetch-Control'

/**
 * The `X-Frame-Options` HTTP response header can be used to indicate whether
 * or not a browser should be allowed to render a page in a `<frame>`,
 * `<iframe>`, `<embed>` or `<object>`.
 *
 * Sites can use this to avoid
 * [click-jacking](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#click-jacking)
 * attacks, by ensuring that their content is not embedded into other sites.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
 */
export const XFrameOptions = 'X-Frame-Options'

//#endregion

//#region Cors

/**
 * The `Access-Control-Allow-Credentials` response header tells browsers
 * whether to expose the response to the frontend JavaScript code when the
 * request's credentials mode ([Request.credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials))
 * is include.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)
 */
export const AccessControlAllowCredentials = 'Access-Control-Allow-Credentials'

/**
 * The `Access-Control-Allow-Headers` response header is used in response to a
 * [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
 * which includes the
 * {@link AccessControlRequestHeaders Access-Control-Request-Headers} to
 * indicate which HTTP headers can be used during the actual request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
 */
export const AccessControlAllowHeaders = 'Access-Control-Allow-Headers'

/**
 * The `Access-Control-Allow-Methods` response header specifies one or more
 * methods allowed when accessing a resource in response to a
 * [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
 */
export const AccessControlAllowMethods = 'Access-Control-Allow-Methods'

/**
 * The `Access-Control-Allow-Origin` response header indicates whether the
 * response can be shared with requesting code from the given
 * {@link Origin origin}.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
 */
export const AccessControlAllowOrigin = 'Access-Control-Allow-Origin'

/**
 * The `Access-Control-Expose-Headers` response header allows a server to
 * indicate which response headers should be made available to scripts running
 * in the browser, in response to a cross-origin request.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
 */
export const AccessControlExposeHeaders = 'Access-Control-Expose-Headers'

/**
 * The `Access-Control-Max-Age` response header indicates how long the results
 * of a preflight request (that is the information contained in the
 * {@link AccessControlAllowMethods Access-Control-Allow-Methods} and
 * {@link AccessControlAllowHeaders Access-Control-Allow-Headers} headers)
 * can be cached.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age)
 */
export const AccessControlMaxAge = 'Access-Control-Max-Age'

/**
 * The HTTP `Cross-Origin-Embedder-Policy` (COEP) response header prevents a
 * document from loading any cross-origin resources that don't explicitly grant
 * the document permission (using
 * [CORP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)) or
 * [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)).
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
 */
export const CrossOriginEmbedderPolicy = 'Cross-Origin-Embedder-Policy'

/**
 * The HTTP `Cross-Origin-Opener-Policy` (COOP) response header allows you to
 * ensure a top-level document does not share a browsing context group with
 * cross-origin documents.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
 */
export const CrossOriginOpenerPolicy = 'Cross-Origin-Opener-Policy'

/**
 * The HTTP `Cross-Origin-Resource-Policy` response header conveys a desire
 * that the browser blocks no-cors cross-origin/cross-site requests to the
 * given resource.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)
 */
export const CrossOriginResourcePolicy = 'Cross-Origin-Resource-Policy'

//#endregion

//#region Non Standard

// -------------------------------------------------------------------------- //
//                                                                            //
//                               Non-Standard                                 //
//                                                                            //
// -------------------------------------------------------------------------- //

/**
 * The HTTP `Content-Security-Policy` response header allows web site
 * administrators to control resources the user agent is allowed to load for a
 * given page. With a few exceptions, policies mostly involve specifying server
 * origins and script endpoints. This helps guard against
 * [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
 * attacks.
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
 */
export const ContentSecurityPolicy = 'Content-Security-Policy'

/**
 * The non-standard `Large-Allocation` response header tells the browser that
 * the page being loaded is going to want to perform a large allocation. It is
 * currently only implemented in Firefox, but is harmless to send to every
 * browser.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation)
 */
export const LargeAllocation = 'Large-Allocation'

/**
 * Redirect to a URL after an arbitrary delay expressed in seconds
 *
 * @note Non-standard
 */
export const Refresh = 'Refresh'

/**
 * Can be used by servers to send their name and version
 *
 * @note Non-standard
 * @see {@link Server}
 */
export const XPoweredBy = 'X-Powered-By'

/**
 * Allows the server to pass a request ID that clients can send back to let the
 * server correlate the request
 *
 * @note Non-standard
 */
export const XRequestID = 'X-Request-ID'

/**
 * Sets which version of Internet Explorer compatibility layer should be used.
 * Only used if you need to support IE8 or IE9.
 *
 * @note Non-standard
 *
 * [See StackOverflow](https://stackoverflow.com/a/6771584/205039)
 */
export const XUACompatible = 'X-UA-Compatible'

/**
 * The HTTP `X-XSS-Protection` response header is a feature of Internet
 * Explorer, Chrome and Safari that stops pages from loading when they detect
 * reflected cross-site scripting (XSS) attacks.
 *
 * @note Non-standard
 *
 * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
 */
export const XXSSProtection = 'X-XSS-Protection'

//#endregion

//#endregion
