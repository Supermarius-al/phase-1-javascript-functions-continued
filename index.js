// code your solution here
function saturdayFun(activity) {
  if (activity == undefined) {
    return `This Saturday, I want to roller-skate!`;
  } else {
    return `This Saturday, I want to ${activity}!`;
  }
}

const mondayWork = function (activity) {
  if (activity == undefined) {
    return `This Monday, I will go to the office.`;
  } else {
    return `This Monday, I will ${activity}.`;
  }
};
function wrapAdjective(specialAdjective) {
  return function innerFunction(adjective) {
    return String(
      `You are ${specialAdjective}${adjective}${specialAdjective}!`
    );
  };
}
