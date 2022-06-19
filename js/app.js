if ($('.comment_excerpt .parent').length > 0) {
	for (var i = 0; i < $('.comment_excerpt .parent').length; i ++) {
		var parentLink = '<a class="mr-1" href="' + $('.comment_excerpt .parent').eq(i).attr('href') + '">' + $('.comment_excerpt .parent').eq(i).html() + '</a>';
		$('.comment_excerpt .parent').eq(i).next().prepend(parentLink);
	}
	$('.comment_excerpt .parent').remove();
};

//评论@标签
function mraite(){
    if ($('#comments .parent').length > 0) {
        for (var i = 0; i < $('#comments .parent').length; i ++) {
            var parentLink = '<a class="mr-1" href="' + $('#comments .parent').eq(i).attr('href') + '">' + $('#comments .parent').eq(i).html() + '</a>';
            $('#comments .parent').eq(i).next().prepend(parentLink);
        }
        $('#comments .parent').remove();
    };
  }
  
  //collapse
  function collapse(){
    $('.article-collapse .collapse-head').on('click', function () {     
        let next = $(this).next();
        next.slideToggle(200);
        $('.article-collapse .collapse-body').not(next).slideUp();
    });
  }
  
  //tabs
  function tabs(){
    $('.article-tabs .nav span').on('click', function () {
        let panel = $(this).attr('data-panel');
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.article-tabs').find('.tab-content div').hide();
        $(this)
        .parents('.article-tabs')
        .find('.tab-content div[data-panel=' + panel + ']')
        .show();
    });
  }

function dmfz(){
    $('.new_comment_form').submit(function(event){
        var commentdata=$(this).serializeArray();
        $.ajax({
            url:$(this).attr('action'),
            type:$(this).attr('method'),
            data:commentdata,
            beforeSend:function() {
                $('.comment-buttons .submit').text('评论提交中...');
            },
            success:function(data){
                $('.comment-buttons .submit').text('评论');
                var error=/<title>Error<\/title>/;
                if (error.test(data)){
                    var text=data.match(/<div(.*?)>(.*?)<\/div>/is);
                    var str='发生了未知错误';if (text!=null) str=text[2];
                } else {
                    $('.textarea_box').val('');
                    if ($('#cancel-comment-reply-link').css('display')!='none') $('#cancel-comment-reply-link').click();
                    var target='#comments',parent=true;
                    $.each(commentdata,function(i,field) {if (field.name=='parent') parent=false;});
                    if (!parent || !$('ol.page-navigator .prev').length){
                        var latest=-19260817;
                        $('#comments .comment-parent',data).each(function(){
                            var id=$(this).attr('id'),coid=parseInt(id.substring(8));
                            if (coid>latest) {latest=coid;target='#'+id;}
                        });
                        jQuery(document).ready(function($){
                            if ($('#comments .parent').length > 0) {
                                for (var i = 0; i < $('#comments .parent').length; i ++) {
                                    var parentLink = '<a class="mr-1" href="' + $('#comments .parent').eq(i).attr('href') + '">' + $('#comments .parent').eq(i).html() + '</a>';
                                    $('#comments .parent').eq(i).next().prepend(parentLink);
                                }
                                $('#comments .parent').remove();
                            };
                        });
                    }
                    $('.comments').html($('.comments',data).html()); 
                    $('.comments-title').html($('.comments-title',data).html()); 
                    $('.comments_lie').html($('.comments_lie',data).html());
                }
            }
        });
        return false;
    });
}





//PjAX配置
if (Config.Pjax === 'true') {
    $(document).pjax('a[href^="' + Config.homeUrl + '"]:not(a[target="_blank"], a[no-pjax])', {
        container: '#pjax',
        fragment: '#pjax',
        timeout: 8000
    })
    .on('pjax:send', function() { 
        NProgress.start(); 
    })
    .on('pjax:complete', function() {
        //NProgress
        NProgress.done();
        //返回顶部
        //评论@标签
        mraite();
        //collapse
        collapse();
        //tags
        tabs();

        dmfz();
    });
  }
  
  //不使用pjax情况下的调用
  (function() {

    //评论@标签
    mraite();
    //collapse
    collapse();
    //tags
    tabs();

    dmfz();

  })();