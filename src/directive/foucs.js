import Vue from 'vue'

Vue.directive('foucs',{
    inserted(el){
        el.focus()
    }
})

// export {focus}

Vue.directive('demo',{
    inserted(el){
        if(el){
            el.classList="actives"
        }
    }
})