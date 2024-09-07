import {onImgError} from "../util.js";

export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        isSelected: {
            type: Boolean,
            default: false
        },
        themeName: { // THEME NAME
            type: String,
            default: 'Cosy by KyleBing'
        },
    },
    setup(props) {
        return {
            line_h: `${props.themeName}/skin/div-line-h.png`,
            bg_list_l: `${props.themeName}/skin/bg-list-l.png`,
            onImgError
        }
    },
    template: `
<div :class="['menu-list-item-large', {active: isSelected}]">
    <div class="icon">
        <img :src="icon" alt="icon" @error="onImgError">
    </div>
    <div class="title-wrapper">
        <div class="title">{{title}}</div>
        <div class="subtitle">{{subtitle}}</div>
    </div>
    <img v-if="isSelected" :src="bg_list_l" alt="bg-selected" class="bg-selected">
    <img class="line-h" :src="line_h" alt="line-h"/>
</div>
`,
}
