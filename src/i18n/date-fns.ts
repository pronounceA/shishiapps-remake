import ja from 'date-fns/locale/ja'

const getDateAdapterLocale = (lang: string) => {
  switch (lang) {
    case 'ja-JP':
    default:
      return ja
  }
}

const getDateFormats = (lang: string) => {
  switch (lang) {
    case 'ja-JP':
    default:
      return {
        monthAndYear: 'yyyy年 MM月',
      }
  }
}

export {
  getDateAdapterLocale,
  getDateFormats,
}
