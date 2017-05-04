import Menubar from './Menubar'
import {
  supplyConfigMenubar,
  supplyTheNameAttrStateObj,
  supplyCommonActionDispatchMethod,
  supplyConfigConstants
} from '../../common/componentPreparatory'

import configMenubar from '../../common/config/config.menubar'
import configConstants from '../../common/config/config.constants'

// export default supplyConfigConstants(
//   configConstants,
//   supplyCommonActionDispatchMethod(
//     supplyTheNameAttrStateObj(
//       supplyConfigMenubar(configMenubar, Menubar)
//     )
//   )
// )

let MenubarPrepare = supplyConfigConstants(configConstants, Menubar)
MenubarPrepare = supplyCommonActionDispatchMethod(MenubarPrepare)
MenubarPrepare = supplyTheNameAttrStateObj(MenubarPrepare)
MenubarPrepare = supplyConfigMenubar(configMenubar, MenubarPrepare)

export default MenubarPrepare
