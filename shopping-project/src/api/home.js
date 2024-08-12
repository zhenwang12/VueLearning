import networks from '@/util/networks'

export const getHomeData = () => {
  return networks.get('/page/detail', {
    params: { pageId: 0 }
  })
}
