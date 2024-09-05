import { ref } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'

export default {
    props: {
        themeName: { // THEME NAME
            type: String,
            default: 'Cosy by KyleBing'
        },
    },
    components: {
        PartHeader,
        PartFooter
    },
    setup(props) {

        const ic_recent_n    = `../${props.themeName}/skin/ic-recent-n.png`
        const ic_recent_f    = `../${props.themeName}/skin/ic-recent-f.png`
        const ic_retroarch_n = `../${props.themeName}/skin/ic-retroarch-n.png`
        const ic_retroarch_f = `../${props.themeName}/skin/ic-retroarch-f.png`
        const ic_app_n       = `../${props.themeName}/skin/ic-app-n.png`
        const ic_app_f       = `../${props.themeName}/skin/ic-app-f.png`
        const ic_favorite_n  = `../${props.themeName}/skin/ic-favorite-n.png`
        const ic_favorite_f  = `../${props.themeName}/skin/ic-favorite-f.png`
        const ic_game_n      = `../${props.themeName}/skin/ic-game-n.png`
        const ic_game_f      = `../${props.themeName}/skin/ic-game-f.png`
        const ic_setting_n   = `../${props.themeName}/skin/ic-setting-n.png`
        const ic_setting_f   = `../${props.themeName}/skin/ic-setting-f.png`

        const dot_n = `../${props.themeName}/skin/dot-n.png`
        const dot_a = `../${props.themeName}/skin/dot-a.png`

        const mainMenuList = [
            {name: 'Recent'   , f: ic_recent_f    , n: ic_recent_n}    ,
            {name: 'Favorite' , f: ic_favorite_f  , n: ic_favorite_n}  ,
            {name: 'Games'    , f: ic_game_f      , n: ic_game_n}      ,
            {name: 'Expert'   , f: ic_retroarch_f , n: ic_retroarch_n} ,
            {name: 'Apps'     , f: ic_app_f       , n: ic_app_n}       ,
            {name: 'Settings' , f: ic_setting_f   , n: ic_setting_n}   ,
        ]

        // mark current list item
        const currentMenu = ref('Recent')
        const currentMenuIndex = ref(0)

        function listItemClicked(tabName, index){
            currentMenu.value = tabName
            currentMenuIndex.value = index
        }

        return {
            background: `../${props.themeName}/skin/background.png`   ,
            tips_bar_bg: `../${props.themeName}/skin/tips-bar-bg.png` ,
            btn_a: `../${props.themeName}/skin/icon-A-54.png`         ,
            btn_b: `../${props.themeName}/skin/icon-B-54.png`         ,
            line_h: `../${props.themeName}/skin/div-line-h.png`       ,

            dot_n,
            dot_a,

            mainMenuList,
            currentMenu,
            currentMenuIndex,
            listItemClicked,

            props
        }
    },
    template: `
        <div class="screen screen-home">
            <PartHeader :isShowLogo="true" :themeName="props.themeName"/>
            
            <img class="background" :src="background" alt="bg"/>
            
            <div class="main-menu-list">
                <div :class="['main-menu-list-item', {active: currentMenu === item.name}]" 
                    @click="listItemClicked(item.name, menuIndex)"
                    v-for="(item, menuIndex) in mainMenuList" :key="menuIndex"
                >
                    <div class="menu-title">{{item.name}}</div>
                    <div class="img-wrapper">
                        <img v-show="currentMenu === item.name" :src="item.f" :alt="item.name">
                        <img v-show="currentMenu !== item.name" :src="item.n" :alt="item.name">
                    </div>
                </div>
            </div>
            
            <div class="main-menu-indicator-list">
                <div class="main-menu-indicator-list-item" v-for="(item, index) in mainMenuList" :key="index">
                    <img v-show="currentMenuIndex === index" :src="dot_a" alt="dot">
                    <img v-show="currentMenuIndex !== index" :src="dot_n" alt="dot">
                </div>
            </div>
            
            <PartFooter :themeName="props.themeName"/>
            
        </div>
`
}
