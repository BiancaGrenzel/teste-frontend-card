import './styles.css'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getProdutos } from "../../redux/produto/selectors";
import { useEffect, useState } from 'react';
import { buscarProdutos } from '../../redux/produto/action';
import Card from '../card';
import ButtonAdicionar from '../buttonAdicionar';
import ButtonWishlistDefault from '../../assets/wishlist-default.png'
import ButtonWishlistActive from '../../assets/wishlist-active.png';


const DescricaoProduto = (props) => {
    const { produtos, buscarProdutos } = props;

    const [textButton, setTextButton] = useState('ADICIONAR');

    const [wishlistButton, setWishlistbutton] = useState('wishlist')
    
    const [active, setActive] = useState();

    useEffect(() => {
        buscarProdutos(produtos);
    }, []);

    const selecionarWishlist = () => {
        setWishlistbutton(prevState => {
            if(prevState === 'wishlist'){
                setActive(true)
                return 'wishlist-active'
            } else{
                setActive(false)
                return 'wishlist'
            }
        })
        
    }

    return (
        <div>
            {produtos && produtos.length ? produtos.map((prod) => (
                <Card>
                    <div className="container-imagem">
                        <div className={`${active ? 'wishlist-active' : 'wishlist'}`} onClick={selecionarWishlist}/>
                        <img src={prod.imagem} />
                    </div>
                    <h3>{prod.value}</h3>
                    <p className="preco">{prod.preco}</p>
                    <p className="preco-promocional">{prod.precoPromo}</p>
                    <p className="texto">em até <p className="faturamento">{prod.faturamento}</p> sem juros</p>
                    <ButtonAdicionar value={textButton} setTextButton={setTextButton} />
                </Card>

            )) : null}
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            buscarProdutos,
        }, dispatch
    )

const mapStateToProps = (state) => {
    return {
        produtos: getProdutos(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescricaoProduto);