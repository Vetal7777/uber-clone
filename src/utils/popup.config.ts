import { PopupComponentName } from '@/components/Popups/types'
import { RouterHash } from '@/router/types'

export const popupMap = {
  [RouterHash.lux]: PopupComponentName.LuxPopup,
  [RouterHash.comfort]: PopupComponentName.ComfortPopup
}
