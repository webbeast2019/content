
## Basic Concepts for Module 3 
(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

### Everything is a [bit](https://he.wikipedia.org/wiki/%D7%A1%D7%99%D7%91%D7%99%D7%AA)
* <!-- .element: class="fragment" -->Eventually, there are only numbers and [arithmetic](https://he.wikipedia.org/wiki/%D7%90%D7%A8%D7%99%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94)

* Text is just a list of numbers
<!-- .element: class="fragment" -->

* Images
<!-- .element: class="fragment" -->

* Videos
<!-- .element: class="fragment" -->

* Graphical models
<!-- .element: class="fragment" -->

* Browsers, DOM, CSS and JS
<!-- .element: class="fragment" -->

---

### [HTTP: textual, application level protocol](http://icode.co.il/%D7%A4%D7%A8%D7%95%D7%98%D7%95%D7%A7%D7%95%D7%9C-http-%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9C%D7%9E%D7%AA%D7%97%D7%99%D7%9C%D7%99%D7%9D/)
What does it mean?
* Textual
* [Application - Level](https://www.youtube.com/watch?v=PG9oKZdFb7w)
* Protocol
  * Request / Response
  * Structure
  * [URL](https://dev.to/flippedcoding/what-is-the-difference-between-a-uri-and-a-url-4455) vs [URI](https://stackoverflow.com/questions/723934/example-of-a-uri-that-isnt-a-url)
  * Headers
* HTTPS

---
### [How network works?](https://he.wikipedia.org/wiki/TCP/IP)

<img src="https://en.wikipedia.org/wiki/Internet_protocol_suite#/media/File:IP_stack_connections.svg">

---

### A story about page load

A web app is simply a (complex) page being loaded
1. Initial contact: URL typing / clicking a link
<!-- .element: class="fragment" -->
2. Browser creating a connection and send a request
<!-- .element: class="fragment" -->
3. Server processing
<!-- .element: class="fragment" -->
4. Response
<!-- .element: class="fragment" -->
5. First page load
<!-- .element: class="fragment" -->
6. Additional requests (css, js, resources)
<!-- .element: class="fragment" -->
7. Async loading (async/differ, AJAX, lazy loading)
<!-- .element: class="fragment" -->

---
### Fast and faster
* CPU
* CPU Cache
* RAM
* GPU
* HardDrive (SSD vs HDD) and USB
* Network

> “Disk is about a bazillion times slower than memory, and the network is about a bazillion times slower than that.”  ~ Nolan Lawson
<!-- .element: class="fragment" -->

---

### What about persistent data?
Which type of persistent storage do you know?
* Local / Session Storage (and indexed DB)
<!-- .element: class="fragment" -->

* Cookies
<!-- .element: class="fragment" -->

* Files
<!-- .element: class="fragment" -->

* Databases
<!-- .element: class="fragment" -->

---

### A bit about caching: Fast and faster
* File / DB on backend
* Server Cache (local disk)
* Server RAM
* Client disk
* Client RAM
