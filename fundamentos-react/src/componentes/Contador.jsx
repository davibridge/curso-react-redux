import React, {Component} from 'react'

export default class Contador extends Component { 
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
        // this.props.numero++
    }

    menosUm = (e) => {
        console.log(e)
        this.alterarNumero(-1)
        // this.props.numero++
    }
    
    // Quando um metodo tem somente um parametro, não é necessarios os parenteses
    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }


    render() {
        return (
            <div>
                <div> Número: {this.state.numero} </div>
                <button onClick={this.maisUm}> Inc</button>
                <button onClick={this.menosUm}> Dec </button>
                <button onClick={() => this.alterarNumero(10)}> Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}> Dec10 </button>
            </div>
        )
    }
}

//Solução 01 - bindando o this ao método
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//Solução 02 - Usando arrow function (onClick)
// <button onClick={() => this.maisUm()}> Inc</button>

//Solução 03 - Transformar o método em arrow function
// maisUm = () => {
    /*Tudo que você recebe em props é somente leitura*/
//     this.props.numero++
//     console.log(this)
// }