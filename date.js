exports.getDate = function(){
  const today = new Date();
  const currentDay = today.getDay();
  let day = "";
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  day=today.toLocaleDateString("en-US",options);
  return day;
}

exports.getDay=function(){
  const today = new Date();
  const currentDay = today.getDay();
  let day = "";
  const options = {
    weekday: "long",
  };
  day=today.toLocaleDateString("en-US",options);
  return day;
}
