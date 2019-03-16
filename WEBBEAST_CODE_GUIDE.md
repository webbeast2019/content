# HTML
* don't use elements that you don't know what it's for

---
### Do not use deprecated tags

```html
<center>Hello<center>
```

---

### Do not use [backward compatibility](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do) tags if you don't know what they do

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

---

### Do not use table for GUI (e.i if you're not presenting data entries)

```html
<table>
    <tr>
        <td>
            <button onclick="foo()">button foo</button>
        </td>
        <td>
            <button onclick="bar()">button bar</button>
        </td>
    </tr>
</table>
```

---

### don't leave unneeded empty rows. be consistent about spaces and empty rows

```html
<main>
    <div>Text</div>

</main>
```



---

# CSS
* don't use css that you don't know what it does

---
### don't use !important

```
backface-visibility: visible !important;
```

---
### don't use tags like webkit mz etc (unless you know what you're doing)

```
-webkit-backface-visibility: visible;
```

---

### don't include css which have no effect

```
transform: rotateY(0);
```


---
# JS
###

---
### function declaration / expression
When functions are constants - prefer function [declarations](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)
```
// declaration
function foo(){}

// expression - constant
const foo = function (){}

// expression - variable
// (only when function may be replaced)
let foo = function (){}
```

---


# Git
* Do not include files from other projects on PR
* Use .gitignore
* Uploading Branch is not enough - Open a PR!

---