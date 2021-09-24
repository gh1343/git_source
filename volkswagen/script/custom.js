$(document).ready(function(){
  const $vsl_slides = $('.vsl_slides'),
        $aw_left = $('.aw_left'),
        $aw_right = $('.aw_right');
  const $news_list_slides = $('.news_list_slides'),
        $btn_left = $('.btn_left'),
        $btn_right = $('.btn_right');

  let currentPt = 0;
// main 슬라이드
  $aw_left.click(function(){
    gotosliderpt1(currentPt-1);
      if(currentPt===0){
        $aw_left.addClass('in')
      }else{
        $aw_right.removeClass('in');
        $aw_left.removeClass('in');
        gotosliderpt1(currentPt);
      }
    })
    $aw_right.click(function(){
      gotosliderpt1(currentPt+1);
        if(currentPt<2){
          $aw_right.removeClass('in');
          $aw_left.removeClass('in');
          gotosliderpt1(currentPt);
        }else{
          $aw_right.addClass('in');
        }
  })
  function gotosliderpt1(W){
      $vsl_slides.css('left',(-100*W)+'%');
      currentPt=W;
    }

// news 슬라이드
  $btn_left.click(function(){
      gotosliderpt2(currentPt-1);
        if(currentPt===0){
          $btn_left.addClass('active')
        }else{
          $btn_right.removeClass('active');
          $btn_left.removeClass('active');
          gotosliderpt2(currentPt);
        }
      })
      $btn_right.click(function(){
        gotosliderpt2(currentPt+1);
          if(currentPt<=1){
            $btn_right.removeClass('active');
            $btn_left.removeClass('active');
            gotosliderpt2(currentPt);
          }else{
            $btn_right.addClass('active');
          }
    })
    function gotosliderpt2(R){
      $news_list_slides.css('left',(-50*R)+'%');
        currentPt=R;
      }




})