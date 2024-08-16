import networks from '@/util/networks'

export const getAddressList = () => {
  return networks.get('/address/list')
}

export const checkoutOrder = (mode, obj) => {
  console.log(mode, obj)
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
