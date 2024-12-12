const periods = document.querySelectorAll(".period")

//gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((periods) => {

    //captura o evento de clique na lista
    period.addEventListener("click", (event) => {

        if(event.target.classList.contains("cancel-icon")) {

            //obtém a li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset

            if(id) {
                
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelas esse agendamento?"
                )

                if(isConfirm) {
                    console.log("Confirmado!")
                }

            }

        }

    })

})