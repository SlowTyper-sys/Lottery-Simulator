const checkbutton = document.getElementById('bet');

checkbutton.onclick = function(){
    //let betlist = [Number(document.getElementById("n1").value), Number(document.getElementById("n2").value), Number(document.getElementById("n3").value), Number(document.getElementById("n4").value), Number(document.getElementById("n5").value)];
    let list = []
    let lotto = []
    let pb = Number(document.getElementById("pb").value);
    if( !pb == null){ 
        alert("Please enter a number between 1 and 36 for the bonus ball");
    }

    //this is for the numbers that the user puts in
    for (let i = 1; i <=5; i++) {
        let digit = Number(document.getElementById("n"+i).value);
        if  (digit >= 1 && digit <= 69 && digit != null) {
        list[i-1] = digit;
        }else{
            alert("Please enter a number between 1 and 69");
            break;
        }
    }

    //this is for the random numbers that the computer generates
    for (let i = 0; i <=4; i++) {
        lotto[i] = Math.floor(Math.random() * 69) + 1;
    }
    
    let lotto_pb = Math.floor(Math.random() * 26) + 1;
    document.getElementById("lotto").innerHTML = "Winning Numbers: " + lotto;
    document.getElementById("user").innerHTML = "Your Numbers: " + list + " Powerball: " + pb;

    let acc =  Number(document.getElementById("demo").innerHTML);
    //alert(acc);
    if (acc > 0) {
        acc = acc - 4;
        document.getElementById("demo").innerHTML = acc;
       // alert(acc + " left");


    //this is for the comparison
    let matches = 0;
    let total = 0;

     for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < lotto.length; j++) {
                if (list[i] == lotto[j]) {
                    matches += 1;
                } 
            }
        }
        alert(matches + " matches");

    // if they got the powerball number correctly then:
    if({lotto_pb} == {pb}){
        switch (matches) {
            case 1:
                total += 4;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
            case 2:
                total += 7;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
            case 3:
                total += 100;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
            case 4:
                total += 50000;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
            case 5:
                total += 1000000;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
        
            default:
                document.getElementById("winings").innerHTML = "Sorry, you didn't win anything!";
                break;
        }
    } else{
        switch (matches) {
            case 3:
                total += 7;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
            case 4:
                total += 1000;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
            case 5:
                total += 1000000;
                 document.getElementById("winings").innerHTML = "You have won: R"+ total;
                 document.getElementById("demo").innerHTML = acc + total;
                break;
        
            default:
                document.getElementById("winings").innerHTML = "Sorry, you didn't win anything!";
                break;
        }
    }
    }
    
    //alert(lotto);
}