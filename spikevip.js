var app = new Vue({
    el: "#app",
    data() {
        return {
           password: localStorage.getItem("savedPassword") || "", // Lấy mật khẩu từ localStorage nếu có
          correctPassword: "Vip6666", // Đặt mật khẩu của bạn ở đây
         isPasswordCorrect: false,
         linkToCopy: 'https://t.me/gamemodios',// Thêm thuộc tính để kiểm tra xem mật khẩu có đúng không
          maxAttempts: 99999993, // Số lần tối đa được phép nhập mật khẩu
         currentAttempt: 0,
            ifshow: true,
            checked: false,
            radio: '1',
            activeSelect: '',
            selectOption: [{
                value: '0%', //实际内容
                label: '0%'//显示文案
            }, {
                value: '50%',
                label: '50%'
            }, {
                value: '100%',
                label: '100%'
            }],
            input: "",
            showOption1: false,
            showOption2: false,

            showOption: false,
            tabValue: "one",
        }
    },
    mounted() {
        this.setRect(360, 320);

        //竖屏
        var sWidth = window.screen.width; //屏幕宽
        var sHeight = window.screen.height; //屏幕高

        //全屏显示
        if (window.screen.availWidth > window.screen.availHeight) {
            //横屏，宽高置换
            sWidth = window.screen.height; //屏幕宽
            sHeight = window.screen.width; //屏幕高
        }
        setWindowRect(0, 0, sWidth, sHeight);

        setButtonAction(function () {
            var menu = document.querySelector("#app");
            if (menu.style.display == 'none') {
                menu.style.display = 'block';
                //显示菜单之后, 设置触控不可穿透悬浮窗口
                setWindowTouch(true);
            } else {
                menu.style.display = 'none';
                //隐藏菜单之后, 设置触控穿透悬浮窗口
                setWindowTouch(false);
            }
        });
    },
    methods: {
        setRect(w,
            h,
            x = -1,
            y = -1) {
            var boxW = w;
            var boxH = h;

            var ayMenu = this.$refs.menuMain;
            ayMenu.style.width = `${boxW}px`;
            ayMenu.style.height = `${boxH}px`;
            if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
            if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;
        },
        titleTouchStart(event) {
            this.touchStartX = parseInt(event.touches[0].clientX);
            this.touchStartY = parseInt(event.touches[0].clientY);

            var ayMenu = this.$refs.menuMain;
            this.menuLastX = ayMenu.offsetLeft;
            this.menuLastY = ayMenu.offsetTop;
        },
        titleTouchMove(event) {
            event.preventDefault();
            var distanceX = event.touches[0].clientX - this.touchStartX;
            var distanceY = event.touches[0].clientY - this.touchStartY;

            var ayMenu = this.$refs.menuMain;
            ayMenu.style.left = this.menuLastX + distanceX + "px";
            ayMenu.style.top = this.menuLastY + distanceY + "px";
        },
        checkPassword() {
            if (this.password === this.correctPassword) {
                this.isPasswordCorrect = true;
                // Lưu mật khẩu vào localStorage
                localStorage.setItem("savedPassword", this.password);
                // Sau khi mật khẩu đúng, ẩn phần nhập mật khẩu
                this.password = ""; // Xóa giá trị mật khẩu để ngăn việc hiển thị nó lại khi quay lại màn hình
            } else {
                alert("Mật khẩu không đúng!");
                this.currentAttempt++;
            }
        },
        copyLink() {
                var tempInput = document.createElement("input");
                tempInput.value = this.linkToCopy;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                alert('Link đã được sao chép vào clipboard!');
            },
        //切换导航栏
        changeTab(v) {
            this.tabValue = v;
        },
        closeimgui() {
            var menu = document.querySelector("#app");
            menu.style.display = 'none';
        }
    }
});