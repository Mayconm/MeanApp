module.exports = {
  number: {
    zeroFill: function ( number, width ){
      width -= number.toString().length;
      if ( width > 0 ){
        return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
      }
      return number + "";
    }
  },
  date: {
    toString: function(date) {
      var day, month, year, result;
      day = date.getDate();
      month = date.getMonth() + 1;
      year = date.getFullYear();
      
      result = Util.number.zeroFill(day, 2) + "/";
      result += Util.number.zeroFill(month, 2) + "/";
      result += year;
      
      return result;
    },
    fromString: function(str) {
      var fields = str.split("/");
      var day = fields[0];
      var month = parseInt(fields[1]) - 1;
      var year = fields[2];
      
      return new Date(year, month, day);
    }
  }
}