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
$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            if (num <= 1) {
                return num;
            }
            else {
                return fib(num - 1) + fib(num - 2);
            }
        }
        var res = fib(num);
        $('#result').html(res);

    })
})
/*
$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            var a = 1,
                b = 1;
            for (var i = 3; i <= num; i++) {
                var c = a + b;
                a = b;
                b = c;
            }
            return b;
        }
        var res = fib(num);
        $('#result').html(res);

    })
})
*/
/*
$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var num = $('#number').val();

        function fib(num) {
            var a = 1,
                b = 1,
                i = 3;
                
            for (var i = 3; i <= num; i++) 
            while (i <= num)
            {
                var c = a + b;
                a = b;
                b = c;
            }
            i++;
        }
        var res = fib(num);
        $('#result').html(res);
*/
/*function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

Цикл здесь начинается с i=3, так как первое и второе числа Фибоначчи заранее записаны в переменные a=1, b=1.


Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. Пример работы:
*/
