function addMonth(date, month) {
    // month달 후의 1일
    let addMonthFirstDate = new Date(
      date.getFullYear(),
      date.getMonth() + month,
      1
    );
    
    // month달 후의 말일
    let addMonthLastDate = new Date(
      addMonthFirstDate.getFullYear(),
      addMonthFirstDate.getMonth() + 1
      , 0
    );
    
    let result = addMonthFirstDate;
    if(date.getDate() > addMonthLastDate.getDate()) 
    {
      result.setDate(addMonthLastDate.getDate());
    } 
    else 
    {
      result.setDate(date.getDate());
    }
    
    return result;
  }
  
  let janLastDate = new Date(2022, 0, 31);
  document.write('------- 말일 테스트 -------<br>');
  document.write('기준일자 : ' + janLastDate.toLocaleString() + '<br>');
  document.write('1달 후 start : ' + addMonth(janLastDate, 1).toLocaleString().substring(9,11) + '<br>');
  document.write('2달 후 : ' + addMonth(janLastDate, 2).toLocaleString() + '<br>');
  document.write('3달 후 : ' + addMonth(janLastDate, 3).toLocaleString() + '<br>');
  document.write('13달 후(윤년) : ' + addMonth(janLastDate, 13).toLocaleString() + '<br>');
  
  