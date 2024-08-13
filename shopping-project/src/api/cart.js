import networks from '@/util/networks'

export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return networks.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
