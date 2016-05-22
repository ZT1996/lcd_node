exports.printIcdNumber = function(inputs) {
  var str = inputs.toString();
  var arr = [];
  var newIcd = [];
  var newIcdNumber;
  var array = [['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
  			   ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
  			   ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']
  			];

  for(var m = 0; m < str.length; m++){
    arr.push(str[m]);
  }
  
  for(var i = 0; i < array.length; i++){
  	for(var j = 0; j < arr.length; j++){
  		for(var k = 0; k < array[i].length; k++){
  			if(arr[j] == k){
  				newIcd.push(array[i][k] + ' ');
  			}
  		}
  	}
  	newIcd.push('\n');
  }
  newIcdNumber = newIcd.join('');
  console.log(newIcdNumber);
}
