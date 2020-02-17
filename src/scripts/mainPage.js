export default {
    data () {
        return {
            dict: {
                'hello':'привет',
                'kitty': 'китти',
                'how':'как',
                'are': 'глагол to be',
                'you': 'ты',
                'and':'и',
                'bob': 'боб',
            },
            word: '',

        } 
    },
    methods: {
        prepareText: function() {
            let originText = this.$refs.page.innerText
            let reg = new RegExp( /(\S*)/, "g")
            let text = originText.match(reg)
            text.forEach( item => {
                if (item != '') {
                    originText = originText.replace(item, `<span>${item}</span>`)
                }
            })
            this.$refs.page.innerHTML = originText
        },
        getElement: function(event) {
            if (event.target.tagName == "SPAN") {
                let word = event.target.innerText
                this.word = word.replace(/(\?|!|;|\.|,)/g,'')
                this.translateWord()
                this.showClue(event.layerX,event.layerY)
            } 
        },
        translateWord: function() {
            this.word = this.dict[this.word.toLowerCase()]

        },
        showClue: function(x,y) {
            let clue = this.$refs.clue
            if (clue.classList.contains('clue-show') && clue.innerText == this.word) {
                this.hideClue()
            } else {
                clue.innerText = this.word
                clue.classList.add('clue-show')
                clue.style = `top:${y-50}px;left:${x}px`
            }

        },
        hideClue: function() {
            this.$refs.clue.classList.remove('clue-show') 
        }
    },
    mounted() {
        this.prepareText()
    } 
}