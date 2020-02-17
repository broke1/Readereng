export default {
    data () {
        return {
            name: "Kitty"
        } 
    },
    methods: {
        showMsg: function() {
            this.name = 'Bob'
        }
    } 
}