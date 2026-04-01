
import ListItem from './ListItem'
import './LateralEsquerda.css'

// Importações de Imagem
// var nomeDaVariavel = require('caminho/para/imagem.jpg')
import instagram from '../assets/logo-pequeno.jpg'

//Importação de Ícones
import { RiHomeHeartFill } from "react-icons/ri";
import { HiShoppingCart, HiShieldCheck } from "react-icons/hi";

var x = 10
var y = 20

export default function LateralEsquerda() {
    return (
        <div className='LateralEsquerda'>
            <img src={instagram} alt='Logo do Instagram' className='logoInstagram' />
            <ul>

                <ListItem icone={<RiHomeHeartFill size={40}  color="#336699" />} texto="Home" />
                <ListItem icone={<HiShoppingCart size={40}  color="#336699" />} texto="Search" />
                <ListItem icone={<HiShieldCheck size={40}  color="#336699" />} texto="Explore" />
                <ListItem icone={<RiHomeHeartFill size={40}  color="#336699" />} texto="Reels" />
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