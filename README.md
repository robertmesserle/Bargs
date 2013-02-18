# Bargs

This is a simple utility method for easily parsing arguments into a hash.

## Sample usage

```javascript
function some_function ( optional, required ) {
  var args = bargs( arguments, 'optional?', 'required' );
  return args;
}

some_function( 'a' );
// => { required: 'a' }

some_function( 'a', 'b' );
// => { optional: 'a', required: 'b' };

some_function( 'a', 'b', { other: 'c' } );
// => { optional: 'a', required: 'b', other: 'c' }
```