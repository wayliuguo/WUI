import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@w-ui/theme-chalk/index.less'
import Loading from '@w-ui/components/Loading'
import Icon from '@w-ui/components/Icon'
import Badge from '@w-ui/components/Badge'
import Button from '@w-ui/components/Button'
import Cell from '@w-ui/components/Cell'
import CellGroup from '@w-ui/components/Cell-Group'
import Col from '@w-ui/components/Col'
import Row from '@w-ui/components/Row'
import Space from '@w-ui/components/Space'
import CheckboxGroup from '@w-ui/components/CheckboxGroup'
import Checkbox from '@w-ui/components/Checkbox'
import RadioGroup from '@w-ui/components/RadioGroup'
import Radio from '@w-ui/components/Radio'
import Overlay from '@w-ui/components/Overlay'
import Popup from '@w-ui/components/Popup'
import Toast from '@w-ui/components/Toast'
import ActionSheet from '@w-ui/components/ActionSheet'
import Barrage from '@w-ui/components/Barrage'
import DropdownMenu from '@w-ui/components/DropdownMenu'
import DropdownItem from '@w-ui/components/DropdownItem'

const plugins = [
  Loading,
  Icon,
  Badge,
  Button,
  Cell,
  CellGroup,
  Col,
  Row,
  Space,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Overlay,
  Popup,
  Toast,
  ActionSheet,
  Barrage,
  DropdownMenu,
  DropdownItem
]

const app = createApp(App)

plugins.forEach(plugin => app.use(plugin)) // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app')
