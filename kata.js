//Main object
var main = {
	arabicToRoman : function(arabic){
		var roman = "";
		
		//1000s and 500s
		var m = Math.floor(arabic / 1000);
		roman += "M".repeat(m);
		arabic -= m * 1000;
		if(arabic >= 900){
			roman += "CM";
			arabic -= 900;
		}else if(arabic >= 500){
			roman += "D";
			arabic -= 500;
		}else if(arabic >= 400){
			roman += "CD";
			arabic -= 400;
		};
		
		//100s and 50s
		var c = Math.floor(arabic / 100);
		roman += "C".repeat(c);
		arabic -= c * 100;
		if(arabic >= 90){
			roman += "XC";
			arabic -= 90;
		}else if(arabic >= 50){
			roman += "L";
			arabic -= 50;
		}else if(arabic >= 40){
			roman += "XL";
			arabic -= 40;
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
		test.compare(2, main.arabicToRoman(2000), "MM");
		
		//Test 3
		test.compare(3, main.arabicToRoman(900), "CM");
		
		//Test 4
		test.compare(4, main.arabicToRoman(1900), "MCM");
		
		//Test 5
		test.compare(5, main.arabicToRoman(2900), "MMCM");
		
		//Test 6
		test.compare(6, main.arabicToRoman(2500), "MMD");
		
		//Test 7
		test.compare(7, main.arabicToRoman(3400), "MMMCD");
		
		//Test 8
		test.compare(8, main.arabicToRoman(2340), "MMCCCXL");
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