import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//data atual para input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual

selectedDate.value = inputToday

//define a data mínima como data atual

selectedDate.min = inputToday

form.onsubmit = (event) => {
    //previne o comportamento padrão de carregar a página
    event.preventDefault()

    console.log("Enviado!")
}