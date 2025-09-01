
function getElement(id) {
    const Element = document.getElementById(id);
    return Element;

}

const love = document.getElementsByClassName('heart');
for (const hearts of love) {
    hearts.addEventListener('click', function () {
        const heartcount = hearts.parentNode.children[1].innerText
        let heartNo = Number(getElement('heart-count').innerText) + 1

        getElement('heart-count').innerText = heartNo;

    })
}

const call = document.getElementsByClassName('call-btn');
console.log(call)
for (const makecall of call) {
    makecall.addEventListener('click', function () {
        const serviceTitle = makecall.parentNode.parentNode.children[1].children[0].innerText
        const serviceNumber = makecall.parentNode.parentNode.children[1].children[2].innerText
        const currentCoin = Number(getElement('coin-count').innerText)
        let now = new Date();
        let time = now.toLocaleTimeString("en-US", { hour12: true });

        let cartContainer = document.getElementById('history-look')
        if (currentCoin >= 20) {
            alert('📞 Calling ' + serviceTitle + ' Service ' + serviceNumber + '....');

            let newElemennt = document.createElement("div");
            newElemennt.innerHTML = `
               <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg m-3">
                    <div>
                        <h1 class="font-semibold">${serviceTitle}</h1>
                        <h1>${serviceNumber}</h1>
                    </div>
                    <div>
                        <p>${time}</p>
                    </div>
                </div>
             
                
                `

            cartContainer.append(newElemennt);

            getElement('coin-count').innerText = currentCoin - 20;

        }
        else {
            alert('❌Your balance is too low. You must have 20  coins to make a call')
            return;
        }
    })
}
// clear button
getElement('clear-btn').addEventListener('click', function () {
    getElement('history-look').innerHTML = ""
})

// copy button

const copy = document.getElementsByClassName('copy-btn');
for (const Copys of copy) {
    Copys.addEventListener('click', function () {
        const copyCount = Copys.parentNode.children[0].innerText
        const serviceNumber = Copys.parentNode.parentNode.children[1].children[2].innerText
        console.log(copyCount, serviceNumber)
        let coppynum = Number(getElement('current-copy').innerText) + 1

        getElement('current-copy').innerText = coppynum;

        let  temp = document.createElement('textarea');
        temp.value = serviceNumber;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);

        alert('The number has been copied. ' + serviceNumber);

    })
}


