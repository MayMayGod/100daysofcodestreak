<html>
<body>
    <script>
        var n = window.prompt("Enter size of the array");
        var arr = new Array();
        var sum = 0;
        for (let i = 1; i <= n; i++) {
            arr[i] = parseInt(window.prompt("Enter element " + i));
            sum = sum + arr[i];
        }
        alert("Sum =" + sum);
    </script>
</body>
</html>