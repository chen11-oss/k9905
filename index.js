	var str='aagbilkkkkkkkjsiiiiioio'.split('');
//	console.log(str)
 	var obj={}
 	str.forEach(function(v){
 		obj[v]=obj[v]?obj[v]+1:1;
 		
 		
 	})
	var max=0;
	var w;
	for(var i in obj){
		if(obj[i]>max){
			max=obj[i];
			w=i;
		}
	}
	console.log(w,max);