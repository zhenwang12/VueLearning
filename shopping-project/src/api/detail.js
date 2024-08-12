import networks from '@/util/networks'

export const getProDetail = (id) => {
  return networks.get('/goods/detail', {
    params: {
      goodsId: id
    }
  })
}

export const getGoodsComment = (goodsId, limit) => {
  return networks.get('/comment/listRows', {
    params: {
      goodsId: goodsId,
      limit: limit
    }
  })
}
