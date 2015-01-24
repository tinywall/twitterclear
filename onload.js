var cssstyle="<style>"+
		".stream-container .media-thumbnail,.stream-container .animated-gif-thumbnail,.stream-container .js-media-container{"+
			"max-height: 10px !important;overflow: hidden;content:'';"+
			"height: 10px;width: 100%;background: #BBB;"+
		"}"+
		".stream-container .media-thumbnail img,.stream-container .animated-gif-thumbnail img{"+
			"display:none;"+
		"}"+
	"</style>";
$(document).ready(function(){
	$('body').append(cssstyle);
	$('.expanding-stream-item').live('click',function(){
		if($(this).hasClass('open')){
			$(this).find('.media-thumbnail,.animated-gif-thumbnail').css({
				'max-height':'inherit','overflow':'inherit',
				'height': 'inherit','width': 'inherit','background': 'inherit'
			});
			$(this).find('.media-thumbnail img,.animated-gif-thumbnail img').css({
				'display': 'block'
			});
		}else{
			$(this).find('.media-thumbnail,.animated-gif-thumbnail').css({
				'max-height':'10px','overflow':'hidden',
				'height': '10px','width': '100%','background': '#BBB'
			});
			$(this).find('.media-thumbnail img,.animated-gif-thumbnail img').css({
				'display': 'none'
			});
		}
	});
});