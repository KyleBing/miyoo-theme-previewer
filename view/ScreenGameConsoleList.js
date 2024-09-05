import { ref, onMounted } from 'vue'

import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import GameConsoleItem from './components/GameConsoleItem.js'

export default {

    components: {
        PartHeader,
        PartFooter,
        GameConsoleItem
    },
    setup() {
        onMounted(()=> {

        })

        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        const appList = [
            { name: 'SEARCH',  desc: '', icon : `../${themeName}/icons/search.png`} ,
            { name: '32X',     desc: '', icon : `../${themeName}/icons/32X.png`}    ,
            { name: '7800',    desc: '', icon : `../${themeName}/icons/7800.png`}   ,
            { name: 'FC',      desc: '', icon : `../${themeName}/icons/fc.png`}     ,
            { name: 'FDS',     desc: '', icon : `../${themeName}/icons/fds.png`}    ,
            { name: 'GB',      desc: '', icon : `../${themeName}/icons/gb.png`}     ,
            { name: 'GBA',     desc: '', icon : `../${themeName}/icons/gba.png`}    ,
            { name: 'GBC',     desc: '', icon : `../${themeName}/icons/gbc.png`}    ,
            { name: 'GW',      desc: '', icon : `../${themeName}/icons/gw.png`}     ,
            { name: 'MD',      desc: '', icon : `../${themeName}/icons/md.png`}     ,
            { name: 'N64',     desc: '', icon : `../${themeName}/icons/n64.png`}    ,
            { name: 'PICO',    desc: '', icon : `../${themeName}/icons/pico.png`}   ,
            { name: 'POKE',    desc: '', icon : `../${themeName}/icons/poke.png`}   ,
            { name: 'PORTS',   desc: '', icon : `../${themeName}/icons/ports.png`}  ,
            { name: 'PS',      desc: '', icon : `../${themeName}/icons/ps.png`}     ,
            { name: 'SATELLA', desc: '', icon : `../${themeName}/icons/satella.png`},
            { name: 'SEGACD',  desc: '', icon : `../${themeName}/icons/segacd.png`} ,
            { name: 'SFC',     desc: '', icon : `../${themeName}/icons/sfc.png`}    ,
            { name: 'SGB',     desc: '', icon : `../${themeName}/icons/sgb.png`}    ,
            { name: 'SUFAMI',  desc: '', icon : `../${themeName}/icons/sufami.png`} ,
            { name: 'TIC',     desc: '', icon : `../${themeName}/icons/tic.png`}    ,
            { name: 'WS',      desc: '', icon : `../${themeName}/icons/ws.png`}     ,
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
        <div class="screen screen-game-console-list">
            <PartHeader title="Consoles"/>
            <img class="line-h" :src="line_h" alt="line-h"/>
            <img class="background" :src="background" alt="bg"/>
            
            <div class="game-console-list-wrapper">
                <div class="game-console-list">
                    <GameConsoleItem
                        @click="listItemClicked(item.name, index)"
                        v-for="(item, index) in appList" :key="item.name"
                        :icon="item.icon"
                        :title="item.name"
                        :isSelected="currentAppIndex === index"
                    />
                </div>
            </div>
            
            
            <PartFooter/>
            
        </div>
`
}
