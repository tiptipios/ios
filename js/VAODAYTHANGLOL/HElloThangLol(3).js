     function Camcao() {
                    modifyValue1(-0.05,
                        Number(prompt("Nhập Độ Cao < 20 -> ...  :", "")),
                        'F00',
                        null,
                    );
                }

                function Camxa() {
                    modifyValue1(2.5,
                        Number(prompt("Nhập Tầm xa < 20 -> ... :", "")),
                        'F04',
                        null,
                    );
                }
                var zomcamxat = 60;

                function ZomCamxa() {
                    modifyValue2(
                        zomcamxat,
                        // Giá trị tìm kiếm ban đầu là 60
                        Number(prompt("Nhập Tầm xa -> ... :", "")),
                        // Giá trị thay thế do người dùng nhập vào
                        '68',
                        // Phần cuối của địa chỉ bộ nhớ cần khớp
                        null,
                        // Không cần địa chỉ kết thúc thứ hai
                        "Đã bật cam xa" // Thông báo khi thay đổi thành công và khóa giá trị
                    );
                }

                function modifyValue2(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
                    h5gg.clearResults();
                    h5gg.searchNumber(searchValue,
                        'F32',
                        '0x100000000',
                        '0x160000000');
                    const results = h5gg.getResults(h5gg.getResultsCount());
                    let modifiedCount = 0;

                    // Tạo một danh sách để lưu trữ các địa chỉ cần khóa
                    const lockAddresses = [];

                    results.forEach(result => {
                        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
                            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
                            modifiedCount++;
                            lockAddresses.push(result.address); // Lưu địa chỉ cần khóa
                        }
                    });

                    if (modifiedCount > 0 && alertMessage) {
                        alert(alertMessage);

                        // Khóa giá trị sau khi thay đổi
                        const locker = setInterval(function() {
                            console.log("Kiểm tra và khóa giá trị...");
                            lockAddresses.forEach(address => {
                                const currentValue = h5gg.getValue(address, 'F32');
                                if (currentValue !== replaceValue) {
                                    // Chỉ cập nhật nếu giá trị đã thay đổi
                                    h5gg.setValue(address, replaceValue.toString(), 'F32');
                                }
                            });
                        }, 2000); // Kiểm tra và cập nhật mỗi 2 giây (giảm tần suất lặp)

                        // Hủy bỏ khóa: clearInterval(locker); có thể gọi khi cần thiết
                    } else if (alertMessage) {
                        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
                    }
                }



                function tipAimCope() {
                    function searchAndReplace(searchValue,
                        replaceValue,
                        type) {
                        h5gg.clearResults(); h5gg.searchNumber(searchValue,
                            type,
                            '0x100000000',
                            '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
                            h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
                    searchAndReplace(0.09, 180, 'I64')}



                function tiphsCu() {
                    function searchAndReplace(searchValue, replaceValue, type) {
                        h5gg.clearResults();
                        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
                        var results = h5gg.getResults(h5gg.getResultsCount());
                        var count = 0;

                        for (var i = 0; i < results.length && count < 30; i++) {
                            var offset = results[i].address.toString(16).slice(-3).toUpperCase();
                            if (offset !== 'E50' && offset !== 'E00' && offset !== 'FE0') {
                                h5gg.setValue(results[i].address, replaceValue.toString(), type);
                                count++;
                            }
                        }
                    }
                    searchAndReplace(96688289, 2018908708, 'I32');
                }

                function tipNorecoil() {
                    function searchAndReplace(searchValue, replaceValue, type) {
                        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
                            h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
                    searchAndReplace(1016018816, 6018816, 'I32')}
                function tipXoahaot() {
                    function searchAndReplace(searchValue, replaceValue, type) {
                        h5gg.clearResults();
                        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
                        var results = h5gg.getResults(h5gg.getResultsCount());
                        for (var i = 0; i < results.length && i < 10; i++) {
                            h5gg.setValue(results[i].address, replaceValue.toString(), type);
                        }
                    }
                    searchAndReplace(3145840, 49, 'I32');
                }

                var Buoc1 = 1053273620; var Buoc2 = 1054951342; var Buoc3 = 1057048494; var Buoc4 = 1069547520; var Buoc5 = 1092616192; var Chao = 909000005; var khieukhich = 909000003; var Votay = 909000004; var Xm8 = 909000085; var camco = 909000034; var Akrongxanh = 909000063; var scarcamap = 909000068; var mp40maxa = 909000075; var Emote = 914000001; var m1014longtoc = 909000081; var daxoa = 909000090; var UMP = 909000098; var mp40sacmau = 909040010; var mp5anhsang = 909033002; var m1887aothuat = 909035007; var m4a1 = 909033001; var an94 = 909035012; var namdam = 909037011; var lucchinhphuc = 909038012; var thomson = 909038010; var m1014huyet = 909039011; var muakatana = 909044015; var glora = 909041005; var gokien = 909042008; var lv100 = 909042007; var hopthe = 909044005; var ngoisanh = 909043002; var cuoiech = 909045005; var cuoiboncau = 909043003; var CaothuSt = 909041012; var CaothuTc = 909041013; var racingboy = 909043009; var faraFal = 909045001;
                var Aomacdinh = 203000698; var AimcopeVip = 1075000115;
                function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
                    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
                        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
                            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++; if (searchValue === Chao)Chao = replaceValue; if (searchValue === Votay)Votay = replaceValue; if (searchValue === khieukhich)khieukhich = replaceValue; if (searchValue === Buoc1)Buoc1 = replaceValue;
                            if (searchValue === Emote)Emote = replaceValue;
                            if (searchValue === Buoc2)Buoc2 = replaceValue; if (searchValue === Buoc3)Buoc3 = replaceValue;
                            if (searchValue === Aomacdinh)Aomacdinh = replaceValue;

                        }}); if (modifiedCount > 0) {
                        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
                        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
                var Nhayman = 15;
                var nhayngam = 10;

                function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
                    h5gg.clearResults();
                    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
                    const results = h5gg.getResults(h5gg.getResultsCount());
                    let modifiedCount = 0;

                    results.forEach(result => {
                        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
                            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
                            modifiedCount++;
                            if (searchValue === Nhayman) Nhayman = replaceValue;
                            if (searchValue === nhayngam) nhayngam = replaceValue;
                        }
                    });

                    if (modifiedCount > 0 && alertMessage) {
                        alert(alertMessage);
                    } else if (alertMessage) {
                        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
                    }
                }

                // Biến toàn cục để lưu giá trị hiện tại
                var currentSearchValue = '4397530849764387586';

                // Hàm chung để thay đổi giá trị tìm kiếm
                function changeSpeed(newSearchValue, newEditValue) {
                    h5gg.clearResults();
                    h5gg.searchNumber(currentSearchValue, 'I64', '0x100000000', '0x200000000'); // Sử dụng giá trị tìm kiếm hiện tại
                    h5gg.editAll(newEditValue, 'I64'); // Thay thế với giá trị mới
                    currentSearchValue = newSearchValue; // Cập nhật giá trị hiện tại sau khi thay đổi
                }

                // Hàm để thay đổi tốc độ thành 50x
                function tipSpeed50x() {
                    changeSpeed('4299820751779530801', '4299820751779530801');
                }
                function tipSpeed10x() {
                    changeSpeed('4333543705419175690', '4333543705419175690');
                }
                // Hàm để chỉnh tốc độ lên 2x
                function tipspeed2x() {
                    changeSpeed('4371878345834235953', '4371878345834235953');
                }
                function tipspeed1x() {
                    changeSpeed('4397530849764387586', '4397530849764387586');
                }
                function tipAwmscope() {
                    h5gg.clearResults();
                    h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
                    var count = h5gg.getResultsCount();
                    var r = h5gg.getResults(count);
                    var cnt = 0;
                    for (var i = 0; i < count; i++) {
                        var addr1 = r[i].address;
                        var tiptip1 = (Number(addr1) + 8);
                        {
                            h5gg.setValue(tiptip1, 2139095040, "I32");

                        }
                    }
                }
                function tipdoisungnhanh() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
}
                function tipmagic() {
                    h5gg.clearResults();
                    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
                    h5gg.searchNearby('0.01', 'F32', '0x8');
                    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
                    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
                    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
                    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
                    h5gg.editAll('1.875', "F32");
                }
                function tipAimAwm() {
                    h5gg.clearResults();
                    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
                    var count = h5gg.getResultsCount();
                    var r = h5gg.getResults(count);
                    var cnt = 0;
                    for (var i = 0; i < count; i++) {
                        var addr1 = r[i].address;
                        var tiptip0 = (Number(addr1) + 36);
                        var tiptip1 = (Number(addr1) + 40);
                        var tiptip2 = (Number(addr1) + -308);
                        {
                            h5gg.setValue(tiptip0, 0.01, "F32");
                            h5gg.setValue(tiptip1, 0.01, "F32");
                            h5gg.setValue(tiptip2, 0, "I32");

                        }
                    }
                }

                function tipbuffnhay() {
    h5gg.clearResults();
    var hk1 = prompt("Nhập độ nhạy: ");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var tiptop0 = (Number(addr1) + -4);
        var tiptop1 = (Number(addr1) + -8);
        var tiptop2 = (Number(addr1) + -12);
        var tiptop3 = (Number(addr1) + -0);
        {
            h5gg.setValue(tiptop0, hk1, "F32");
            h5gg.setValue(tiptop1, hk1, "F32");
            h5gg.setValue(tiptop2, hk1, "F32");
            h5gg.setValue(tiptop3, hk1, "F32");

        }
    }
}
                
                function tipAim180() {
                    modifyValue(Buoc1, -2000, 'A44'); modifyValue(Buoc2, -2000, 'A3C'); modifyValue(Buoc3, -2000, 'A30', 'A38')}
                function tipNhetam() {
                    modifyValue(Buoc4, 1065990102, 'A10'); modifyValue(Buoc5, 1069547520, 'A6C')}
                function tipAimFov() {
                    modifyValue(1077936128, -20000, 'A04');
                    modifyValue(1069547520, 1148829696, 'A10')}
                function tipAimcopevip() {
                    function searchAndReplace(searchValue, replaceValue, type) {
                        h5gg.clearResults();
                        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
                        var results = h5gg.getResults(h5gg.getResultsCount());
                        for (var i = 0; i < results.length && i < 17; i++) {
                            h5gg.setValue(results[i].address, replaceValue.toString(), type);
                        }
                    }
                    searchAndReplace(AimcopeVip, -5, 'I32');
                }
                function tiplever() {
                    modifyValue(Votay, lv100, '')}
                function tipfarafal() {
                    modifyValue(Votay, faraFal, '')}
                function tiphopthelv() {
                    modifyValue(Votay, hopthe, '')}
                function tipngoi() {
                    modifyValue(Votay, ngoisanh, '')}
                function tipxm8lv7() {
                    modifyValue(Votay, Xm8, '')}
                function tipupmlv7() {
                    modifyValue(Votay, UMP, '')}
                function tipcamcolv7() {
                    modifyValue(Votay, camco, '')}
                function tipaklv7() {
                    modifyValue(Votay, Akrongxanh, '')}
                function tipscarlv7() {
                    modifyValue(Votay, scarcamap, '')}
                function tipmp40mxlv7() {
                    modifyValue(Votay, mp40maxa, '')}
                function tipm1014ltlv7() {
                    modifyValue(Votay, m1014longtoc, '')}
                function tipfamalv7() {
                    modifyValue(Votay, daxoa, '')}
                function tipmp40smlv7() {
                    modifyValue(Votay, mp40sacmau, '')}
                function tipmp5lv7() {
                    modifyValue(Votay, mp5anhsang, '')}
                function tipm1014hlv7() {
                    modifyValue(Votay, m1014huyet, '')}
                function tipm1887lv7() {
                    modifyValue(Votay, m1887aothuat, '')}
                function tipgokienlv7() {
                    modifyValue(Votay, gokien, '')}
                function tipthomsonlv7() {
                    modifyValue(Votay, thomson, '')}
                function tipgloralv7() {
                    modifyValue(Votay, glora, '')}
                function tipan94lv7() {
                    modifyValue(Votay, an94, '')}
                function tipm4a1lv7() {
                    modifyValue(Votay, m4a1, '')}
                function tipnamdamlv7() {
                    modifyValue(Votay, namdam, '')}
                function tipluclv7() {
                    modifyValue(Votay, lucchinhphuc, '')}
                function tipkatalv7() {
                    modifyValue(Votay, muakatana, '')}
                function tipcaothust7() {
                    modifyValue(Votay, CaothuSt, '')}
                function tipcaothutc7() {
                    modifyValue(Votay, CaothuTc, '')}
                function tipcuoiEch7() {
                    modifyValue(Votay, cuoiech, '')}
                function tipcuoiBC7() {
                    modifyValue(Votay, cuoiboncau, '')}
                function tipRacingboy7() {
                    modifyValue(Votay, racingboy, '')}
                function tipcaothustB() {
                    modifyValue(Chao, CaothuSt, '')}
                function tipcaothutcB() {
                    modifyValue(Chao, CaothuTc, '')}
                function tipcuoiEchN() {
                    modifyValue(Chao, cuoiech, '')}
                function tipcuoiBCB() {
                    modifyValue(Chao, cuoiboncau, '')}
                function tipRacingboyB() {
                    modifyValue(Chao, racingboy, '')}
                function tipleverB() {
                    modifyValue(Chao, lv100, '')}
                function tiphopthelvB() {
                    modifyValue(Chao, hopthe, '')}
                function tipngoiB() {
                    modifyValue(Chao, ngoisanh, '')}
                function tipxm8lv7B() {
                    modifyValue(Chao, Xm8, '')}
                function tipupmlv7B() {
                    modifyValue(Chao, UMP, '')}
                function tipcamcolv7B() {
                    modifyValue(Chao, camco, '')}
                function tipaklv7B() {
                    modifyValue(Chao, Akrongxanh, '')}
                function tipscarlv7B() {
                    modifyValue(Chao, scarcamap, '')}
                function tipmp40mxlv7B() {
                    modifyValue(Chao, mp40maxa, '')}
                function tipfarafalB() {
                    modifyValue(Chao, faraFal, '')}
                function tipm1014ltlv7B() {
                    modifyValue(Chao, m1014longtoc, '')}
                function tipfamalv7B() {
                    modifyValue(Chao, daxoa, '')}
                function tipmp40smlv7B() {
                    modifyValue(Chao, mp40sacmau, '')}
                function tipmp5lv7B() {
                    modifyValue(Chao, mp5anhsang, '')}
                function tipm1014hlv7B() {
                    modifyValue(Chao, m1014huyet, '')}
                function tipm1887lv7B() {
                    modifyValue(Chao, m1887aothuat, '')}
                function tipgokienlv7B() {
                    modifyValue(Chao, gokien, '')}
                function tipthomsonlv7B() {
                    modifyValue(Chao, thomson, '')}
                function tipgloralv7B() {
                    modifyValue(Chao, glora, '')}
                function tipan94lv7B() {
                    modifyValue(Chao, an94, '')}
                function tipm4a1lv7B() {
                    modifyValue(Chao, m4a1, '')}
                function tipnamdamlv7B() {
                    modifyValue(Chao, namdam, '')}
                function tipluclv7B() {
                    modifyValue(Chao, lucchinhphuc, '')}
                function tipkatalv7B() {
                    modifyValue(Chao, muakatana, '')}



                function tipso90() {
                    h5gg.clearResults();
                    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
                    h5gg.editAll('4848124999925814228', 'I64');
                    h5gg.clearResults();
                    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
                    h5gg.editAll('4848124999925251973', 'I64');
                }
                function tipso91() {
                    h5gg.clearResults();
                    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
                    var count = h5gg.getResultsCount();
                    var r = h5gg.getResults(count);
                    var cnt = 0;
                    for (var i = 0; i < count; i++) {
                        var addr1 = r[i].address;
                        var tiptip0 = (Number(addr1) + 20);
                        {
                            h5gg.setValue(tiptip0, 200, "F32");
                        }
                    }
                    h5gg.clearResults();
                    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
                    h5gg.editAll('4848125002066881600', 'I64');
                }
