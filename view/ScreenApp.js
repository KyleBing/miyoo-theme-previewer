import { ref, onMounted } from 'vue'

export default {
    setup() {
        onMounted(()=> {

        })

        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        const ic_recent_n = `../${themeName}/skin/ic-recent-n.png`
        const ic_recent_f = `../${themeName}/skin/ic-recent-f.png`
        const ic_retroarch_n = `../${themeName}/skin/ic-retroarch-n.png`
        const ic_retroarch_f = `../${themeName}/skin/ic-retroarch-f.png`
        const ic_app_n = `../${themeName}/skin/ic-app-n.png`
        const ic_app_f = `../${themeName}/skin/ic-app-f.png`
        const ic_favorite_n = `../${themeName}/skin/ic-favorite-n.png`
        const ic_favorite_f = `../${themeName}/skin/ic-favorite-f.png`
        const ic_game_n = `../${themeName}/skin/ic-game-n.png`
        const ic_game_f = `../${themeName}/skin/ic-game-f.png`
        const ic_setting_n = `../${themeName}/skin/ic-setting-n.png`
        const ic_setting_f = `../${themeName}/skin/ic-setting-f.png`

        const power_0 = encodeURIComponent(`../${themeName}/skin/power-0%-icon.png`)
        const power_20 = encodeURIComponent(`../${themeName}/skin/power-20%-icon.png`)
        const power_50 = encodeURIComponent(`../${themeName}/skin/power-50%-icon.png`)
        const power_80 = encodeURIComponent(`../${themeName}/skin/power-80%-icon.png`)
        const power_full = encodeURIComponent(`../${themeName}/skin/power-full-icon.png`)

        const icon_wifi_signal_01 = `../${themeName}/skin/icon-wifi-signal-01.png`
        const icon_wifi_signal_02 = `../${themeName}/skin/icon-wifi-signal-02.png`
        const icon_wifi_signal_03 = `../${themeName}/skin/icon-wifi-signal-03.png`
        const icon_wifi_signal_04 = `../${themeName}/skin/icon-wifi-signal-04.png`

        const logo = `../${themeName}/skin/miyoo-topbar.png`

        const dot_n = `../${themeName}/skin/dot-n.png`
        const dot_a = `../${themeName}/skin/dot-a.png`

        const appList = [
            {name: 'SYNCTHING', desc: 'Synchronize your files', icon: ic_recent_f},
            {name: 'BOOT LOGO', desc: 'Swap the Boot Logo at Start Up', icon: ic_favorite_f},
            {name: 'ICON FRESH', desc: 'Apply Icons From the Current Theme', icon: ic_game_f},
            {name: 'MIYOO GAMELIST', desc: 'Generate miyoogamelist.xml', icon: ic_retroarch_f},
            {name: 'FILE MANAGEMENT', desc: 'View and Move Files On Your SD Card', icon: ic_app_f},
            {name: 'PICO-8', desc: 'Splore - Play and Explore Games', icon: ic_setting_f},
            {name: 'EMU FRESH', desc: 'Refresh Roms & Displayed Emulators', icon: ic_setting_f},
            {name: 'BOXART SCRAPER', desc: 'Scrape Game Boxart', icon: ic_setting_f},
            {name: 'RTC', desc: 'Set the Real Time Clock', icon: ic_setting_f},
            {name: 'RECENT - OFF', desc: 'Turn on/off Recents', icon: ic_setting_f},
            {name: 'WIFI FILE TRANSFER - ON', desc: 'Upload and Manage your Files Wirelessly', icon: ic_setting_f},
            {name: 'RETROARCH', desc: 'Core and Game Configuration', icon: ic_setting_f},
            {name: 'RETROARCH EXPERT MODE - ON', desc: 'Users Hotkeys & Doesn\'t have In-Game Menu', icon: ic_setting_f},
            {name: 'RECENT', desc: 'Turn', icon: ic_setting_f},
        ]

        const currentMenu = ref('Recent')
        const currentMenuIndex = ref(0)

        function menuClicked(tabName, index){
            currentMenu.value = tabName
            currentMenuIndex.value = index
        }

        return {
            logo,
            background: `../${themeName}/skin/background.png`,
            bg_title: `../${themeName}/skin/bg-title.png`,
            tips_bar_bg: `../${themeName}/skin/tips-bar-bg.png`,
            btn_a: `../${themeName}/skin/icon-A-54.png`,
            btn_b: `../${themeName}/skin/icon-B-54.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,

            power_0,
            power_20,
            power_50,
            power_80,
            power_full,

            icon_wifi_signal_01,
            icon_wifi_signal_02,
            icon_wifi_signal_03,
            icon_wifi_signal_04,

            dot_n,
            dot_a,

            mainMenuList,
            currentMenu,
            currentMenuIndex,
            menuClicked,
        }
    },
    template: `
        <div class="screen-home">
            <div class="header">
                <div class="icon-list">
                    <div class="icon-list-item"> <img :src="icon_wifi_signal_03" alt="wifi"> </div>
                    <div class="icon-list-item"> <img :src="power_80" alt="power"> </div>
                </div>
                <div class="logo"><img :src="logo" alt="logo"></div>
                <img class="bg-title" :src="bg_title" alt="bg">
            </div>
            
            <img class="line-h" :src="line_h" alt="line-h"/>
            
            <img class="background" :src="background" alt="bg"/>
            
            <div class="main-menu-list">
                <div :class="['main-menu-list-item', {active: currentMenu === item.name}]" 
                    @click="menuClicked(item.name, menuIndex)"
                    v-for="(item, menuIndex) in mainMenuList" :key="menuIndex"
                >
                    <div class="menu-title">{{item.name}}</div>
                    <img v-show="currentMenu === item.name" :src="item.f" :alt="item.name">
                    <img v-show="currentMenu !== item.name" :src="item.n" :alt="item.name">
                </div>
            </div>
            
            <div class="main-menu-indicator-list">
                <div class="main-menu-indicator-list-item" v-for="(item, index) in mainMenuList" :key="index">
                    <img v-show="currentMenuIndex === index" :src="dot_a" alt="dot">
                    <img v-show="currentMenuIndex !== index" :src="dot_n" alt="dot">
                </div>
            </div>
            
            <div class="footer">
                <img class="bg" :src="tips_bar_bg" alt="">
                <div class="btn-list">
                    <div class="btn-list-item">
                        <img class="icon" :src="btn_a" alt="A">
                        <div class="btn-title">SELECT</div>
                    </div>
                    <div class="btn-list-item">
                        <img class="icon" :src="btn_b" alt="B">
                        <div class="btn-title">BACK</div>
                    </div>
                </div>
            </div>
            
        </div>
`
}
