const checkbutton = document.getElementById('bet');

checkbutton.onclick = function() {
    let list = [];
    let lotto = [];
    let pb = Number(document.getElementById("pb").value);
    let demo = document.getElementById("demo");
    let lottoDisplay = document.getElementById("lotto");
    let userDisplay = document.getElementById("user");
    let winningsDisplay = document.getElementById("winnings");

    // Validate bonus ball
    if (pb < 1 || pb > 36 || isNaN(pb)) { 
        alert("Please enter a number between 1 and 36 for the bonus ball");
        return;
    }

    // User input validation and populating list
    for (let i = 1; i <= 5; i++) {
        let digit = Number(document.getElementById("n" + i).value);
        if (digit >= 1 && digit <= 69 && !isNaN(digit)) {
            list.push(digit);
        } else {
            alert("Please enter a number between 1 and 69 for input " + i);
            return;
        }
    }

    // Generate random numbers for lotto
    for (let i = 0; i < 5; i++) {
        lotto.push(Math.floor(Math.random() * 69) + 1);
    }
    
    let lotto_pb = Math.floor(Math.random() * 26) + 1;
    lottoDisplay.innerHTML = "Winning Numbers: " + lotto;
    userDisplay.innerHTML = "Your Numbers: " + list + " Powerball: " + pb;

    let acc =  Number(demo.innerHTML);

    // Comparison of user numbers and lotto numbers
    let matches = 0;
    for (let i = 0; i < list.length; i++) {
        if (lotto.includes(list[i])) {
            matches++;
        }
    }

    // Calculate winnings
    let total = 0;
    if (pb === lotto_pb) {
        switch (matches) {
            case 1:
                total += 4;
                break;
            case 2:
                total += 7;
                break;
            case 3:
                total += 100;
                break;
            case 4:
                total += 50000;
                break;
            case 5:
                total += 1000000;
                break;
        }
    } else {
        switch (matches) {
            case 3:
                total += 7;
                break;
            case 4:
                total += 1000;
                break;
            case 5:
                total += 1000000;
                break;
        }
    }
    
    // Update winnings and account balance
    winningsDisplay.innerHTML = total ? "You have won: R" + total : "Sorry, you didn't win anything!";
    demo.innerHTML = acc + total;
};