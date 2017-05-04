import NeedNameAndConstants from './NeedNameAndConstants'
import { supplyTheNameAttrStateObj, supplyConfigConstants } from '../../common/componentPreparatory'
import configConstants from '../../common/config/config.constants'

let NeedNameAndConstantsSetup = supplyTheNameAttrStateObj(NeedNameAndConstants)
NeedNameAndConstantsSetup = supplyConfigConstants(configConstants, NeedNameAndConstantsSetup)

export default NeedNameAndConstantsSetup
