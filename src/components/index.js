import {
  FlexFullRow,
  FlexFullColumn,
  FlexEqualRows
} from '@/components/FlexLayout'
import isRem from '@/utils/isRem'
const Components = {
  FlexFullRow,
  FlexFullColumn,
  FlexEqualRows
}
// eslint-disable-next-line
const install=function (Vue,opt){
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
  isRem.use(opt)
}

export default {
  install
}
