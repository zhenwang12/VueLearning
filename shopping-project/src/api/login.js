import networks from '@/util/networks'

export const getPicCode = () => {
  return networks.get('/captcha/image')
}

export const getSmsCode = (captchaCode, captchaKey, mobile) => {
  return networks.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

export const loginAccount = (smsCode, mobile) => {
  return networks.post('/passport/login', {
    form: {
      smsCode,
      mobile,
      isParty: false,
      partyData: {}
    }
  })
}
