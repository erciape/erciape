// import Vue from 'vue'
// import Element from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'

// Vue.use(Element, { locale })

import Vue from 'vue'
import { 
    Table,
    TableColumn,
    Button,
    Message,
    Dialog,
    Input,
    Select,
    Option,
    Checkbox,
    Pagination,
    InputNumber,
    Tag,
    Icon,
    Tooltip,
    Progress,
    Drawer,
    Backtop
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const Mess = ({type,message,duration}) => {
    Message({
        type: type || 'success',
        message,
        duration: duration || 1000
    })
}

Vue.use(Dialog);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(Pagination);
Vue.use(InputNumber);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Tooltip);
Vue.use(Progress);
Vue.use(Drawer);
Vue.use(Backtop);
Vue.use(Table);
Vue.use(TableColumn);
Vue.component(Button.name, Button)
Vue.prototype.$message = Mess