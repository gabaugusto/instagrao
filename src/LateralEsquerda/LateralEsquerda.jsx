
import ListItem from './ListItem'
import './LateralEsquerda.css'

// Importações de Imagem
// var nomeDaVariavel = require('caminho/para/imagem.jpg')
import instagram from '../assets/logo-pequeno.jpg'

//Importação de Ícones
import { RiHomeHeartFill } from "react-icons/ri";

var x = 10
var y = 20

export default function LateralEsquerda() {
    return (
        <div className='LateralEsquerda'>
            <img src={instagram} alt='Logo do Instagram' className='logoInstagram' />
            <ul>

                <ListItem icone={<RiHomeHeartFill />} texto="Home" />
                <ListItem icone="Icone" texto="Search" />
                <ListItem icone="Icone" texto="Explore" />
                <ListItem icone="Icone" texto="Reels" />

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