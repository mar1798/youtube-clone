import * as authAtionCreators  from './auth'
import * as videoAtionCreators  from './video'

export default {
    ...authAtionCreators,
    ...videoAtionCreators
}