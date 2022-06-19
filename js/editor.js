function insertAtCursor(myField, myValue) {
    var textTop = myField.scrollTop;
    var documentTop = document.documentElement.scrollTop;

    //IE 浏览器
    if (document.selection) {
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }

    //FireFox、Chrome等
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }

    myField.scrollTop = textTop;
    document.documentElement.scrollTop = documentTop;
}
$(function() {
    if($('#wmd-button-row').length>0){
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-sj-button" style="" title="插入首行缩进">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-suoqi"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-zt-button" style="" title="插入颜色文字">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-ziti"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-bili-button" style="" title="插入B站视频">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bilibili"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-shipin-button" style="" title="插入本地视频">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-shipin"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-wangyiyun-button" style="" title="插入网易云音乐">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-wangyiyinle"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-photo-button" style="" title="相册集">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiangce"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-text-button" style="" title="插入高亮文本">' +'<i class="iconfont icontip"></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-tanhao"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-ss-button" style="" title="插入收缩框">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiala"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-tab-button" style="" title="插入TAB">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-tab"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-hf-button" style="" title="插入回复可见">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bukejian"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-dl-button" style="" title="插入登录可见">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-denglu"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-cid-button" style="" title="插入文章卡片">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-kapian"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-button-button" style="" title="插入按钮">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-anniu"></use></svg>' +'</li>');
       
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-owo-button" style="" title="插入表情"><span class="OwO"></span></li>');
        
        new OwO({
            logo: 'OωO表情',
            container: document.getElementsByClassName('OwO')[0],
            target: document.getElementById('text'),
            api: 'https://cdn.jsdelivr.net/gh/zetheme/pigeon/OWO/OwO.json',
            position: 'down',
            width: '400px',
            maxHeight: '250px'
        });
        $(document).on('click','#wmd-sj-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '&emsp;&emsp;');
        });
        $(document).on('click','#wmd-bili-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[bilibili bv="" p="1"]\n');
        });
        $(document).on('click','#wmd-shipin-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[video src="视频地址"]\n');
        });
        $(document).on('click','#wmd-wangyiyun-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[mp3]输入网易云音乐id[/mp3]\n');
        });
        $(document).on('click', '#wmd-photo-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[photos]\n\n[/photos]\n');
        });
        $(document).on('click', '#wmd-dl-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[login]此处内容需要回复可见[/login]\n');
        });
        $(document).on('click', '#wmd-hf-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[hide]此处内容需要回复可见[/hide]\n');
        });
        $(document).on('click', '#wmd-cid-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[cid="此处插入文章的cid"]\n');
        });

        $(document).on('click', '#wmd-youqing-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n!!!\n[links]\n[名称][网址](头像)\n[/links]\n!!!\n');
        });

        $(document).on('click', '#wmd-zt-button', function() {

            $('body').append(
                '<div id="TPanel">'+
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>文字样式自定义</b></p>'+
                '<p><labe>输入文字颜色</labe><input name="color"' +
                ' type="text" placeholder="选填（如 #ffffff 、red）"></input></p>' +
                ' <p><labe>输入文字内容</labe><textarea type="text"/></p>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="t_ok">确定</button>'+
                '<button type="button" class="btn btn-s" id="t_cancel">取消</button>'+
                '</form>'+
                '</div>'+
                '</div>');

        });

        $(document).on('click', '#wmd-button-button', function() {//按钮

            $('body').append(
                '<div id="buttonPanel">'+//按钮
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>插入按钮</b></p>'+
                '<p>基本</p>'+
                '<p><input type="text" name="te" placeholder="按钮文字"></input><input type="text" name="url"' +
                ' placeholder="点击链接"></input></p>' +
                '<p><labe>样式</labe></p>'+
                '<p><select id="co" style="width: 80%"><option value="btn_light">白色</option><option value="btn_info">蓝色</option><option value="btn_dark">深色</option><option value="btn_success">绿色</option><option value="btn_black">黑色</option><option value="btn_warning">黄色</option><option value="btn_primary">紫色</option><option value="btn_danger">红色</option></select>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="button_ok">确定</button>'+//按钮
                '<button type="button" class="btn btn-s" id="button_cancel">取消</button>'+//按钮
                '</form>'+
                '</div>'+
                '</div>');
            $('.wmd-prompt-dialog input').select();

        });

        $(document).on('click', '#wmd-text-button', function() {//标签

            $('body').append(
                '<div id="textPanel">'+//标签
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>插入高亮引用</b></p>'+
                '<p><labe>样式</labe></p>'+
                '<p><select id="type" style="width: 100%"><option value="share">资料灰</option><option value="yellow">提示黄</option><option value="red">警告红</option><option value="blue">信息蓝</option><option value="green">推荐绿</option></select></p>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="text_ok">确定</button>'+//标签
                '<button type="button" class="btn btn-s" id="text_cancel">取消</button>'+//标签
                '</form>'+
                '</div>'+
                '</div>');
            $('.wmd-prompt-dialog input').select();

        });

        $(document).on('click', '#wmd-ss-button', function() {//收缩框

            $('body').append(
                '<div id="ssPanel">'+//收缩框
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>插入收缩框</b></p>'+
                '<p><select id="sst" style="width: 20%"><option value="collapse-block">展开</option><option value="collapse-none">合上</option></select><input type="text" name="bt" placeholder="标题" style="width: 80%"></input></p>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="ss_ok">确定</button>'+//收缩框
                '<button type="button" class="btn btn-s" id="ss_cancel">取消</button>'+//收缩框
                '</form>'+
                '</div>'+
                '</div>');
            $('.wmd-prompt-dialog input').select();

        });

        $(document).on('click', '#wmd-tab-button', function() {

            textContent = '[tabs]\n' +
                '[tab-pane label="标签页 1"]内容 1[/tab-pane]\n' +
                '[tab-pane label="标签页 2"]内容 2[/tab-pane]\n' +
                '[/tabs]';

            myField = document.getElementById('text');
            inserContentToTextArea(myField,textContent);

        });

        $(document).on('click','#t_ok',function() {
            //执行一个ajax请求获取解析歌单地址的音频信息
            myField = document.getElementById('text');
            var content = $('.wmd-prompt-dialog textarea').val();
            var color = $('.wmd-prompt-dialog input[name = "color"]').val();
            if (color!=""){
                color = ' '+color+'';
            }
            var insertContent = "";
            if ($("#isCenter").is(':checked')){
                insertContent = '<p class="center"'+color+'>'+content+'</p>';
            }else{
                insertContent = '[colour type="'+color+'"]'+content+'[/colour]';
            }

            inserContentToTextArea(myField,insertContent,'#TPanel');

        });

            $(document).on('click','#button_ok',function() {//按钮
//内容
                var textContent = $('.wmd-prompt-dialog input[name="te"]').val();
//颜色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 选中索引
                var color = obj_co.options[index_co].value; // 选中值
//URL
                var url = $('.wmd-prompt-dialog input[name="url"]').val();
//输出格式
                textContent = '[button color="' + color + '" url="' + url + '"]' + textContent + '[/button]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent,'#buttonPanel');//按钮

            });

        $(document).on('click','#text_ok',function() {//标签

            var obj_ty = document.getElementById("type"); //定位id
            var index_ty = obj_ty.selectedIndex; // 选中索引
            var type = obj_ty.options[index_ty].value; // 选中值
//输出格式
            textContent = '[tip type="' + type + '"]这里编辑标签内容[/tip]';

            myField = document.getElementById('text');
            inserContentToTextArea(myField,textContent,'#textPanel');//标签

        });

        $(document).on('click','#ss_ok',function() {//收缩框

            var obj_ty = document.getElementById("sst"); //定位id
            var index_ty = obj_ty.selectedIndex; // 选中索引
            var type = obj_ty.options[index_ty].value; // 选中值
            var t = $('.wmd-prompt-dialog input[name="bt"]').val();
//输出格式
            textContent = '[collapse status="' + type + '" label="' + t + '"]这里编辑收缩框内容[/collapse]';

            myField = document.getElementById('text');
            inserContentToTextArea(myField,textContent,'#ssPanel');//收缩框

        });

        $(document).on('click','#t_cancel',function() {
            $('#TPanel').remove();
            $('textarea').focus();
        });
        $(document).on('click','#text_cancel',function() {//标签
            $('#textPanel').remove();//标签
            $('textarea').focus();
        });

        $(document).on('click','#ss_cancel',function() {//收缩框
            $('#ssPanel').remove();//收缩框
            $('textarea').focus();
        });

        $(document).on('click','#button_cancel',function() {//按钮
            $('#buttonPanel').remove();//按钮
            $('textarea').focus();
        });


    }
});

//插入内容到编辑器
function inserContentToTextArea(myField,textContent,modelId) {
    $(modelId).remove();
    if (document.selection) {//IE浏览器
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = textContent;
        myField.focus();
    } else if (myField.selectionStart || myField.selectionStart == '0') {
        //FireFox、Chrome
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var cursorPos = startPos;
        myField.value = myField.value.substring(0, startPos)
            + textContent
            + myField.value.substring(endPos, myField.value.length);
        cursorPos += textContent.length;

        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
        myField.focus();
    }
    else{//其他环境
        myField.value += textContent;
        myField.focus();
    }

    //开启粘贴上传图片

}

