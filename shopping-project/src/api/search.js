import request from '@/util/networks'

export const getProList = (obj) => {
  const {
    categoryId,
    goodsName,
    page
  } = obj
  return request.get('/goods/list', {
    categoryId,
    goodsName,
    page
  })
}

export const getCategoryData = () => {
  return request.get('/category/list')
}
