         var app = new Vue({
                    el: "#app", data() {
                        return {
                            password: localStorage.getItem("savedPassword") || "", correctPassword: "TipTipFree88", isPasswordCorrect: !1,
                            linkToCopy: 'https://3Link.Co/EASq3v7LXp',
                            maxAttempts: 99999993,
                            currentAttempt: 0,
                            ifshow: !0,
                            checked: !1,
                            radio: '1',
                            activeSelect: '',
                            selectOption: [{
                                value: '0%', label: '0%'
                            }, {
                                value: '50%', label: '50%'
                            }, {
                                value: '100%', label: '100%'
                            }],
                            input: "",
                            showOption1: !1,
                            showOption: !1,
                            showOption2: !1,
                            showOption3: !1,
                            showOption4: !1,
                            showOption5: !1,
                            showOption6: !1,
                            showOption7: !1,
                            showOption8: !1,

                            tabValue: "one",
                        }}, mounted() {
                        this.setRect(360, 320); var sWidth = window.screen.width; var sHeight = window.screen.height; if (window.screen.availWidth > window.screen.availHeight) {
                            sWidth = window.screen.height; sHeight = window.screen.width
                        }
                        setWindowRect(0, 0, sWidth, sHeight); setButtonAction(function() {
                            var menu = document.querySelector("#app"); if (menu.style.display == 'none') {
                                menu.style.display = 'block'; setWindowTouch(!0)} else {
                                menu.style.display = 'none'; setWindowTouch(!1)}})}, methods: {
                        setRect(w,
                            h,
                            x=-1,
                            y=-1) {
                            var boxW = w; var boxH = h; var ayMenu = this.$refs.menuMain; ayMenu.style.width = `${boxW}px`; ayMenu.style.height = `${boxH}px`; if (x==-1)ayMenu.style.left = `calc(50% - ${boxW / 2}px)`; if (y==-1)ayMenu.style.top = `calc(50% - ${boxH / 2}px)`
                        },
                        titleTouchStart(event) {
                            this.touchStartX = parseInt(event.touches[0].clientX); this.touchStartY = parseInt(event.touches[0].clientY); var ayMenu = this.$refs.menuMain; this.menuLastX = ayMenu.offsetLeft; this.menuLastY = ayMenu.offsetTop
                        },
                        titleTouchMove(event) {
                            event.preventDefault(); var distanceX = event.touches[0].clientX-this.touchStartX; var distanceY = event.touches[0].clientY-this.touchStartY; var ayMenu = this.$refs.menuMain; ayMenu.style.left = this.menuLastX+distanceX+"px"; ayMenu.style.top = this.menuLastY+distanceY+"px"
                        },
                        checkPassword() {
                            if (this.password === this.correctPassword) {
                                this.isPasswordCorrect=!0; localStorage.setItem("savedPassword", this.password); this.password = ""
                            } else {
                                alert("Bạn đã nhập sai pass hoặc pass đã được thay đổi, Hãy bấm get key để lấy Pass mới!"); this.currentAttempt++
                            }},
                        copyLink() {
                            var tempInput = document.createElement("input"); tempInput.value = this.linkToCopy; document.body.appendChild(tempInput); tempInput.select(); document.execCommand("copy"); document.body.removeChild(tempInput); alert('Link đã được sao chép, Dán qua Safari vượt để lấy Pass !')},
                        changeTab(v) {
                            this.tabValue = v
                        },
                        closeimgui() {
                            var menu = document.querySelector("#app"); menu.style.display = 'none'
                        }}});
