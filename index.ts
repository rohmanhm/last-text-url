function convert (url: String) {
  const splittedURL = url.split('/')
  return splittedURL[splittedURL.length - 1]
}

export = convert