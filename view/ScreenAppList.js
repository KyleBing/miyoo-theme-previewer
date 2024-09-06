import { ref } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import MenuListItemLarge from './components/MenuListItemLarge.js'

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
        MenuListItemLarge
    },
    setup(props) {

        const appListOnion = [
            {name: 'Package Manager' ,  desc: 'Add or remove systems and apps' , icon: `../${props.themeName}/icons/App/untitled.png`} ,
            {name: 'LogoTweak' ,        desc: 'Change boot logo' ,               icon: `../${props.themeName}/icons/App/logotweak.png`} ,
            {name: 'Search' ,           desc: 'Search game library' ,            icon: `../${props.themeName}/icons/App/search.png`} ,
            {name: 'Activity Tracker' , desc: 'Track your play activity' ,       icon: `../${props.themeName}/icons/App/activity.png`} ,
            {name: 'RetroArch' ,        desc: 'Advanced emulator settings' ,     icon: `../${props.themeName}/icons/App/retroarch.png`} ,
            {name: 'Expert' ,           desc: 'Expert tab shortcut' ,            icon: `../${props.themeName}/icons/App/expert.png`} ,
            {name: 'Themes' ,           desc: 'Change system theme' ,            icon: `../${props.themeName}/icons/App/themes.png`} ,
            {name: 'Tweaks' ,           desc: 'System tweaks and tools' ,        icon: `../${props.themeName}/icons/App/tweaks.png`} ,
            {name: 'Battery Monitor' ,  desc: 'Monitor your battery usage' ,     icon: `../${props.themeName}/icons/App/battery_monitor.png`} ,
            {name: 'Guest Mode [OFF]' , desc: 'Activate the guest profile' ,     icon: `../${props.themeName}/icons/App/guest_off.png`} ,
            {name: 'Guest Mode [ON]' ,  desc: 'Activate the guest profile' ,     icon: `../${props.themeName}/icons/App/guest_on.png`} ,
            {name: 'Terminal' ,         desc: 'st - Simple Terminal' ,           icon: `../${props.themeName}/icons/App/terminal.png`} ,
        ]

        const appListSpruce = [
            {name: 'SYNCTHING',                  desc: 'Synchronize your files',                            icon: `../${props.themeName}/icons/App/syncthing.png`},
            {name: 'BOOT LOGO',                  desc: 'Swap the Boot Logo at Start Up',                    icon: `../${props.themeName}/icons/App/bootlogo.png`},
            {name: 'ICON FRESH',                 desc: 'Apply Icons From the Current Theme',                icon: `../${props.themeName}/icons/App/iconfresh.png`},
            {name: 'MIYOO GAMELIST',             desc: 'Generate miyoogamelist.xml',                        icon: `../${props.themeName}/icons/App/gamelist.png`},
            {name: 'FILE MANAGEMENT',            desc: 'View and Move Files On Your SD Card',               icon: `../${props.themeName}/icons/App/file.png`},
            {name: 'PICO-8',                     desc: 'Splore - Play and Explore Games',                   icon: `../${props.themeName}/icons/App/pico8.png`},
            {name: 'EMU FRESH',                  desc: 'Refresh Roms & Displayed Emulators',                icon: `../${props.themeName}/icons/App/emufresh.png`},
            {name: 'BOXART SCRAPER',             desc: 'Scrape Game Boxart',                                icon: `../${props.themeName}/icons/App/scraper.png`},
            {name: 'RTC',                        desc: 'Set the Real Time Clock',                           icon: `../${props.themeName}/icons/App/rtc.png`},
            {name: 'RECENT - OFF',               desc: 'Turn on/off Recents',                               icon: `../${props.themeName}/icons/App/recents.png`},
            {name: 'WIFI FILE TRANSFER - ON',    desc: 'Upload and Manage your Files Wirelessly',           icon: `../${props.themeName}/icons/App/sftpgo.png`},
            {name: 'RETROARCH',                  desc: 'Core and Game Configuration',                       icon: `../${props.themeName}/icons/App/retroarch.png`},
            {name: 'RETROARCH EXPERT MODE - ON', desc: 'Users Hotkeys & Doesn\'t have In-Game Menu',        icon: `../${props.themeName}/icons/App/retroexpert.png`},
            {name: 'LED',                        desc: 'Config the LED on device',                          icon: `../${props.themeName}/icons/App/led.png`},
            {name: 'RANDOM GAME - OFF',          desc: 'Play Random Game from Lib',                         icon: `../${props.themeName}/icons/App/random.png`},
            {name: 'USB CONFIG - CHARGE ONLY',   desc: 'Behavior When Device Connected to a Computer',      icon: `../${props.themeName}/icons/App/usb.png`},
        ]

        // mark current list item
        const currentApp = ref('SYNCTHING')
        const currentAppIndex = ref(0)

        function listItemClicked(tabName, index){
            currentApp.value = tabName
            currentAppIndex.value = index
        }

        return {
            background: `../${props.themeName}/skin/background.png`,
            line_h: `../${props.themeName}/skin/div-line-h.png`,
            appList: appListOnion.concat(appListSpruce),
            currentApp,
            currentAppIndex,
            listItemClicked,
            props
        }
    },
    template: `
        <div class="screen screen-app-list">
            <PartHeader title="Apps" :themeName="props.themeName"/>
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
            
            <PartFooter :isShowFooterTitle="isShowFooterTitle" :themeName="themeName"/>
            
        </div>
`
}
