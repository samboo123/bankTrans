Vue.component('compDialog',{
    data:function(){
        return {           
            isShow:false,
            index:null,
            list:[]
        }
    },
    template:`
    <transition name="fade">
        <div class="mark" v-show="isShow">
            <div class="content">
                <div class="title">转账记录</div>
                <ul class="all">
                    <li v-for="(item,i) in list"  @click="check(i)" :class="{active:index==i}">
                    {{item.name}}<br>{{item.number}}
                    </li>      
                </ul>
                <div class="btns">
                    <span class="no" @click="close">取消</span><span class="yes" @click="close">确定</span>
                </div>
            </div>      
        </div>
    </transition>
    `,
    methods:{
        close:function(){
            this.isShow = false;
        },
        check:function(i){
            this.index = i;
        }
    },
    beforeCreate(){
        this.$http.get('./service/data.json').then((res)=>{
            this.list=res.data;
            this.isShow = true;
        })
    }
})