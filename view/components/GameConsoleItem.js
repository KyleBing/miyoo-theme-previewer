import {onMounted } from 'vue'

export default {
    props: {
        themeName: '',
        icon: '',
        title: '',
        isSelected: false,
    },
    setup() {
        onMounted(()=> {

        })
        const themeName = 'Cosy by KyleBing'

        return {
            bg_game_item_f: `../${themeName}/skin/bg-game-item-f.png`,
            bg_game_item_n: `../${themeName}/skin/bg-game-item-n.png`,
        }
    },
    template: `
<div :class="['game-console-list-item', {active: isSelected}]">
    <div class="icon">
        <img :src="icon" :alt="icon">
    </div>
    <div class="title">{{title}}</div>
    <img v-show="isSelected" :src="bg_game_item_f" alt="bg-selected" class="bg">
    <img v-show="!isSelected" :src="bg_game_item_n" alt="bg-selected" class="bg">
</div>
`,
}
