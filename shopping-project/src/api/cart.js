import networks from '@/util/networks'

export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return networks.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const getCartList = () => {
  return networks.get('/cart/list')
}

export const updateCart = (goodsId, goodsNum, goodsSkuId) => {
  return networks.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const deleteCartItem = (cartId) => {
  return networks.post('/cart/clear', {
    cartId
  })
}
