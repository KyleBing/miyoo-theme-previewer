import { ref, onMounted } from 'vue'
import theme_list from "./CONST_THEME_LIST.js";
import ScreenHome from "./ScreenHome.js";
import ScreenAppList from "./ScreenAppList.js";
import ScreenSettingList from "./ScreenSettingList.js";
import ScreenGameConsoleList from "./ScreenGameConsoleList.js";
import ScreenKeyMap from "./ScreenKeyMap.js";
import ScreenKeyTest from "./ScreenKeyTest.js";

export default {
    components: {
        ScreenHome,
        ScreenAppList,
        ScreenSettingList,
        ScreenGameConsoleList,
        ScreenKeyMap,
        ScreenKeyTest
    },
    setup() {
        const themeList = ref([])
        onMounted(()=> {

            // generate theme list data
            themeList.value = theme_list.map(item => {
                if (item.indexOf(' by ') > 0) {
                    let temparray = item.split(' by ')
                    return {
                        title: temparray[0],
                        img: `../${item}/preview.png`,
                        author: temparray[1]
                    }
                } else {
                    return {
                        title: item,
                        img: `../${item}/preview.png`,
                        author: ''
                    }
                }
            })
        })
        const screenList = [
            'ScreenHome',
            'ScreenAppList',
            'ScreenSettingList',
            'ScreenGameConsoleList',
            'ScreenKeyMap',
            'ScreenKeyTest',
        ]

        const currentScreen = ref('ScreenHome')

        function switchToScreen(screenName){
            currentScreen.value = screenName
        }

        return {
            themeList,
            model: 'a30',  // mini a30
            themeName: 'Cosy by KyleBing',
            screenList,
            currentScreen,

            switchToScreen
        }
    },
    template: `
    <div class="home">
<!--        <div class="preview-list">-->
<!--            <div class="preview-list-item" v-for="(item, index) in themeList" :key="index">-->
<!--                <div class="preview-img-wrapper">-->
<!--                    <img :src="item.img" :alt="item.title">-->
<!--                </div>-->
<!--                <div class="preview-title">{{item.title}}</div>-->
<!--            </div>-->
<!--        </div>-->
        
        <div class="preview-container">
            <div class="screen-wrapper">
                <component :is="currentScreen"/>
            </div>
            
            <div class="screen-switcher">
                <div class="screen-list">
                    <div class="screen-list-item" 
                        @click="switchToScreen(item)"
                        v-for="(item, index) in screenList" :key="index">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
    
`
}
