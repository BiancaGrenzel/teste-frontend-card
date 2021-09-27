import * as types from './types';
import ProdutoService from '../../api/produto'

export const buscarProdutos =
	(produtos, service = ProdutoService) =>
	async (dispatch) =>
		await service.buscarProdutos(produtos).then((data) => {
			dispatch({ type: types.BUSCAR_PRODUTOS, payload: data });
		});