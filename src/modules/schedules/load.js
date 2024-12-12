import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

import { hoursLoad } from "../form/hours-load";

//seleciona o input de data
const selectedDate = document.getElementById("date")


export async function schedulesDay() {

    //obtem a data do input
    const date = selectedDate.value

    //busca na API os agendamentos 
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)

    //renderiza as horas disponíveis    
    hoursLoad({ date })

}