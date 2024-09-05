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
            { name: 'SEARCH',  icon : `../${props.themeName}/icons/search.png`, iconSelected : `../${props.themeName}/icons/sel/search.png`} ,
            { name: '32X',     icon : `../${props.themeName}/icons/32X.png`, iconSelected : `../${props.themeName}/icons/sel/32X.png`}    ,
            { name: '7800',    icon : `../${props.themeName}/icons/7800.png`, iconSelected : `../${props.themeName}/icons/sel/7800.png`}   ,
            { name: 'FC',      icon : `../${props.themeName}/icons/fc.png`, iconSelected : `../${props.themeName}/icons/sel/fc.png`}     ,
            { name: 'FDS',     icon : `../${props.themeName}/icons/fds.png`, iconSelected : `../${props.themeName}/icons/sel/fds.png`}    ,
            { name: 'GB',      icon : `../${props.themeName}/icons/gb.png`, iconSelected : `../${props.themeName}/icons/sel/gb.png`}     ,
            { name: 'GBA',     icon : `../${props.themeName}/icons/gba.png`, iconSelected : `../${props.themeName}/icons/sel/gba.png`}    ,
            { name: 'GBC',     icon : `../${props.themeName}/icons/gbc.png`, iconSelected : `../${props.themeName}/icons/sel/gbc.png`}    ,
            { name: 'GW',      icon : `../${props.themeName}/icons/gw.png`, iconSelected : `../${props.themeName}/icons/sel/gw.png`}     ,
            { name: 'MD',      icon : `../${props.themeName}/icons/md.png`, iconSelected : `../${props.themeName}/icons/sel/md.png`}     ,
            { name: 'N64',     icon : `../${props.themeName}/icons/n64.png`, iconSelected : `../${props.themeName}/icons/sel/n64.png`}    ,
            { name: 'PICO',    icon : `../${props.themeName}/icons/pico.png`, iconSelected : `../${props.themeName}/icons/sel/pico.png`}   ,
            { name: 'POKE',    icon : `../${props.themeName}/icons/poke.png`, iconSelected : `../${props.themeName}/icons/sel/poke.png`}   ,
            { name: 'PORTS',   icon : `../${props.themeName}/icons/ports.png`, iconSelected : `../${props.themeName}/icons/sel/ports.png`}  ,
            { name: 'PS',      icon : `../${props.themeName}/icons/ps.png`, iconSelected : `../${props.themeName}/icons/sel/ps.png`}     ,
            { name: 'SATELLA', icon : `../${props.themeName}/icons/satella.png`, iconSelected : `../${props.themeName}/icons/sel/satella.png`},
            { name: 'SEGACD',  icon : `../${props.themeName}/icons/segacd.png`, iconSelected : `../${props.themeName}/icons/sel/segacd.png`} ,
            { name: 'SFC',     icon : `../${props.themeName}/icons/sfc.png`, iconSelected : `../${props.themeName}/icons/sel/sfc.png`}    ,
            { name: 'SGB',     icon : `../${props.themeName}/icons/sgb.png`, iconSelected : `../${props.themeName}/icons/sel/sgb.png`}    ,
            { name: 'SUFAMI',  icon : `../${props.themeName}/icons/sufami.png`, iconSelected : `../${props.themeName}/icons/sel/sufami.png`} ,
            { name: 'TIC',     icon : `../${props.themeName}/icons/tic.png`, iconSelected : `../${props.themeName}/icons/sel/tic.png`}    ,
            { name: 'WS',      icon : `../${props.themeName}/icons/ws.png`, iconSelected : `../${props.themeName}/icons/sel/ws.png`}     ,
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
            
            
            <PartFooter :themeName="props.themeName"/>
            
        </div>
`
}
