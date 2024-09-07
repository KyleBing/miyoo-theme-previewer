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
        isShowTitle: {
            type: Boolean,
            default: true
        },
        isShowFooterTitle: {
            type: Boolean,
            default: true
        },
    },
    components: {
        PartHeader,
        PartFooter,
        MenuListItemSmall
    },
    setup(props) {
        const settingList = [
            {name: 'Shutdown' ,                 os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-Shutdown.png` ,           } ,
            {name: 'Brightness' ,               os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-brightness-48.png` ,      } ,
            {name: 'Display' ,                  os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/color.png` ,                   } ,
            {name: 'Change language' ,          os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-language-48.png` ,        } ,
            {name: 'Button Remap' ,             os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-key-setting-48.png` ,     } ,
            {name: 'Wi-Fi' ,                    os: 'onion', isShowSwitch: true ,  isSwitchOn: true ,  icon: `${props.themeName}/skin/icon-setting-wifi.png` ,       } ,
            {name: 'Volume' ,                   os: 'onion', isShowSwitch: true ,  isSwitchOn: false , icon: `${props.themeName}/skin/sound-icon.png` ,              } ,
            {name: 'BGM Volume' ,               os: 'onion', isShowSwitch: true ,  isSwitchOn: false , icon: `${props.themeName}/skin/sound-icon.png` ,              } ,
            {name: 'Sleep Timer' ,              os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-device-info-48.png` ,     } ,
            {name: 'Factory Reset' ,            os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-factory-reset-48.png` ,   } ,
            {name: 'Device info' ,              os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-device-info-48.png` ,     } ,
            {name: 'Hardware Test' ,            os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-device-info-48.png` ,     } ,
            {name: 'Fixes' ,                    os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/fixit.png` ,                   } ,

            {name: 'Themes' ,                   os: 'onion', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-theme.png` ,              } ,
            {name: 'Calibrate Joystick' ,       os: 'spruce', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-joystick-calibrate.png` , } ,
            {name: 'Joystick Test' ,            os: 'spruce', isShowSwitch: false , isSwitchOn: false , icon: `${props.themeName}/skin/icon-joystick-test.png` ,      } ,
        ]

        // mark current list item
        const currentApp = ref('Shutdown')
        const currentAppIndex = ref(0)

        function listItemClicked(tabName, index){
            currentApp.value = tabName
            currentAppIndex.value = index
        }

        return {
            background: `${props.themeName}/skin/background.png`,
            line_h: `${props.themeName}/skin/div-line-h.png`,
            settingList,
            currentApp,
            currentAppIndex,
            listItemClicked,
        }
    },
    template: `
        <div class="screen screen-app-list">
            <PartHeader title="Settings" :themeName="themeName"/>
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
            
            <PartFooter :isShowFooterTitle="isShowFooterTitle" :themeName="themeName"/>
            
        </div>
`
}
