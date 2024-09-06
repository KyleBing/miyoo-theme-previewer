import { ref } from 'vue'

export default {
    props: {
        themeName: { // THEME NAME
            type: String,
            default: 'Cosy by KyleBing'
        },
        isShowFooterTitle: {
            type: Boolean,
            default: true
        },
    },
    setup(props) {
        const currentMenu = ref('Recent')
        const currentMenuIndex = ref(0)

        function menuClicked(tabName, index){
            currentMenu.value = tabName
            currentMenuIndex.value = index
        }

        return {
            tips_bar_bg: `../${props.themeName}/skin/tips-bar-bg.png`,
            btn_a: `../${props.themeName}/skin/icon-A-54.png`,
            btn_b: `../${props.themeName}/skin/icon-B-54.png`,
            line_h: `../${props.themeName}/skin/div-line-h.png`,
        }
    },
    template: `
        <div class="footer">
            <img class="bg" :src="tips_bar_bg" alt="">
            <div class="btn-list">
                <div class="btn-list-item">
                    <img class="icon" :src="btn_a" alt="A">
                    <div v-if="isShowFooterTitle" class="btn-title">SELECT</div>
                </div>
                <div class="btn-list-item">
                    <img class="icon" :src="btn_b" alt="B">
                    <div v-if="isShowFooterTitle" class="btn-title">BACK</div>
                </div>
            </div>
        </div>
`
}
