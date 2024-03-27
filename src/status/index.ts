export const status = {
  //#region Informational 1xx

  /**
   * This interim response indicates that the client should continue the request
   * or ignore the response if the request is already finished.
   */
  Continue: { status: 100 as const, statusText: 'Continue' as const },

  /**
   * This code is sent in response to an
   * [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
   * request header from the client and indicates the protocol the server is
   * switching to.
   */
  SwitchingProtocol: {
    status: 101 as const,
    statusText: 'Switching Protocol' as const
  },

  /**
   * This code indicates that the server has received and is processing the
   * request, but no response is available yet.
   *
   * @note WebDAV
   */
  Processing: { status: 102 as const, statusText: 'Processing' as const },

  /**
   * This status code is primarily intended to be used with the
   * [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)
   * header, letting the user agent start preloading resources while the server
   * prepares a response.
   */
  EarlyHints: { status: 103 as const, statusText: 'Early Hints' as const },

  //#endregion

  //#region Successful 2xx

  /**
   * The request succeeded. The result meaning of "success" depends on the HTTP
   * method:
   *
   *   - `GET`: The resource has been fetched and transmitted in the message body.
   *   - `HEAD`: The representation headers are included in the response without
   *     any message body.
   *   - `PUT` or `POST`: The resource describing the result of the action is
   *     transmitted in the message body.
   *   - `TRACE`: The message body contains the request message as received by
   *     the server.
   */
  Ok: { status: 200 as const, statusText: 'OK' as const },

  /**
   * The request succeeded, and a new resource was created as a result. This is
   * typically the response sent after `POST` requests, or some `PUT` requests.
   */
  Created: { status: 201 as const, statusText: 'Created' as const },

  /**
   * The request has been received but not yet acted upon. It is noncommittal,
   * since there is no way in HTTP to later send an asynchronous response
   * indicating the outcome of the request. It is intended for cases where another
   * process or server handles the request, or for batch processing.
   */
  Accepted: { status: 202 as const, statusText: 'Accepted' as const },

  /**
   * This response code means the returned metadata is not exactly the same as is
   * available from the origin server, but is collected from a local or a
   * third-party copy. This is mostly used for mirrors or backups of another
   * resource. Except for that specific case, the `200 OK` response is preferred
   * to this status.
   */
  NonAuthoritativeInformation: {
    status: 203 as const,
    statusText: 'Non Authoritative Information' as const
  },

  /**
   * There is no content to send for this request, but the headers may be useful.
   * The user agent may update its cached headers for this resource with the new
   * ones.
   */
  NoContent: { status: 204 as const, statusText: 'No Content' as const },

  /**
   * Tells the user agent to reset the document which sent this request.
   */
  ResetContent: { status: 205 as const, statusText: 'Reset Content' as const },

  /**
   * This response code is used when the
   * [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)
   * header is sent from the client to request only part of a resource.
   */
  PartialContent: { status: 206 as const, statusText: 'Partial Content' as const },

  /**
   * Conveys information about multiple resources, for situations where multiple
   * status codes might be appropriate.
   *
   * @note WebDAV
   */
  MultiStatus: { status: 207 as const, statusText: 'Multi Status' as const },

  /**
   * Used inside a `<dav:propstat>` response element to avoid repeatedly
   * enumerating the internal members of multiple bindings to the same collection.
   *
   * @note WebDAV
   */
  AlreadyReported: { status: 208 as const, statusText: 'Already Reported' as const },

  /**
   * The server has fulfilled a `GET` request for the resource, and the response
   * is a representation of the result of one or more instance-manipulations
   * applied to the current instance.
   *
   * @note [HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229)
   */
  ImUsed: { status: 226 as const, statusText: "I'm Used" as const },

  //#endregion

  //#region Redirects 3xx

  /**
   * The request has more than one possible response. The user agent or user
   * should choose one of them. (There is no standardized way of choosing one of
   * the responses, but HTML links to the possibilities are recommended so the
   * user can pick.)
   */
  MultipleChoices: { status: 300 as const, statusText: 'Multiple Choices' as const },

  /**
   * The URL of the requested resource has been changed permanently. The new URL
   * is given in the response.
   */
  MovedPermanently: {
    status: 301 as const,
    statusText: 'Moved Permanently' as const
  },

  /**
   * This response code means that the URI of requested resource has been changed
   * temporarily. Further changes in the URI might be made in the future.
   * Therefore, this same URI should be used by the client in future requests.
   */
  Found: { status: 302 as const, statusText: 'Found' as const },

  /**
   * The server sent this response to direct the client to get the requested
   * resource at another URI with a `GET` request.
   */
  SeeOther: { status: 303 as const, statusText: 'See Other' as const },

  /**
   * This is used for caching purposes. It tells the client that the response has
   * not been modified, so the client can continue to use the same cached version
   * of the response.
   */
  NotModified: { status: 304 as const, statusText: 'Not Modified' as const },

  /**
   * Defined in a previous version of the HTTP specification to indicate that a
   * requested response must be accessed by a proxy. It has been deprecated due
   * to security concerns regarding in-band configuration of a proxy.
   *
   * @deprecated
   */
  UseProxy: { status: 305 as const, statusText: 'Use Proxy' as const },

  /**
   * This response code is no longer used; it is just reserved. It was used in a
   * previous version of the HTTP/1.1 specification.
   *
   * @deprecated
   */
  SwitchProxy: { status: 306 as const, statusText: 'Switch Proxy' as const },

  /**
   * The server sends this response to direct the client to get the requested
   * resource at another URI with same method that was used in the prior request.
   * This has the same semantics as the `302 Found` HTTP response code, with the
   * exception that the user agent must not change the HTTP method used: if a
   * `POST` was used in the first request, a `POST` must be used in the second
   * request.
   */
  TemporaryRedirect: {
    status: 307 as const,
    statusText: 'Temporary Redirect' as const
  },

  /**
   * This means that the resource is now permanently located at another URI,
   * specified by the Location: HTTP Response header. This has the same semantics
   * as the `301 Moved Permanently` HTTP response code, with the exception that
   * the user agent must not change the HTTP method used: if a `POST` was used in
   * the first request, a `POST` must be used in the second request.
   */
  PermanentRedirect: {
    status: 308 as const,
    statusText: 'Permanent Redirect' as const
  },

  //#endregion

  //#region Client errors 4xx

  /**
   * The server cannot or will not process the request due to something that is
   * perceived to be a client error (e.g., malformed request syntax, invalid
   * request message framing, or deceptive request routing).
   */
  BadRequest: { status: 400 as const, statusText: 'Bad Request' as const },

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this
   * response means "unauthenticated". That is, the client must authenticate
   * itself to get the requested response.
   */
  Unauthorized: { status: 401 as const, statusText: 'Unauthorized' as const },

  /**
   * This response code is reserved for future use. The initial aim for creating
   * this code was using it for digital payment systems, however this status code
   * is used very rarely and no standard convention exists.
   */
  PaymentRequired: { status: 402 as const, statusText: 'Payment Required' as const },

  /**
   * The client does not have access rights to the content; that is, it is
   * unauthorized, so the server is refusing to give the requested resource.
   * Unlike `401 Unauthorized`, the client's identity is known to the server.
   */
  Forbidden: { status: 403 as const, statusText: 'Forbidden' as const },

  /**
   * The server can not find the requested resource. In the browser, this means
   * the URL is not recognized. In an API, this can also mean that the endpoint
   * is valid but the resource itself does not exist.
   *
   * Servers may also send this response instead of `403 Forbidden` to hide the
   * existence of a resource from an unauthorized client.
   *
   * This response code is probably the most well known due to its frequent
   * occurrence on the web.
   */
  NotFound: { status: 404 as const, statusText: 'Not Found' as const },

  /**
   * The request method is known by the server but is not supported by the target
   * resource. For example, an API may not allow calling `DELETE` to remove a
   * resource.
   */
  MethodNotAllowed: {
    status: 405 as const,
    statusText: 'Method Not Allowed' as const
  },

  /**
   * This response is sent when the web server, after performing
   * [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation),
   * doesn't find any content that conforms to the criteria given by the user
   * agent.
   */
  NotAcceptable: { status: 406 as const, statusText: 'Not Acceptable' as const },

  /**
   * This is similar to `401 Unauthorized` but authentication is needed to be done
   * by a proxy.
   */
  ProxyAuthenticationRequired: {
    status: 407 as const,
    statusText: 'Proxy Authentication Required' as const
  },

  /**
   * This response is sent on an idle connection by some servers, even without any
   * previous request by the client. It means that the server would like to shut
   * down this unused connection.
   *
   * This response is used much more since some browsers, like Chrome,
   * Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing.
   *
   * Also note that some servers merely shut down the connection without sending
   * this message.
   */
  RequestTimeout: { status: 408 as const, statusText: 'Request Timeout' as const },

  /**
   * This response is sent when a request conflicts with the current state of
   * the server.
   */
  Conflict: { status: 409 as const, statusText: 'Conflict' as const },

  /**
   * This response is sent when the requested content has been permanently deleted
   * from server, with no forwarding address. Clients are expected to remove their
   * caches and links to the resource. The HTTP specification intends this status
   * code to be used for "limited-time, promotional services".
   *
   * APIs should not feel compelled to indicate resources that have been deleted
   * with this status code.
   */
  Gone: { status: 410 as const, statusText: 'Gone' as const },

  /**
   * Server rejected the request because the `Content-Length` header field is not
   * defined and the server requires it.
   */
  LengthRequired: { status: 411 as const, statusText: 'Length Required' as const },

  /**
   * The client has indicated preconditions in its headers which the server does
   * not meet.
   */
  PreconditionFailed: {
    status: 412 as const,
    statusText: 'Precondition Failed' as const
  },

  /**
   * Request entity is larger than limits defined by server. The server might
   * close the connection or return an `Retry-After` header field.
   */
  PayloadTooLarge: {
    status: 413 as const,
    statusText: 'Payload Too Large' as const
  },

  /**
   * The URI requested by the client is longer than the server is willing to
   * interpret.
   */
  UriTooLong: { status: 414 as const, statusText: 'URI Too Long' as const },

  /**
   * The media format of the requested data is not supported by the server, so
   * the server is rejecting the request.
   */
  UnsupportedMediaType: {
    status: 415 as const,
    statusText: 'Unsupported Media Type' as const
  },

  /**
   * The range specified by the `Range` header field in the request cannot be
   * fulfilled. It's possible that the range is outside the size of the target
   * URI's data.
   */
  RangeNotSatisfiable: {
    status: 416 as const,
    statusText: 'Range Not Satisfiable' as const
  },

  /**
   * This response code means the expectation indicated by the `Expect` request
   * header field cannot be met by the server.
   */
  ExpectationFailed: {
    status: 417 as const,
    statusText: 'Expectation Failed' as const
  },

  /**
   * The server refuses the attempt to brew coffee with a teapot.
   */
  ImAteapot: { status: 418 as const, statusText: "I'm A Teapot" as const },

  /**
   * The request was directed at a server that is not able to produce a response.
   * This can be sent by a server that is not configured to produce responses for
   * the combination of scheme and authority that are included in the request URI.
   */
  MisdirectedRequest: {
    status: 421 as const,
    statusText: 'Misdirected Request' as const
  },

  /**
   * The request was well-formed but was unable to be followed due to semantic
   * errors.
   *
   * @note WebDAV
   */
  UnprocessableEntity: {
    status: 422 as const,
    statusText: 'Unprocessable Entity' as const
  },

  /**
   * The resource that is being accessed is locked.
   *
   * @note WebDAV
   */
  Locked: { status: 423 as const, statusText: 'Locked' as const },

  /**
   * The request failed due to failure of a previous request.
   *
   * @note WebDAV
   */
  FailedDependency: {
    status: 424 as const,
    statusText: 'Failed Dependency' as const
  },

  /**
   * Indicates that the server is unwilling to risk processing a request that
   * might be replayed.
   *
   * @deprecated
   */
  TooEarly: { status: 425 as const, statusText: 'Too Early' as const },

  /**
   * The server refuses to perform the request using the current protocol but
   * might be willing to do so after the client upgrades to a different protocol.
   *
   * The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
   * header in a `426` response to indicate the required protocol(s).
   */
  UpgradeRequired: { status: 426 as const, statusText: 'Upgrade Required' as const },

  /**
   * The origin server requires the request to be conditional. This response is
   * intended to prevent the 'lost update' problem, where a client `GET`s a
   * resource's state, modifies it and PUTs it back to the server, when meanwhile
   * a third party has modified the state on the server, leading to a conflict.
   */
  PreconditionRequired: {
    status: 428 as const,
    statusText: 'Precondition Required' as const
  },

  /**
   * The user has sent too many requests in a given amount of time
   * ("rate limiting").
   */
  TooManyRequests: {
    status: 429 as const,
    statusText: 'Too Many Requests' as const
  },

  /**
   * The server is unwilling to process the request because its header fields are
   * too large. The request may be resubmitted after reducing the size of the
   * request header fields.
   */
  RequestHeaderFieldsTooLarge: {
    status: 431 as const,
    statusText: 'Request Header Fields Too Large' as const
  },

  /**
   * The user agent requested a resource that cannot legally be provided, such as
   * a web page censored by a government.
   */
  UnavailableForLegalReasons: {
    status: 451 as const,
    statusText: 'Unavailable For Legal Reasons' as const
  },

  //#endregion

  //#region Server errors 5xx

  /**
   * The server has encountered a situation it does not know how to handle.
   */
  InternalServerError: {
    status: 500 as const,
    statusText: 'Internal Server Error' as const
  },

  /**
   * The request method is not supported by the server and cannot be handled.
   * The only methods that servers are required to support (and therefore that
   * must not return this code) are `GET` and `HEAD`.
   */
  NotImplemented: { status: 501 as const, statusText: 'Not Implemented' as const },

  /**
   * This error response means that the server, while working as a gateway to get
   * a response needed to handle the request, got an invalid response.
   */
  BadGateway: { status: 502 as const, statusText: 'Bad Gateway' as const },

  /**
   * The server is not ready to handle the request.
   *
   * Common causes are a server that is down for maintenance or that is
   * overloaded. Note that together with this response, a user-friendly page
   * explaining the problem should be sent.
   *
   * This response should be used for temporary conditions and the `Retry-After`
   * HTTP header should, if possible, contain the estimated time before the
   * recovery of the service.
   *
   * The webmaster must also take care about the caching-related headers that are
   * sent along with this response, as these temporary condition responses should
   * usually not be cached.
   */
  ServiceUnavailable: {
    status: 503 as const,
    statusText: 'Service Unavailable' as const
  },

  /**
   * This error response is given when the server is acting as a gateway and
   * cannot get a response in time.
   */
  GatewayTimeout: { status: 504 as const, statusText: 'Gateway Timeout' as const },

  /**
   * The HTTP version used in the request is not supported by the server.
   */
  HttpVersionNotSupported: {
    status: 505 as const,
    statusText: 'HTTP Version Not Supported' as const
  },

  /**
   * The server has an internal configuration error: the chosen variant resource
   * is configured to engage in transparent content negotiation itself, and is
   * therefore not a proper end point in the negotiation process.
   */
  VariantAlsoNegotiates: {
    status: 506 as const,
    statusText: 'Variant Also Negotiates' as const
  },

  /**
   * The method could not be performed on the resource because the server is
   * unable to store the representation needed to successfully complete the
   * request.
   *
   * @note WebDAV
   */
  InsufficientStorage: {
    status: 507 as const,
    statusText: 'Insufficient Storage' as const
  },

  /**
   * The server detected an infinite loop while processing the request.
   *
   * @note WebDAV
   */
  LoopDetected: { status: 508 as const, statusText: 'Loop Detected' as const },

  /**
   * Further extensions to the request are required for the server to fulfill it.
   */
  NotExtended: { status: 510 as const, statusText: 'Not Extended' as const },

  /**
   * Indicates that the client needs to authenticate to gain network access.
   */
  NetworkAuthenticationRequired: {
    status: 511 as const,
    statusText: 'Network Authentication Required' as const
  }

  //#endregion
}

type Status = typeof status
export type StatusCode = Status[keyof Status]['status']
