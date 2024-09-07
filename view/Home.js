import { ref, onMounted, nextTick } from 'vue'
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
        ScreenKeyTest,
    },
    setup() {

        /**
         * THEME CHANGE
         */
        const currentThemeName = ref('Cosy by KyleBing')
        // const currentThemeName = ref('SPRUCE')
        function changeTheme(theme){
            currentThemeName.value = theme.originFolderName
            currentScreen.value = 'ScreenAppList'
            nextTick(()=>{
                currentScreen.value = 'ScreenHome'
            })
        }

        const themeList = ref([])
        onMounted(()=> {
            // generate theme list data
            themeList.value = theme_list.map(item => {
                if (item.indexOf(' by ') > 0) {
                    let temparray = item.split(' by ')
                    return {
                        title: temparray[0],
                        img: `../${item}/preview.png`,
                        author: temparray[1],
                        originFolderName: item
                    }
                } else {
                    return {
                        title: item,
                        img: `../${item}/preview.png`,
                        author: '',
                        originFolderName: item
                    }
                }
            })
        })

        function onPreviewError(event){
            event.target.src = `./img/no_preview.png`
            event.target.removeEventListener('error', onPreviewError);
        }


        /**
         * SCREEN CHANGE
         */
        const currentScreen = ref('ScreenHome')
        function switchToScreen(screenName){
            currentScreen.value = screenName
        }
        const isShowMainMenuTitle = ref(true) // show title
        const isShowFooterTitle = ref(true) // show title
        const isShowConsoleTitle = ref(true) // show console title

        /**
         * SCREEN CHANGE
         */
        const screenList = [
            'ScreenHome',
            'ScreenAppList',
            'ScreenSettingList',
            'ScreenGameConsoleList',
            'ScreenKeyMap',
            'ScreenKeyTest',
        ]


        return {
            themeList,
            screenList,
            model: 'a30',  // mini a30
            currentThemeName,
            currentScreen,

            // Methods
            changeTheme,
            switchToScreen,
            onPreviewError,

            isShowMainMenuTitle,
            isShowFooterTitle,
            isShowConsoleTitle,
        }
    },
    template: `
    <div class="home">
    
        <!-- Theme List   -->
        <div class="preview-list">
            <div :class="['preview-list-item', {active: item.originFolderName === currentThemeName}]"
                    @click="changeTheme(item)"
                    v-for="(item, index) in themeList" :key="index">
                <div class="preview-img-wrapper">
                    <img :src="item.img" :alt="item.title" @error="onPreviewError">
                </div>
                <div class="preview-title">{{item.title}}</div>
            </div>
        </div>
        
        <div class="preview-container">
            <!-- Previewer   -->
            <div class="screen-wrapper">
                <component :is="currentScreen" 
                    :themeName="currentThemeName" 
                    :isShowTitle="isShowMainMenuTitle"
                    :isShowFooterTitle="isShowFooterTitle"
                    :isShowConsoleTitle="isShowConsoleTitle"
                />
            </div>
            
            <!-- Control Panel  -->
            <div class="control-panel">
                <div class="form-container">
                    <div class="form-item">
                        <label for="showMainMenuTitle">
                            <input id="showMainMenuTitle" type="checkbox" v-model="isShowMainMenuTitle"/>
                            Main Menu Title
                        </label>
                    </div>
                    <div class="form-item">
                        <label for="showFooterTitle">
                            <input id="showFooterTitle" type="checkbox" v-model="isShowFooterTitle"/>
                            Footer Title
                        </label>
                    </div>
                    <div class="form-item">
                        <label for="showConsoleTitle">
                            <input id="showConsoleTitle" type="checkbox" v-model="isShowConsoleTitle"/>
                            Console Title
                        </label>
                    </div>
                </div>
            
                <div class="screen-switcher">
                    <div class="screen-list">
                        <div :class="['screen-list-item', {active: item === currentScreen}]" 
                            @click="switchToScreen(item)"
                            v-for="(item, index) in screenList" :key="index">{{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
`
}
