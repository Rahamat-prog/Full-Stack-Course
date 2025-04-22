const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

let count = 0
btn1.addEventListener('click', () => {
    if(count > 19) {
        btn1.setAttribute('disabled', '')
    }else{
        count++
    }
    btn3.removeAttribute('disabled')
   
    updateCount()
})

btn3.addEventListener('click', () => {
    if(count < 1) {
        btn3.setAttribute('disabled', '')
    }else{
        count--
    }
   
    updateCount()
})

function updateCount() {
    btn2.innerText = count
}

btn4.addEventListener('click', () => {
    count = 0
    btn3.removeAttribute('disabled')
    btn1.removeAttribute('disabled')
    updateCount()
})
