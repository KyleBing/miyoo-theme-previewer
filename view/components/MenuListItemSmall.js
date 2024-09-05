import {onMounted } from 'vue'

export default {
    props: {
        themeName: '',
        icon: '',
        title: '',
        subtitle: '',
        isSelected: false,
    },
    setup() {
        onMounted(()=> {

        })
        const themeName = 'Cosy by KyleBing'

        return {
            line_h: `../${themeName}/skin/div-line-h.png`,
            bg_list_s: `../${themeName}/skin/bg-list-s.png`,
        }
    },
    template: `
<div :class="['menu-list-item-small', {active: isSelected}]">
    <div class="icon">
        <img :src="icon" :alt="icon">
    </div>
    <div class="title-wrapper">
        <div class="title">{{title}}</div>
        <div class="subtitle">{{subtitle}}</div>
    </div>
    <img v-if="isSelected" :src="bg_list_s" alt="bg-selected" class="bg-selected">
    <img class="line-h" :src="line_h" alt="line-h"/>
</div>
`,
}
