import { useState } from 'react';
import './styles.css';
import ImageCheck from '../../assets/image-check.png'

const ButtonAdicionar = (props) => {
    const [active, setActive] = useState();

    const handleClick = () => {
        props.setTextButton(prevState => {
            if(prevState === 'ADICIONAR'){
                setActive(true)
                return 'ADICIONADO'
            } else{
                setActive(false)
                return 'ADICIONAR'
            }
        })
    }
    console.log(props.onClick)

//{produtos && produtos.length ? produtos.map((prod) => (
    return (
        <div className="container">
            <button onClick={handleClick} className={`${active ? 'adicionado' : 'button'}`}>{ active && (<img src={ImageCheck} className="check"/>)}{props.value}</button>
        </div>
    )
}


export default ButtonAdicionar;