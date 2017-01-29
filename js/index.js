$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            return num <= 1 ? num : fib(num - 1) + fib(num - 2);
        }
        var res = fib(num);
        $('#result').html(res);
    })
})

/*$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            return num <= 1 ? num : fib(num - 1) + fib(num - 2);
        }
        var res = fib(num);
        $('#result').html(res);
    })
})
*/