import { context } from '../utils/helper'

export const FormikContext = ({
  Consumer(props) {
    return props.children(context)
  },
})

export default FormikContext
