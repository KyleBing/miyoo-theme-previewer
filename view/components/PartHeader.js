import {onImgError} from "../util.js";

export default {
    props: {
        batteryLevel: { // 1-5
            type: Number,
            default: 3
        },
        wifiLevel: { // 1-4
            type: Number,
            default: 3
        },
        volumeLevel: { // 0-20
            type: Number,
            default: 3
        },
        themeName: { // THEME NAME
            type: String,
            default: 'Cosy by KyleBing'
        },
        isShowLogo: {  // logo
            type: Boolean,
            default: false
        },
        title: {  // title
            type: String,
            default: ''
        }
    },
    setup(props) {
        const power_0 = encodeURIComponent(`../${props.themeName}/skin/power-0%-icon.png`)
        const power_20 = encodeURIComponent(`../${props.themeName}/skin/power-20%-icon.png`)
        const power_50 = encodeURIComponent(`../${props.themeName}/skin/power-50%-icon.png`)
        const power_80 = encodeURIComponent(`../${props.themeName}/skin/power-80%-icon.png`)
        const power_full = encodeURIComponent(`../${props.themeName}/skin/power-full-icon.png`)

        const icon_wifi_signal_01 = `../${props.themeName}/skin/icon-wifi-signal-01.png`
        const icon_wifi_signal_02 = `../${props.themeName}/skin/icon-wifi-signal-02.png`
        const icon_wifi_signal_03 = `../${props.themeName}/skin/icon-wifi-signal-03.png`
        const icon_wifi_signal_04 = `../${props.themeName}/skin/icon-wifi-signal-04.png`

        // generate 0-20 volume icon array
        const volumeArray = []
        for(let i=0;i<=20;i++){
            let index = String(i).padStart(2, '00')
            volumeArray.push(`../${props.themeName}/skin/icon-volume-${index}.png`)
        }

        const logo = `../${props.themeName}/skin/miyoo-topbar.png`

        return {
            logo,
            bg_title: `../${props.themeName}/skin/bg-title.png`,
            line_h: `../${props.themeName}/skin/div-line-h.png`,

            batteryArray: [
                power_0,
                power_20,
                power_50,
                power_80,
                power_full,
            ],

            wifiArray: [
                icon_wifi_signal_01,
                icon_wifi_signal_02,
                icon_wifi_signal_03,
                icon_wifi_signal_04,
            ],

            volumeArray,
            onImgError
        }
    },
    template: `
<div class="header">
    <div class="icon-list">
        <div class="icon-list-item"> <img :src="volumeArray[volumeLevel]" alt="volume" @error="onImgError"> </div>
        <div class="icon-list-item"> <img :src="wifiArray[wifiLevel]"  alt="wifi" @error="onImgError"> </div>
        <div class="icon-list-item"> <img :src="batteryArray[batteryLevel]" alt="battery"> </div>
    </div>
    <div class="title" v-if="title">{{title}}</div>
    <div class="logo" v-if="isShowLogo"><img :src="logo" alt="logo" ></div>
    <img class="bg-title" :src="bg_title" alt="bg">
    <img class="line-h" :src="line_h" alt="line-h"/>
</div>
`
}
