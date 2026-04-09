function calculateSum() {
            let n = document.getElementById("num").value;
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            document.getElementById("result").innerText = "Sum of numbers from 1 to " + n + " is: " + sum;
        }