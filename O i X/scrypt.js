var button_x = document.getElementById("x")
var button_o = document.getElementById("o")
var button_1 = document.getElementById("1")
var button_2 = document.getElementById("2")
var button_3 = document.getElementById("3")
var button_4 = document.getElementById("4")
var button_5 = document.getElementById("5")
var button_6 = document.getElementById("6")
var button_7 = document.getElementById("7")
var button_8 = document.getElementById("8")
var button_9 = document.getElementById("9")
var h1 = document.getElementById('h1')
const res = document.getElementById('reset')




function zapamieatj_x() {
    gracz = 'g_x'
    return gracz

}

function zapamieatj_o() {
    gracz = 'g_o'
    return gracz

}


button_x.addEventListener('click', function () {
    zapamieatj_x()

});

button_o.addEventListener('click', function () {
    zapamieatj_o()

});


button_1.addEventListener('click', function () {
    button_1.classList.value = ''
    button_1.classList.add(gracz)
    sprawdzanie()
    console.log(h1.classList.value)
    console.log(button_1.classList.value)

})

button_2.addEventListener('click', function () {
    button_2.classList.value = ''
    button_2.classList.add(gracz)
    sprawdzanie()
    console.log(h1.classList.value)
    console.log(button_2.classList.value)

})

button_3.addEventListener('click', function () {
    button_3.classList.value = ''
    button_3.classList.add(gracz)
    sprawdzanie()
    console.log(h1.classList.value)
    console.log(button_3.classList.value)
})

button_4.addEventListener('click', function () {
    button_4.classList.value = ''
    button_4.classList.add(gracz)
    sprawdzanie()

})

button_5.addEventListener('click', function () {
    button_5.classList.value = ''
    button_5.classList.add(gracz)
    sprawdzanie()

})

button_6.addEventListener('click', function () {
    button_6.classList.value = ''
    button_6.classList.add(gracz)
    sprawdzanie()

})
button_7.addEventListener('click', function () {
    button_7.classList.value = ''
    button_7.classList.add(gracz)
    sprawdzanie()

})

button_8.addEventListener('click', function () {
    button_8.classList.value = ''
    button_8.classList.add(gracz)
    sprawdzanie()

})
button_9.addEventListener('click', function () {
    button_9.classList.value = ''
    button_9.classList.add(gracz)
    sprawdzanie()

})


function sprawdzanie() {
    if (button_1.classList.value == button_2.classList.value && button_1.classList.value == button_3.classList.value && button_2.classList.value == button_3.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
        console.log('123')
    } else if (button_4.classList.value == button_5.classList.value && button_6.classList.value == button_4.classList.value && button_6.classList.value == button_5.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    } else if (button_7.classList.value == button_8.classList.value && button_9.classList.value == button_7.classList.value && button_8.classList.value == button_9.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    } else if (button_1.classList.value == button_4.classList.value && button_7.classList.value == button_1.classList.value && button_4.classList.value == button_7.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    } else if (button_2.classList.value == button_5.classList.value && button_8.classList.value == button_2.classList.value && button_5.classList.value == button_8.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    } else if (button_3.classList.value == button_6.classList.value && button_9.classList.value == button_3.classList.value && button_6.classList.value == button_9.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    } else if (button_1.classList.value == button_5.classList.value && button_9.classList.value == button_1.classList.value && button_5.classList.value == button_9.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    } else if (button_3.classList.value == button_5.classList.value && button_7.classList.value == button_3.classList.value && button_5.classList.value == button_7.classList.value) {
        h1.classList.value = ''
        h1.classList.value = 'koniec'
    }
}

res.addEventListener('click', function () {
    button_1.classList.value = '1'
    button_2.classList.value = '2'
    button_3.classList.value = '3'
    button_4.classList.value = '4'
    button_5.classList.value = '5'
    button_6.classList.value = '6'
    button_7.classList.value = '7'
    button_8.classList.value = '8'
    button_9.classList.value = '8'
    h1.classList.value = 'start'


})