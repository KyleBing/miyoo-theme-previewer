import { ref, onMounted } from 'vue'

export default {
    props: {
        isShowLogo: false,
        title: ''
    },
    setup() {
        onMounted(()=> {

        })

        const themeName = 'Cosy by KyleBing'
        // const themeName = '2021 Stock by Miyoo'

        const power_0 = encodeURIComponent(`../${themeName}/skin/power-0%-icon.png`)
        const power_20 = encodeURIComponent(`../${themeName}/skin/power-20%-icon.png`)
        const power_50 = encodeURIComponent(`../${themeName}/skin/power-50%-icon.png`)
        const power_80 = encodeURIComponent(`../${themeName}/skin/power-80%-icon.png`)
        const power_full = encodeURIComponent(`../${themeName}/skin/power-full-icon.png`)

        const icon_wifi_signal_01 = `../${themeName}/skin/icon-wifi-signal-01.png`
        const icon_wifi_signal_02 = `../${themeName}/skin/icon-wifi-signal-02.png`
        const icon_wifi_signal_03 = `../${themeName}/skin/icon-wifi-signal-03.png`
        const icon_wifi_signal_04 = `../${themeName}/skin/icon-wifi-signal-04.png`

        const logo = `../${themeName}/skin/miyoo-topbar.png`

        return {
            logo,
            bg_title: `../${themeName}/skin/bg-title.png`,
            line_h: `../${themeName}/skin/div-line-h.png`,


            power_0,
            power_20,
            power_50,
            power_80,
            power_full,

            icon_wifi_signal_01,
            icon_wifi_signal_02,
            icon_wifi_signal_03,
            icon_wifi_signal_04,
        }
    },
    template: `
<div class="header">
    <div class="icon-list">
        <div class="icon-list-item"> <img :src="icon_wifi_signal_03" alt="wifi"> </div>
        <div class="icon-list-item"> <img :src="power_80" alt="power"> </div>
    </div>
    <div class="title" v-if="title">{{title}}</div>
    <div class="logo" v-if="isShowLogo"><img :src="logo" alt="logo"></div>
    <img class="bg-title" :src="bg_title" alt="bg">
    <img class="line-h" :src="line_h" alt="line-h"/>
</div>
`
}
