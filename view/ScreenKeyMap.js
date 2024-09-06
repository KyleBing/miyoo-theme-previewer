import PartHeader from './components/PartHeader.js'
import PartFooter from './components/PartFooter.js'
import MenuListItemSmall from './components/MenuListItemSmall.js'
import {onImgError} from "./util.js";

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
        MenuListItemSmall
    },
    setup(props) {
        return {
            background: `../${props.themeName}/skin/background.png`,
            line_h: `../${props.themeName}/skin/div-line-h.png`,
            keymap: `../${props.themeName}/skin/bg-keysetting.png`,
            keytest: `../${props.themeName}/skin/bg-io-testing.png`,
            keymap_key_bg: `../${props.themeName}/skin/bg-keysetting-f.png`,
            onImgError
        }
    },
    template: `
        <div class="screen screen-keymap">
            <PartHeader title="Key Setting" :themeName="themeName"/>
            
            <img class="background" :src="background" alt="bg"/>
            <img class="keymap" :src="keymap" alt="keymap"/>
            
            <div class="keymap-key" style="left:0; top:65px">
                <div class="key-name">L</div>
                <img :src="keymap_key_bg" alt="keymap-key-bg" @error="onImgError"/>
             </div>
            
            <PartFooter :isShowFooterTitle="isShowFooterTitle" :themeName="themeName"/>
            
        </div>
`
}
