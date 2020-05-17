---
title: Extracting Facebook Profile ID from a URL (Javascript)
date: 2020-05-17
published: true
section: writing
tags: ["regex", "facebook", "url", "code", "javascript"]
slug: extracting-facebook-id-from-a-url
description: How to extract a facebook profile username / id from a generic URL using Javascript
---

If you want to extract a Facebook Profile ID from a generic URL, you might be tempted to use a regular expression like the following:

```javascript
/(https?:\/\/)?(www\.)?(facebook|fb|m\.facebook)\.(com|me)\/([\w\-]*\/)*([\w\-\.]+)(\/)?/i;
```

There are two problems with this approach in my opinion.
One is that you're overusing a regular expression ability
to match anything to check whether a particular string adheres to the [URI format](https://tools.ietf.org/html/rfc3986) when a parser is a better tool for this kind of job.

In fact, there's a parser available in Javascript (assuming you use an ECMA version that supports it).
[It's the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL):

```javascript
var url = new URL(
  "https://classpert.com/udemy/courses/learning-functional-javascript-3rvMIl?lang=es"
);

console.log(url.host);
// => 'classpert.com'
console.log(url.pathname);
// => '/udemy/courses/learning-functional-javascript-3rvMIl'
console.log(url.searchParams);
// => URLSearchParams { 'lang' => 'es' }
```

It also works if you're using Node.

If the parser doesn't return anything, you know it's not a valid URI. On top of that, you can check for host, path and query params formats separately. A lot less brittle.

The other problem with using a regular expression to match the whole thing is that you will be matching undesired, invalid URLs, even if it's technically a
valid URI.

For example, using the above, overly generic regular expression, we have the following string incorrectly being detected as a valid Facebook Profile URL:

```javascript
"https://facebook.com/profile.php/it-doesnt-make-sense";
```

It's better to parse the URL and narrow down **where** to match using a more specific regular expression.

For example, a Facebook Profile URL will probably be either one of these:

```javascript
// param based ID, path has to be profile.php
"https://www.facebook.com/profile.php?id=100018839703689";

// path based ID, it has to come immediately after the host
"https://www.facebook.com/thiagobrandaodam";
```

Using the API URI:

```javascript
var url = new URL("https://www.facebook.com/thiagobrandaodam");

// extract ID
var id = url.match(/\/(?<id>[A-z\d](?:[A-z\d]|[.-](?=[A-z\d])){4,50})/).groups
  .id;
```

It uses the following regular expression to match for an ID:

```javascript
/\/[A-z\d]([A-z\d]|[.-](?=[A-z\d])){4,50}/;
```

The lookahead group `?=` ensures there are no consecutive dashes or dots.

For the param-based URL, we have:

```javascript
var url = new URL("https://www.facebook.com/profile.php?id=100018839703689");

// extract ID
var id = url.pathname === "/profile.php" && url.searchParams.get('id') ? url.searchParams.get('id').match(/(?<id>^\d{15}$)/).groups.id;
```

The param-based ID is a 15 digit sequence.
