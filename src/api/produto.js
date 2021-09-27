import imgMonitor from '../assets/image.png'

class ProdutoService {
    buscarProdutos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        value: 'Monitor LED 27 Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
                        preco: 'R$2.813,99',
                        precoPromo: 'R$2.599,00',
                        faturamento: '10x de R$259,90',
                        imagem: imgMonitor
                    },

                ])
            })
        })
    }
}

export default new ProdutoService;