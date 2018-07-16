import { context } from '../utils/helper'

export const MyContext = ({
  Consumer(props) {
    return props.children(context)
  },
})

export default MyContext
