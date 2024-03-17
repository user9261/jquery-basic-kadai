 $(window).on('load',()=>{
     //HTMLドキュメントが読み込み完了したとき出力する
     console.log('loadイベントが発生しました');
 });

$(function() {
   $(window).on('scroll',()=>{
     //画面をスクロールしたとき出力する 
     console.log('scrollイベントが発生しました');
   });
});

 
