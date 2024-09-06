import { ref } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import GameConsoleItem from './components/GameConsoleItem.js'
import consoleList from './CONST_GAME_CONSOLE_LIST.js'

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
        GameConsoleItem
    },
    setup(props) {

        // generate console list
        const appList = consoleList.map(item => {
            return {
                name: item.toUpperCase(),
                icon: `../${props.themeName}/icons/${item}.png`,
                iconSelected: `../${props.themeName}/icons/sel/${item}.png`
            }
        })

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
            appList,
            currentApp,
            currentAppIndex,
            listItemClicked,
            props
        }
    },
    template: `
        <div class="screen screen-game-console-list">
            <PartHeader title="Consoles" :themeName="props.themeName"/>
            <img class="background" :src="background" alt="bg"/>
            
            <div class="game-console-list-wrapper">
                <div class="game-console-list">
                    <GameConsoleItem
                        :themeName="props.themeName"
                        @click="listItemClicked(item.name, index)"
                        v-for="(item, index) in appList" :key="item.name"
                        :icon="item.icon"
                        :iconSelected="item.iconSelected"
                        :title="item.name"
                        :isSelected="currentAppIndex === index"
                    />
                </div>
            </div>
            
            
            <PartFooter :isShowFooterTitle="isShowFooterTitle" :themeName="themeName"/>
            
        </div>
`
}
