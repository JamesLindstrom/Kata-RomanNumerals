//Main object
var main = {
	arabicToRoman : function(arabic){
		var roman = "";
		var m = Math.floor(arabic / 1000);
		roman += "M".repeat(m);
		arabic -= m * 1000;
		if(arabic >= 900){
			roman += "CM";
			arabic -= 900;
		}else if(arabic >= 500){
			roman += "D";
			arabic -= 500;
		};
		return roman;
	}
};

//Test object
var test = {
	run : function(){
		//Test 1
		test.compare(1, main.arabicToRoman(1000), "M");
		
		//Test 2
		test.compare(2, main.arabicToRoman(2060), "MM");
		
		//Test 3
		test.compare(3, main.arabicToRoman(900), "CM");
		
		//Test 4
		test.compare(4, main.arabicToRoman(1900), "MCM");
		
		//Test 5
		test.compare(5, main.arabicToRoman(2950), "MMCM");
		
		//Test 6
		test.compare(6, main.arabicToRoman(2550), "MMD");
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