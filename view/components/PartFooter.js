import { ref, onMounted } from 'vue'

export default {
    setup() {
        onMounted(()=> {

        })

        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        const currentMenu = ref('Recent')
        const currentMenuIndex = ref(0)

        function menuClicked(tabName, index){
            currentMenu.value = tabName
            currentMenuIndex.value = index
        }

        return {
            tips_bar_bg: `../${themeName}/skin/tips-bar-bg.png`,
            btn_a: `../${themeName}/skin/icon-A-54.png`,
            btn_b: `../${themeName}/skin/icon-B-54.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,
        }
    },
    template: `
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
`
}
