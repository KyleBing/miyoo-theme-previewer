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
        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        return {
            background: `../${themeName}/skin/background.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,
            keymap: `../${themeName}/skin/bg-keysetting.png`,
            keytest: `../${themeName}/skin/bg-io-testing.png`,
            keymap_key_bg: `../${themeName}/skin/bg-keysetting-f.png`,
        }
    },
    template: `
        <div class="screen screen-keymap">
            <PartHeader title="Key test"/>
            
            <img class="line-h" :src="line_h" alt="line-h"/>
            <img class="background" :src="background" alt="bg"/>
            <img class="keymap" :src="keytest" alt="keymap"/>
            
            <PartFooter/>
            
        </div>
`
}
