/* global performance */

let now

if (process.browser) {
  if (typeof performance !== 'undefined' && performance.now) {
    now = () => performance.now()
  } else {
    now = () => Date.now()
  }
} else {
  // implementation borrowed from:
  // https://github.com/myrne/performance-now/blob/6223a0d544bae1d5578dd7431f78b4ec7d65b15c/src/performance-now.coffee
  let hrtime = process.hrtime
  let getNanoSeconds = () => {
    let hr = hrtime()
    return hr[0] * 1e9 + hr[1]
  }
  let loadTime = getNanoSeconds()
  now = () => ((getNanoSeconds() - loadTime) / 1e6)
}

export default now
