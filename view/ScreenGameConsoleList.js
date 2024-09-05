import { ref } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import GameConsoleItem from './components/GameConsoleItem.js'

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
        GameConsoleItem
    },
    setup(props) {
        const appList = [
            { name: 'SEARCH',  desc: '', icon : `../${props.themeName}/icons/search.png`} ,
            { name: '32X',     desc: '', icon : `../${props.themeName}/icons/32X.png`}    ,
            { name: '7800',    desc: '', icon : `../${props.themeName}/icons/7800.png`}   ,
            { name: 'FC',      desc: '', icon : `../${props.themeName}/icons/fc.png`}     ,
            { name: 'FDS',     desc: '', icon : `../${props.themeName}/icons/fds.png`}    ,
            { name: 'GB',      desc: '', icon : `../${props.themeName}/icons/gb.png`}     ,
            { name: 'GBA',     desc: '', icon : `../${props.themeName}/icons/gba.png`}    ,
            { name: 'GBC',     desc: '', icon : `../${props.themeName}/icons/gbc.png`}    ,
            { name: 'GW',      desc: '', icon : `../${props.themeName}/icons/gw.png`}     ,
            { name: 'MD',      desc: '', icon : `../${props.themeName}/icons/md.png`}     ,
            { name: 'N64',     desc: '', icon : `../${props.themeName}/icons/n64.png`}    ,
            { name: 'PICO',    desc: '', icon : `../${props.themeName}/icons/pico.png`}   ,
            { name: 'POKE',    desc: '', icon : `../${props.themeName}/icons/poke.png`}   ,
            { name: 'PORTS',   desc: '', icon : `../${props.themeName}/icons/ports.png`}  ,
            { name: 'PS',      desc: '', icon : `../${props.themeName}/icons/ps.png`}     ,
            { name: 'SATELLA', desc: '', icon : `../${props.themeName}/icons/satella.png`},
            { name: 'SEGACD',  desc: '', icon : `../${props.themeName}/icons/segacd.png`} ,
            { name: 'SFC',     desc: '', icon : `../${props.themeName}/icons/sfc.png`}    ,
            { name: 'SGB',     desc: '', icon : `../${props.themeName}/icons/sgb.png`}    ,
            { name: 'SUFAMI',  desc: '', icon : `../${props.themeName}/icons/sufami.png`} ,
            { name: 'TIC',     desc: '', icon : `../${props.themeName}/icons/tic.png`}    ,
            { name: 'WS',      desc: '', icon : `../${props.themeName}/icons/ws.png`}     ,
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
            <img class="line-h" :src="line_h" alt="line-h"/>
            <img class="background" :src="background" alt="bg"/>
            
            <div class="game-console-list-wrapper">
                <div class="game-console-list">
                    <GameConsoleItem
                        :themeName="props.themeName"
                        @click="listItemClicked(item.name, index)"
                        v-for="(item, index) in appList" :key="item.name"
                        :icon="item.icon"
                        :title="item.name"
                        :isSelected="currentAppIndex === index"
                    />
                </div>
            </div>
            
            
            <PartFooter :themeName="props.themeName"/>
            
        </div>
`
}
