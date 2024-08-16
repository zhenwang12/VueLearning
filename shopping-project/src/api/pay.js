import networks from '@/util/networks'

export const getAddressList = () => {
  return networks.get('/address/list')
}

// mode = cart => { cartId }
// mode = buyNow => { goodsId, goodsNum, goodsSkuId }
export const checkoutOrder = (mode, obj) => {
  return networks.get('/checkout/order', {
    params: {
      mode, // cart buyNow
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

// mode = cart => { cartId, remark }
// mode = buyNow => { goodsId, goodsNum, goodsSkuId, remark }
export const submitOrder = (mode, obj) => {
  return networks.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: 10,
    ...obj
  })
}
