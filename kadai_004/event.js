 $(window).on('load',()=>{
     //画面をスクロールしたとき 
     console.log('loadイベントが発生しました');
 });

$(function() {
   $(window).on('scroll',()=>{
     //画面をスクロールしたとき 
     console.log('scrollイベントが発生しました');
   });
});

 
