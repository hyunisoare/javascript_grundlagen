function sumNumbers(numbers) {
    numbers.reduce(function(total, current) {
        return total + current
    }, 0)
}

document.write(sumNumbers([10, 20]));