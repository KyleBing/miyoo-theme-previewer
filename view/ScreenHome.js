import { ref, onMounted } from 'vue'

import PartHeader from './PartHeader.js'
import PartFooter from './PartFooter.js'

export default {
    components: {
        PartHeader,
        PartFooter
    },
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

        const dot_n = `../${themeName}/skin/dot-n.png`
        const dot_a = `../${themeName}/skin/dot-a.png`

        const mainMenuList = [
            {name: 'Recent', f: ic_recent_f, n: ic_recent_n},
            {name: 'Favorite', f: ic_favorite_f, n: ic_favorite_n},
            {name: 'Games', f: ic_game_f, n: ic_game_n},
            {name: 'Expert', f: ic_retroarch_f, n: ic_retroarch_n},
            {name: 'Apps', f: ic_app_f, n: ic_app_n},
            {name: 'Settings', f: ic_setting_f, n: ic_setting_n},
        ]

        const currentMenu = ref('Recent')
        const currentMenuIndex = ref(0)

        function menuClicked(tabName, index){
            currentMenu.value = tabName
            currentMenuIndex.value = index
        }

        return {
            background: `../${themeName}/skin/background.png`,
            tips_bar_bg: `../${themeName}/skin/tips-bar-bg.png`,
            btn_a: `../${themeName}/skin/icon-A-54.png`,
            btn_b: `../${themeName}/skin/icon-B-54.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,

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
            <PartHeader/>
            
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
            
            <PartFooter/>
            
        </div>
`
}
