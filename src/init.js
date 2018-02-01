import { getType } from './utils'
import initData from './initData'

const init = options => {

  let data = getType(options.data) === 'function'
              ? (options.data)()
              : options.data || {}

  initData(data)
}

export default init