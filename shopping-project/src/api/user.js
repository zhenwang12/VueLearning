import networks from '@/util/networks'

export const getUserInfo = () => {
  return networks.get('/user/info')
}
