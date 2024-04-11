const checkbutton = document.getElementById('bet');

checkbutton.onclick = function(){
    //let betlist = [Number(document.getElementById("n1").value), Number(document.getElementById("n2").value), Number(document.getElementById("n3").value), Number(document.getElementById("n4").value), Number(document.getElementById("n5").value)];
    let list = []
    let lotto = []
    for (let i = 1; i <=5; i++) {
        list[i] = Number(document.getElementById("n"+i).value);

    }
    alert(list);
}