//Main object
var main = {
	arabicToRoman : function(arabic){
		var roman = "";
		if(arabic >= 5){
			roman += "V";
			arabic -= 5;
		}
		roman += "I".repeat(arabic);
		return roman;
	}
};

//Test object
var test = {
	run : function(){
		//Test 1
		test.compare(1, main.arabicToRoman(1), "I");
		
		//Test 2
		test.compare(2, main.arabicToRoman(2), "II");
		
		//Test 3
		test.compare(3, main.arabicToRoman(5), "V");
		
		//Test 4
		test.compare(4, main.arabicToRoman(6), "VI");
	},
	
	//Does a comparison between an input and an output.
	compare : function(testNo, input, output){
		if(input === output){
			console.log(`Test number ${testNo} passed.`);
		}else{
			console.log(`Test number ${testNo} failed: ${input} !== ${output}`);
		};
	}
};