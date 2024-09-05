import { ref, onMounted } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import MenuListItemSmall from './components/MenuListItemSmall.js'

export default {

    components: {
        PartHeader,
        PartFooter,
        MenuListItemSmall
    },
    setup() {
        onMounted(()=> {

        })

        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        const settingList = [
            {name: 'Shutdown',                  icon: `../${themeName}/skin/icon-Shutdown.png`,          desc: ''                      },
            {name: 'Brightness',                icon: `../${themeName}/skin/icon-brightness-48.png`,     desc: ''              },
            {name: 'WIFI',                      icon: `../${themeName}/skin/icon-setting-wifi.png`,      desc: ''          },
            {name: 'Display',                   icon: `../${themeName}/skin/color.png`,                  desc: ''                  },
            {name: 'Change language',           icon: `../${themeName}/skin/icon-language-48.png`,       desc: ''         },
            {name: 'Menu sound',                icon: `../${themeName}/skin/sound-icon.png`,             desc: ''             },
            {name: 'Joystick calibration',      icon: `../${themeName}/skin/icon-joystick-calibrate.png`,desc: ''          },
            {name: 'Joystick',                  icon: `../${themeName}/skin/icon-joystick-test.png`,     desc: ''                          },
            {name: 'Keymap',                    icon: `../${themeName}/skin/icon-key-setting-48 2.png`,  desc: ''                     },
            {name: 'Factory reset',             icon: `../${themeName}/skin/icon-factory-reset-48.png`,  desc: ''                         },
            {name: 'Device info',               icon: `../${themeName}/skin/icon-device-info-48.png`,    desc: ''     },
            {name: 'Themes',                    icon: `../${themeName}/skin/icon-theme.png`,             desc: ''                 },
        ]

        // mark current list item
        const currentApp = ref('Shutdown')
        const currentAppIndex = ref(0)

        function listItemClicked(tabName, index){
            currentApp.value = tabName
            currentAppIndex.value = index
        }

        return {
            background: `../${themeName}/skin/background.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,
            settingList,
            currentApp,
            currentAppIndex,
            listItemClicked,
        }
    },
    template: `
        <div class="screen screen-app-list">
            <PartHeader title="Settings"/>
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
            
            <PartFooter/>
            
        </div>
`
}
