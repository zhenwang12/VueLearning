import networks from '@/util/networks'

export const getMyOrders = (dataType, page) => {
  return networks.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
