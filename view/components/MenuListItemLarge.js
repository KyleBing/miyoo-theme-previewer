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
            bg_list_l: `../${themeName}/skin/bg-list-l.png`,
        }
    },
    template: `
<div :class="['menu-list-item-large', {active: isSelected}]">
    <div class="icon">
        <img :src="icon" alt="title">
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
