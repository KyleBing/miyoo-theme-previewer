import { ref } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import MenuListItemSmall from './components/MenuListItemSmall.js'

export default {
    props: {
        themeName: { // THEME NAME
            type: String,
            default: 'Cosy by KyleBing'
        },
    },
    components: {
        PartHeader,
        PartFooter,
        MenuListItemSmall
    },
    setup(props) {
        const settingList = [
            {name: 'Shutdown',            icon: `../${props.themeName}/skin/icon-Shutdown.png`,          desc: ''},
            {name: 'Brightness',          icon: `../${props.themeName}/skin/icon-brightness-48.png`,     desc: ''},
            {name: 'WIFI',                icon: `../${props.themeName}/skin/icon-setting-wifi.png`,      desc: ''},
            {name: 'Display',             icon: `../${props.themeName}/skin/color.png`,                  desc: ''},
            {name: 'Change language',     icon: `../${props.themeName}/skin/icon-language-48.png`,       desc: ''},
            {name: 'Menu sound',          icon: `../${props.themeName}/skin/sound-icon.png`,             desc: ''},
            {name: 'Themes',              icon: `../${props.themeName}/skin/icon-theme.png`,             desc: ''},
            {name: 'Joystick calibration',icon: `../${props.themeName}/skin/icon-joystick-calibrate.png`,desc: ''},
            {name: 'Joystick',            icon: `../${props.themeName}/skin/icon-joystick-test.png`,     desc: ''},
            {name: 'Keymap',              icon: `../${props.themeName}/skin/icon-key-setting-48 2.png`,  desc: ''},
            {name: 'Factory reset',       icon: `../${props.themeName}/skin/icon-factory-reset-48.png`,  desc: ''},
            {name: 'Device info',         icon: `../${props.themeName}/skin/icon-device-info-48.png`,    desc: ''},

        ]

        // mark current list item
        const currentApp = ref('Shutdown')
        const currentAppIndex = ref(0)

        function listItemClicked(tabName, index){
            currentApp.value = tabName
            currentAppIndex.value = index
        }

        return {
            background: `../${props.themeName}/skin/background.png`,
            line_h: `../${props.themeName}/skin/div-line-h.png`,
            settingList,
            currentApp,
            currentAppIndex,
            listItemClicked,
            props
        }
    },
    template: `
        <div class="screen screen-app-list">
            <PartHeader title="Settings" :themeName="props.themeName"/>
            <img class="line-h" :src="line_h" alt="line-h"/>
            <img class="background" :src="background" alt="bg"/>
            
            <div class="menu-list">
                <MenuListItemSmall
                    @click="listItemClicked(item.name, index)"
                    v-for="(item, index) in settingList" :key="item.name"
                    :icon="item.icon"
                    :title="item.name"
                    :subtitle="item.desc"
                    :isSelected="currentAppIndex === index"
                />
            </div>
            
            <PartFooter :themeName="props.themeName"/>
            
        </div>
`
}
