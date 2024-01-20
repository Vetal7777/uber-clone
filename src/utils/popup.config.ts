import { PopupComponentName } from '@/components/Popups/types'
import { RouterHash } from '@/router/types'

export const popupConfig = {
  [RouterHash.lux]: PopupComponentName.LuxPopup,
  [RouterHash.comfort]: PopupComponentName.ComfortPopup
}
