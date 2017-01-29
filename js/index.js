$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var n = $('#number').val();

        function fib(n) {
            return n <= 1 ? n : fib(n - 1) + fib(n - 2);
        }
        var res = fib(n);
        $('#result').html(res);
    })
})


/*
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
} 




function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
*/
