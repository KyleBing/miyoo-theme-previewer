export default {
    props: {
        themeName: { // THEME NAME
            type: String,
            default: 'Cosy by KyleBing'
        },
        icon: '',
        title: '',
        isSelected: false,
    },
    setup(props) {
        return {
            bg_game_item_f: `../${props.themeName}/skin/bg-game-item-f.png`,
            bg_game_item_n: `../${props.themeName}/skin/bg-game-item-n.png`,
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
