function Calculadora() {
    this.display = document.querySelector('.display')

    this.evento = () => {
        document.addEventListener('click', (e) => {
            const el = e.target

            if (el.classList.contains('btn-num')) this.displayadd(el)

            if (el.classList.contains('btn-clear')) this.dell()

            if (el.classList.contains('btn-del')) this.del()

            if (el.classList.contains('btn-eq')) this.eq()


            this.display.addEventListener('input', (event) => {
                let valor = event.target.value;
                event.target.value = valor.replace(/[a-zA-Z]/g, '');
            })
        })

    }
    this.displayadd = (el) => this.display.value += el.innerText

    this.dell = () => this.display.value = ''

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.eq = () => {
        try {
            const conta = eval(this.display.value)

            if (!conta) {
                alert('erro')
                return
            }
            this.display.value = conta
        }

        catch (e) {
            alert('erro')
            return
        }
    }

    this.ini = () => this.evento()

}


function validarEntrada(event) {
    let valor = event.target.value;
    event.target.value = valor.replace(/[a-zA-Z]/g, '');
}

const cal = new Calculadora()
cal.evento()


