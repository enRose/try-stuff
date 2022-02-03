const messageTitlePrefix = 'caca'

const emojis = ['💩', '👯‍', '😸', '🏄', '🚀', '🔥', '🎉', '😄', '🦁']

export enum cards {
  VisaLight = 'https://www.asb.co.nz/content/dam/asb/images/web/700x430/creditcard/2020/asb-774-visa-light-card-740x430.png',
  VisaRewards = 'https://www.asb.co.nz/content/dam/asb/images/web/700x430/creditcard/2019/visa-rewards-card-700x430.png',
  VisaPlatinumRewards = 'https://www.asb.co.nz/content/dam/asb/images/web/700x430/creditcard/2019/visa-platinum-card-700x430.png'
}

export enum Gifs {
  LaserEyeCat = 'https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif',
  LongHairCow = 'https://media.giphy.com/media/11lE4F9K9UlqRa/giphy.gif',
}

const style = (backgroundImage: string) => [
  `background-image: url("${backgroundImage}")`,
  'background-size: cover',
  'color: #fff',
  'padding: 45px 45px',
  'line-height: 100px'
  ].join(';')

const feelingLucky = () => {
  const random = Math.floor(Math.random() * emojis.length)
  return emojis[random]
}

export enum Emoji {
  CaCa = emojis.indexOf('💩'),
  Chat = emojis.indexOf('😸'),
  Rocket= emojis.indexOf('🚀'),
  Fire = emojis.indexOf('🔥'),
  Celebrate = emojis.indexOf('🎉'),
  Smile = emojis.indexOf('😄')
}

export const logEmoji = (obj: any, title?: string, emoji?: Emoji) => 
  console.log(`${emoji && emojis[emoji]} ${messageTitlePrefix}: ${title}`.trim(), obj)

export const logGif = (obj: any, title?: string, gif?: Gifs) =>
  console.log(`${gif && '%c'} ${messageTitlePrefix}: ${title} %o`.trim(), `${gif ? style(gif) : 'color:black'}` , obj)

export enum ColourOf {
  Success = 'Green',
  Info = 'DodgerBlue',
  Error = 'Red',
  Warning = 'Orange',
  Default = 'Black'
}

export const colorLog = (message: string, type?: ColourOf, obj?: any) => 
  obj ? console.log(`%c${messageTitlePrefix}: ${message}%o`, `color:${type || ColourOf.Default}`, obj) : 
  console.log(`%c${messageTitlePrefix}: ${message}`, `color:${type || ColourOf.Default}`)
