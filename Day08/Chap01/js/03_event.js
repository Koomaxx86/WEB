$(function() {

  // 이벤트 처리 메소드
  // - on('이벤트 타입', 이벤트핸들러(콜백함수) { })
  // * 이벤트 타입    : click, keyup, change ...
  // * 이벤트 핸들러  : 이벤트 발생 시, 실행될 콜백 함수

  /* 
    콜백함수
    - function() : $(this) 사용가능
    - () => {}   : $(this) 사용가능
  */
  $('#item1').on('click', function() {
      $('#item1').css('color', 'hotpink')
  })

  // this :   현재 속한 블록의 객체
  //          현재 선택한 요소를 가리키는 키워드
  // .item으로 클래스 전체를 선택할수 있다.
  // 클래스 선택 후 this를 선택자로 입력하면 선택한 객체 하나만 이벤트진행
  // this를 선택하지 않으면 이벤트 발생시 .item으로 묶인 모든 객체가 변경된다.
  $('#item2').on('click', function() {
      $(this).css('color', 'hotpink')
  })
  
  // mouseover    : 마우스 올렸을 때 이벤트
  $('#item3').on('mouseover', function() {
      $(this).css('color', 'red')
      $(this).css('background-color', 'cornflowerblue')
  })
  
  // mouseout     : 마우스 벗어날 때 이벤트
  $('#item3').on('mouseout', function() {
      $(this).css('color', 'white')
      $(this).css('background-color', 'royalblue')
  })
  
  // 메서드 체인
  // : 하나의 jQuery 객체에 여러 메서드를 연결하는 기법
  $('#item4')
      .on('mouseover', function() {
          $(this).css('color', 'red')
          $(this).css('background-color', 'cornflowerblue')
      })
      .on('mouseout', function() {
          $(this).css('color', 'white')
          $(this).css('background-color', 'royalblue')
      })


  $('#item5')
      .on('mouseover', function() {
          $(this).css('color', 'red')
          $(this).css('background-color', 'cornflowerblue')
      })
      .on('mouseout', function() {
          $(this).css('color', 'white')
          $(this).css('background-color', 'royalblue')
      })
      .on('click', function() {
          $(this).css('color', 'springgreen')
      })
      .on('dblclick', function() {
          $(this).css({
            'border'            : '5px solid hotpink',
            'background-color'  : 'black'
          })
      })
})