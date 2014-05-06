# About Custom Elements Polyfill

This repo is a wrapper for https://github.com/Polymer/CustomElements.

# Bower

```
bower install CustomElements
```

# Example

```

// Basic usage


<x-foo alert="foobarz"></x-foo>


<script type="text/javascript">

  var XFooPrototype = Object.create(HTMLElement.prototype);
  XFooPrototype.createdCallback = function() {
    this.textContent = "I'm an x-foo!";
  };

  XFooPrototype.foo = function() {
    console.log(this.getAttribute('alert'));
  };

  var XFoo = document.registerElement('x-foo', {
    prototype: XFooPrototype
  });

  document.addEventListener('WebComponentsReady', function(){
    document.querySelector('x-foo').foo();
  });

</script>

```


