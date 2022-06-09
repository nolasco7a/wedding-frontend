<template>
    <div>
        <aside :class="`note-wrap note-${randomClass}`">
            <p>{{ data.comment }}</p>
            <small class="anonymus">~ {{ data.name }} ~</small>
        </aside>
    </div>
</template>
<script>
    export default{
        name: 'Comment',
        props:{
            data:{
                type: Object,
                required: true,
                default: () => ({
                    message: 'Trhis is a note',
                    name: 'Anonymus'
                })
            }
        },
        data() {
            return{
                randomClass: Math.floor(Math.random() * 10)
            }
        },
        /* beforeMount(){
            this.randomClass = Math.floor(Math.random() * 10);
        }, */
    }
</script>