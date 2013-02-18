
function barg () {
    var args = Array.apply( null, arguments[ 0 ] );
    if ( !args || !args.length ) throw 'barg(): First argument should be an array of arguments.';
    var fields = Array.prototype.slice.call( arguments, 1 );
    if ( !fields || !fields.length ) throw 'barg(): Please provide at least one named argument.';
    var hash = {};
    if ( typeof args[ args.length - 1 ] == 'object' ) hash = args.pop();
    var rev = fields[ 0 ].indexOf( '?' ) >= 0;
    if ( rev && fields.length > args.length ) {
        var diff = args.length - fields.length;
        for ( var i = 0, len = fields.length; i < len; i++ ) {
            if ( args[ i + diff ] != null ) hash[ fields[ i ].replace( /\?/g, '' ) ] = args[ i + diff ];
        }
    } else {
      for ( var i = 0, len = fields.length; i < len; i++ ) {
        if ( args[ i ] != null ) hash[ fields[ i ].replace( /\?/g, '' ) ] = args[ i ];
      }
    }
    return hash;
}