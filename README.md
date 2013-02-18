# Bargs

This is a simple utility method for easily parsing arguments into a hash.

## Sample usage

```javascript
function some_function () {
  var args = bargs( arguments, 'optional?', 'required' );
}
some_function( 'a' ); // { required: 'a' }
some_function( 'a', 'b' ); // { optional: 'a', required: 'b' };
```