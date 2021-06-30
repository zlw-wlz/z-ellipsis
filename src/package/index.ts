import { App } from '@vue/runtime-core'
import ZEllipsis from './ZEllipsis.vue'
type SFCWithInstall<T> = T & { install(app: App): void; }
const _ZEllipsis :SFCWithInstall<typeof ZEllipsis> = ZEllipsis as SFCWithInstall<typeof ZEllipsis>
_ZEllipsis.install = (app:App) => {
  app.component(ZEllipsis.name,ZEllipsis)
}
export default _ZEllipsis
