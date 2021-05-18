import * as authActionCreators  from './auth'
import * as videoActionCreators  from './video'

export default {
    ...authActionCreators,
    ...videoActionCreators
}