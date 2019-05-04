let name1:string = 'zhufeng';

type GetUserName = (x:string,y:string)=>string;

let getUserName:GetUserName = function (firstName:string,lastName:string) {
  return firstName + lastName
}
