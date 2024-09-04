import { ref, onMounted } from 'vue'
import theme_list from "./CONST_THEME_LIST.js";
import ScreenHome from "./ScreenHome.js";

export default {
    components: {
        ScreenHome
    },
    setup() {
        const themeList = ref([])
        onMounted(()=> {

            // generate theme list data
            themeList.value =
                theme_list.map(item => {
                    let title, previewImgPath, author = ''
                    if (item.indexOf(' by ') > 0){
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

        return { themeList }
    },
    template: `
    <div class="home">
        <div class="preview-list">
            <div class="preview-list-item" v-for="(item, index) in themeList" :key="index">
                <div class="preview-img-wrapper">
                    <img :src="item.img" :alt="item.title">
                </div>
                <div class="preview-title">{{item.title}}</div>
            </div>
        </div>
        
        <div class="preview-container">
            <ScreenHome/>
        </div>
    </div>
    
`
}
