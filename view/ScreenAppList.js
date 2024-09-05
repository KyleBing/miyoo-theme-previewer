import { ref, onMounted } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import MenuListItemLarge from './components/MenuListItemLarge.js'

export default {

    components: {
        PartHeader,
        PartFooter,
        MenuListItemLarge
    },
    setup() {
        onMounted(()=> {

        })

        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        const appList = [
            {name: 'SYNCTHING',                  desc: 'Synchronize your files',                            icon: `../${themeName}/icons/App/syncthing.png`},
            {name: 'BOOT LOGO',                  desc: 'Swap the Boot Logo at Start Up',                    icon: `../${themeName}/icons/App/bootlogo.png`},
            {name: 'ICON FRESH',                 desc: 'Apply Icons From the Current Theme',                icon: `../${themeName}/icons/App/iconfresh.png`},
            {name: 'MIYOO GAMELIST',             desc: 'Generate miyoogamelist.xml',                        icon: `../${themeName}/icons/App/gamelist.png`},
            {name: 'FILE MANAGEMENT',            desc: 'View and Move Files On Your SD Card',               icon: `../${themeName}/icons/App/file.png`},
            {name: 'PICO-8',                     desc: 'Splore - Play and Explore Games',                   icon: `../${themeName}/icons/App/pico8.png`},
            {name: 'EMU FRESH',                  desc: 'Refresh Roms & Displayed Emulators',                icon: `../${themeName}/icons/App/emufresh.png`},
            {name: 'BOXART SCRAPER',             desc: 'Scrape Game Boxart',                                icon: `../${themeName}/icons/App/scraper.png`},
            {name: 'RTC',                        desc: 'Set the Real Time Clock',                           icon: `../${themeName}/icons/App/rtc.png`},
            {name: 'RECENT - OFF',               desc: 'Turn on/off Recents',                               icon: `../${themeName}/icons/App/recents.png`},
            {name: 'WIFI FILE TRANSFER - ON',    desc: 'Upload and Manage your Files Wirelessly',           icon: `../${themeName}/icons/App/sftpgo.png`},
            {name: 'RETROARCH',                  desc: 'Core and Game Configuration',                       icon: `../${themeName}/icons/App/retroarch.png`},
            {name: 'RETROARCH EXPERT MODE - ON', desc: 'Users Hotkeys & Doesn\'t have In-Game Menu',        icon: `../${themeName}/icons/App/retroexpert.png`},
            {name: 'LED',                        desc: 'Config the LED on device',                          icon: `../${themeName}/icons/App/led.png`},
            {name: 'RANDOM GAME - OFF',          desc: 'Play Random Game from Lib',                         icon: `../${themeName}/icons/App/random.png`},
            {name: 'USB CONFIG - CHARGE ONLY',   desc: 'Behavior When Device Connected to a Computer',      icon: `../${themeName}/icons/App/usb.png`},
        ]

        // mark current list item
        const currentApp = ref('SYNCTHING')
        const currentAppIndex = ref(0)

        function listItemClicked(tabName, index){
            currentApp.value = tabName
            currentAppIndex.value = index
        }

        return {
            background: `../${themeName}/skin/background.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,
            appList,
            currentApp,
            currentAppIndex,
            listItemClicked,
        }
    },
    template: `
        <div class="screen screen-app-list">
            <PartHeader title="Apps"/>
            <img class="line-h" :src="line_h" alt="line-h"/>
            <img class="background" :src="background" alt="bg"/>
            
            <div class="menu-list">
                <MenuListItemLarge
                    @click="listItemClicked(item.name, index)"
                    v-for="(item, index) in appList" :key="item.name"
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
