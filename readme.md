## JQUERY CLONE

A tiny jquery library clone written in vanilla js.

## features

### $

Selects a tag based on classname, id etc and returns a ```Jquery``` Object (see : [Jquery class](/jquery.js))

```javascript
$('.slider') // Jquery Object
```

### each

A method under the ```Jquery``` class that accepts a function as an argument and calls it by giving all tags as parameters (function is run for each tag selected by $).

### addClass

A method under the ```Jquery``` class that accepts a classname as the argument and sets the class attribute for all tags selected by $.

### removeClass

A method under the ```Jquery``` class that accepts a classname as the argument and removes the class attribute for all tags where classname is equal.

### hasClass

A method under the ```Jquery``` class that accepts a classname as the argument and returns a boolean based on the classList of the first tag. Returns true if given class is assigned to first tag, else returns false.

### attr

A method under the ```Jquery``` class that accepts a attribute-name and attribute-value and sets it to all tags. 

if only attribute-name is given then it returns the value of the attribute from the first tag alone.

### prop

A method under the ```Jquery``` class that accepts a property-name and property-value and sets it to all tags. 

if only property-name is given then it returns the value of the property from the first tag alone. The difference from attr() is conveyed below:

```html
<input class='.test' checked> <!-- checked is a property, class is an attribute -->
```

```javascript
$('.test').attr('checked') // ''
$('.test').prop('checked') // true
```

### append

A method under the ```Jquery``` class that adds a string as HTML into the tags after tag's initial content.

### prepend

A method under the ```Jquery``` class that adds a string as HTML into the tags before tag's initial content.

### remove

A method under the ```Jquery``` class that removes all occurences of a tag.

### empty 

A method under the ```Jquery``` class that sets the innerHTML property of all tags to an empty string.

### on

A method under the ```Jquery``` class that sets an event and its action using addEventListener method for all tags.

### off

A method under the ```Jquery``` class that removes an event and its action using removeEventListener method for all tags. (exact function reference needed to remove)

### parent

A method under the ```Jquery``` class that returns all the unique parent elements as a ```Jquery``` object.

### children

A method under the ```Jquery``` class that returns all the children elements as a ```Jquery``` object.

### toUpper

A method under the ```Jquery``` class that converts text content of the tags into uppercase.

### toLower

A method under the ```Jquery``` class that converts text content of the tags into lowercase.


Plugins can be added as demonstrated in buttonUI.js.
