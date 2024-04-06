var app = new Vue({
      el: "#app",
      data() {
          return {
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
  
  
var StyleOld = 52479; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModStyle() {
var searchValue = StyleOld;
var replaceValue = Number(prompt("Vui lòng chọn một trong các màu sau:\n  Trắng: 16777215\nXanh dương: 16711680\nXanh lá: 65280\nTím: 8388736\nHồng : 15680245\nCông thức:\nMàu RGB( a,b,c ) \nChỉ số màu = (ax256x256)+(bx256)+c\n \nNhập màu mới", ""));

h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
  alert("Không tìm thấy giá trị cần thay thế.");
  return;
}

for (var i = 0; i < results.length; i++) {
  // Check if the offset ends with '3e8' or 'ab4'
  if (results[i].address.endsWith('3E8') || results[i].address.endsWith('AB4')) {
      h5gg.setValue(results[i].address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
  }
}

alert("Đã thực hiện thay thế ");
StyleOld = replaceValue;

}
  
  
  function RollS() {
      var searchValue = -2079391645; 
      var replaceValue = 2; 
      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount()); // Lấy kết quả từ tìm kiếm
  
      if (results.length > 0) { // Kiểm tra nếu có kết quả được tìm thấy
          h5gg.setValue(results[0].address, replaceValue.toString(), 'I32'); // Thay đổi giá trị tìm được
          alert("Đã bật Auto Roll S");
      } else {
          alert("Lỗi rồi thoát game vô lại đi");
      }
  }
  
  
// Define a shared variable within th
var YongsubValue = -2079391372

function ModNishi() {
var searchValue = YongsubValue;
var replaceValue = -2079391594;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể Nishikawa S+ !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
function ModYamedera() {
var searchValue = YongsubValue;
var replaceValue = -2079388562;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể Yamedera S !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
function ModSohee() {
var searchValue = YongsubValue;
var replaceValue = -2079389760;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể Sohee S !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
function ModOasitv2() {
var searchValue = YongsubValue;
var replaceValue = -2079391644;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể Oasit V2 S !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
function ModIsabel() {
var searchValue = YongsubValue;
var replaceValue = -2079391621;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể Isabel  S !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
function ModNN() {
var searchValue = YongsubValue;
var replaceValue = -2079390745;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể NN S !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
function ModRobert() {
var searchValue = YongsubValue;
var replaceValue = -2079391244;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());
var targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  alert("Đã Có thể Robert S !");
  // Update YongsubValue with the replaceValue
  YongsubValue = replaceValue;
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}
var camCaoValue = -2079391644 ; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModCamCao() {
var searchValue = -2079391644;
var replaceValue = Number(prompt("Nhập số mới dưới  ", ""));

h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

var targetResult = results.find(result => result.address.endsWith("990")); // Tìm kết quả có offset kết thúc bằng 990

if (targetResult) {
  h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi giá trị tìm được
  camCaoValue = replaceValue; // Lưu giá trị đã thay đổi vào biến toàn cục
  alert("Mod Cam Cao thành công");
} else {
  alert(" Lỗi rồi thoát game đi ");
}
}
function RollS() {
var searchValue = -2079391645;
var replaceValue = 2;

h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length > 0) {
  // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
  for (var i = 0; i < results.length; i++) {
      var targetResult = results[i];
      h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
  }
  alert("Đã Có thể Roll S!");
} else {
  alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}

  function rollFree() {
      var searchValue = -2079391704;
      var replaceValue = 0;

      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());

      var targetResult = results.find(result => result.address.endsWith("368")); // Tìm kết quả có offset kết thúc bằng 8F4

      if (targetResult) {
          h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
          alert("Đã Có thể Roll Free!");
      } else {
          alert("Không tìm thấy kết quả phù hợp để thay đổi.");
      }
  }
  function rollFree2() {
      var searchValue = -2079391712;
      var replaceValue = -173178;

      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());

      var targetResult = results.find(result => result.address.endsWith("6A8")); // Tìm kết quả có offset kết thúc bằng 8F4

      if (targetResult) {
          h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
          alert("Đã Có thể Roll Free!");
      } else {
          alert("Không tìm thấy kết quả phù hợp để thay đổi.");
      }
  }
  
  
  function readI32(addr) {
return Number(h5gg.getValue(addr, "I32"));
}

function searchAndReplace(searchValue, replaceValue, valueType, offset) {
h5gg.clearResults();
h5gg.searchNumber(searchValue, valueType, '0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
  alert("Không tìm thấy giá trị cần thay thế.");
  return false;
}

for (var i = 0; i < results.length; i++) {
  if (results[i].address.endsWith(offset)) {
      h5gg.setValue(results[i].address, replaceValue.toString(), valueType);
      return true;
  }
}
return false;
}
// Define a global variable to store the original value

function modHuyHieuXanh() {
var searchValue = -2079391712;
var replaceValue = -20000;
var successStep1 = searchAndReplace(searchValue, replaceValue, 'I32', '6A8');

if (successStep1) {
  alert(" Chờ tý, sắp được bú 🍌 rồi");
}

searchValue = -2079391621;
replaceValue = Number(prompt("Nhập Ball muốn nhận Vô: ", ""));
originalValue = replaceValue; // Store the original value before modification
var successStep2 = searchAndReplace(searchValue, replaceValue, 'I32', 'FF0');

if (successStep2) {
  alert(" Húp Đi Men 🤫");
}

// Khôi phục giá trị originalValue về 0
}


  function SanghyeonULT() {
      var searchValue = -2079389344;
      var replaceValue = -2079391734;
  
      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());
  
      if (results.length > 0) {
          // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
          for (var i = 0; i < results.length; i++) {
              h5gg.setValue(results[i].address, replaceValue.toString(), 'I32');
          }
          alert("Đã bật không hồi chiêu Sanghyeon ");
      } else {
          alert("Lỗi rồi thoát game đi");
      }
  }
  
function Makei32() {
      var searchValue = Number(prompt("Nhập giá trị cần tìm kiếm i4 ", ""));
      var replaceValue = Number(prompt("Nhập giá trị mới ", ""));
  
      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());
  
      if (results.length > 0) {
          // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
          for (var i = 0; i < results.length; i++) {
              h5gg.setValue(results[i].address, replaceValue.toString(), 'I32');
          }
          alert(" OK Rồi Bú Đi  ");
      } else {
          alert("Lỗi rồi thoát game đi");
      }
  }
  
  function Makef64() {
      var searchValue = Number(prompt("Nhập giá trị cần tìm kiếm d ", ""));
      var replaceValue = Number(prompt("Nhập giá trị mới ", ""));
  
      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'F64', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());
  
      if (results.length > 0) {
          // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
          for (var i = 0; i < results.length; i++) {
              h5gg.setValue(results[i].address, replaceValue.toString(), 'F64');
          }
          alert(" OK Rồi Bú Đi  ");
      } else {
          alert("Lỗi rồi thoát game đi");
      }
  }
  
function Unban() {
      var searchValue = 357958400;
      var replaceValue = -2079391744;

      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());

      var targetResult = results.find(result => result.address.endsWith("370")); // Tìm kết quả có offset kết thúc bằng 8F4

      if (targetResult) {
          h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
          alert(" Unban Rồi Bú Đi 🍌");
      } else {
          alert("Không tìm thấy kết quả phù hợp để thay đổi.");
      }
  }
  function RollNhanh() {
      var searchValue = -1241513899;
      var replaceValue = -1241513867;

      h5gg.clearResults();
      h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
      var results = h5gg.getResults(h5gg.getResultsCount());

      var targetResult = results.find(result => result.address.endsWith("988")); // Tìm kết quả có offset kết thúc bằng 8F4

      if (targetResult) {
          h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
          alert(" Unban Rồi Bú Đi 🍌");
      } else {
          alert("Không tìm thấy kết quả phù hợp để thay đổi.");
      }
  }
  
var originalValue; // Define a global variable to store the original value

function modHuyHieuXanh1() {
var searchValue = 357958400;
var replaceValue = 0;
var successStep1 = searchAndReplace(searchValue, replaceValue, 'I32', '67C');

if (successStep1) {
  alert("Hoàn Thành B1");
}

searchValue = -2079391744;
replaceValue = Number(prompt("Nhập giá trị mới", ""));
originalValue = replaceValue; // Store the original value before modification
var successStep2 = searchAndReplace(searchValue, replaceValue, 'I32', '684');

if (successStep2) {
  alert("Bước 2: Đã thực hiện mod Huy Hiệu Xanh!");
}

// Khôi phục giá trị originalValue về 0
}

function restoreOriginalValue1() {
var searchValue = originalValue; // Restore to the original value
var replaceValue = 0; // Restore to 1
var success = searchAndReplace(searchValue, replaceValue, 'I32', '684');

if (success) {
  alert("Đã khôi phục giá trị ban đầu thành công!");
} else {
  alert("Không thể khôi phục giá trị ban đầu.");
}
}

var originalValue2; // Define a global variable to store the original value

function modHuyHieuXanh2() {
var searchValue = 357958400;
var replaceValue = 0;
var successStep1 = searchAndReplace(searchValue, replaceValue, 'I32', 'F67C');

if (successStep1) {
  alert("Hoàn Thành B1");
}

searchValue = -2079391744;
replaceValue = Number(prompt("Nhập giá trị mới", ""));
originalValue = replaceValue; // Store the original value before modification
var successStep2 = searchAndReplace(searchValue, replaceValue, 'I32', 'F684');

if (successStep2) {
  alert("Bước 2: Đã thực hiện mod Huy Hiệu Xanh!");
}

// Khôi phục giá trị originalValue về 0
}

function restoreOriginalValue2() {
var searchValue = originalValue; // Restore to the original value
var replaceValue = 0; // Restore to 1
var success = searchAndReplace(searchValue, replaceValue, 'I32', 'F684');

if (success) {
  alert("Đã khôi phục giá trị ban đầu thành công!");
} else {
  alert("Không thể khôi phục giá trị ban đầu.");
}
}
