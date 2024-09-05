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
        isShowSwitch: {
            type: Boolean,
            default: false
        },
        isSwitchOn: {
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
            line_h: `../${props.themeName}/skin/div-line-h.png`,
            bg_list_s: `../${props.themeName}/skin/bg-list-s.png`,
            switch_off: `../${props.themeName}/skin/extra/toggle-off.png`,
            switch_on: `../${props.themeName}/skin/extra/toggle-on.png`,
            props
        }
    },
    template: `
<div :class="['menu-list-item-small', {active: isSelected}]">
    <div class="icon">
        <img :src="props.icon" alt="icon">
    </div>
    
    <div class="content">
        <div class="title">{{props.title}}</div>
        <div class="switch" v-if="props.isShowSwitch">
            <img v-show="props.isSwitchOn" :src="switch_on" alt="switch on">
            <img v-show="!props.isSwitchOn" :src="switch_off" alt="switch off">
        </div>
    </div>
    
    <img v-if="isSelected" :src="bg_list_s" alt="bg-selected" class="bg-selected">
    <img class="line-h" :src="line_h" alt="line-h"/>
</div>
`,
}
