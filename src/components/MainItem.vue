<template>
    <div>
        <main>
            父層給的數字:{{count}}
            <button @click="motify">
                改父層的數字
            </button>
            {{info}}
            <button @click="add">+</button>
            {{num}}
            <button @click="reduce">-</button>
            {{info}}
        </main> 
    </div>
</template>
<script>
    export default{
        props:["info","count"],
        data(){
            return {
                num:0
            }
        },
        methods:{
            add(){
                this.num += 1 
            },
            reduce(){
                this.num -= 1 
            },
            motify(){
                this.$emit('numadd',this.num)
            }
        }
    }
</script>