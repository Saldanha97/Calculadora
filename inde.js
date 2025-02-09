function Calculadora() {
    this.display = document.querySelector('.display')


    this.inicia = () => {
        document.addEventListener('click', (e) => {
            const el = e.target

            if (el.classList.contains('btn-num')) this.num(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.eq()
        })
        this.display.addEventListener('input', (event) => {
            let valor = event.target.value;
            event.target.value = valor.replace(/[a-zA-Z]/g, '');
        })
    }

    this.num = (el) => this.display.value += el.innerText
    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.eq = () => {
        try {
            const conta = eval(this.display.value)

            if (!conta) {
                alert('erro 1')
                return


            }
            this.display.value = conta
        }

        catch (erro) {
            alert('erro')

            return
        }

    }




    this.ini = () => {
        this.inicia()
    }

}

const cal = new Calculadora()
cal.inicia()