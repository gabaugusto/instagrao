
import ListItem from './ListItem'
import './LateralEsquerda.css'

// Importações de Imagem
// var nomeDaVariavel = require('caminho/para/imagem.jpg')
import instagram from '../assets/logo-pequeno.jpg'

var x = 10
var y = 20

export default function LateralEsquerda() {
    return (
        <div className='LateralEsquerda'>
            <img src={instagram} alt='Logo do Instagram' className='logoInstagram' />
            <ul>
                
                <ListItem text="Home" />
                <ListItem  text="Search" />
                <ListItem  text="Explore" />
                <ListItem  text="Reels" />

            </ul>
        </div>
    )
}

function Exemplo() {

}

function Caneca() {

}

function Celular() {
}