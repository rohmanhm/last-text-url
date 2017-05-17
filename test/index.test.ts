import * as LastTextURL from '../dist'

describe('Last Text URL', () => {
  test('Should get last text from URL', () => {
    const url: String = 'https://abc.xyz/2017/loremipsum'
    expect(LastTextURL(url)).toBe('loremipsum')
  })
})
