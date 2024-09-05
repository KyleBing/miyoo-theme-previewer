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
            {name: 'Shutdown',             isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-Shutdown.png`,          },
            {name: 'Brightness',           isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-brightness-48.png`,     },
            {name: 'WIFI',                 isShowSwitch: true,   isSwitchOn: true, icon: `../${props.themeName}/skin/icon-setting-wifi.png`,      },
            {name: 'Display',              isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/color.png`,                  },
            {name: 'Change language',      isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-language-48.png`,       },
            {name: 'Menu sound',           isShowSwitch: true,   isSwitchOn: false, icon: `../${props.themeName}/skin/sound-icon.png`,             },
            {name: 'Themes',               isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-theme.png`,             },
            {name: 'Joystick calibration', isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-joystick-calibrate.png`,},
            {name: 'Joystick',             isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-joystick-test.png`,     },
            {name: 'Keymap',               isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-key-setting-48.png`,  },
            {name: 'Factory reset',        isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-factory-reset-48.png`,  },
            {name: 'Device info',          isShowSwitch: false,  isSwitchOn: false, icon: `../${props.themeName}/skin/icon-device-info-48.png`,    },

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
            <img class="background" :src="background" alt="bg"/>
            
            <div class="menu-list">
                <MenuListItemSmall
                    @click="listItemClicked(item.name, index)"
                    v-for="(item, index) in settingList" :key="item.name"
                    :icon="item.icon"
                    :title="item.name"
                    :themeName="themeName"
                    :isSwitchOn="item.isSwitchOn"
                    :isShowSwitch="item.isShowSwitch"
                    :subtitle="item.desc"
                    :isSelected="currentAppIndex === index"
                />
            </div>
            
            <PartFooter :themeName="props.themeName"/>
            
        </div>
`
}
