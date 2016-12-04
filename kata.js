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
		
		//10s and 5s
		var x = Math.floor(arabic / 10);
		roman += "X".repeat(x);
		arabic -= x * 10;
		if(arabic >= 9){
			roman += "IX";
			arabic -= 9;
		}else if(arabic >= 5){
			roman += "V";
			arabic -= 5;
		}else if(arabic == 4){
			roman += "IV";
			arabic -= 4;
		};
		
		//1s
		roman += "I".repeat(arabic);
		
		return roman;
	},
	
	romanToArabic : function(roman){
		var len = roman.length;
		var arabic = 0;
		var error;
		
		for(var i = 0; i < len; i++){
			switch(roman[i].toUpperCase()){
				case "M":
					arabic += 1000;
					break;
				case "D":
					arabic += 500;
					break;
				case "C":
					arabic += 100;
					break;
				default:
					error = "Something is wrong."
					break;
			};
		};
		if(error){
			return error;
		}else{
			return arabic;
		};
	}
};

//Test object
var test = {
	run : function(){
		//Test arabicToRoman
	
		//Test 1
		test.compare(main.arabicToRoman(1000), "M");
		
		//Test 2
		test.compare(main.arabicToRoman(2000), "MM");
		
		//Test 3
		test.compare(main.arabicToRoman(900), "CM");
		
		//Test 4
		test.compare(main.arabicToRoman(1900), "MCM");
		
		//Test 5
		test.compare(main.arabicToRoman(2900), "MMCM");
		
		//Test 6
		test.compare(main.arabicToRoman(2500), "MMD");
		
		//Test 7
		test.compare(main.arabicToRoman(3400), "MMMCD");
		
		//Test 8
		test.compare(main.arabicToRoman(2340), "MMCCCXL");
		
		//Test 9
		test.compare(main.arabicToRoman(125), "CXXV");
		
		//Test 10
		test.compare(main.arabicToRoman(1008), "MVIII");
		
		//Test 11
		test.compare(main.arabicToRoman(1490), "MCDXC");
		
		//Test 12
		test.compare(main.arabicToRoman(44), "XLIV");
		
		//Test 13
		test.compare(main.arabicToRoman(3839), "MMMDCCCXXXIX");
		
		//Test romanToArabic
		
		//Test 14
		test.compare(main.romanToArabic("M"), 1000);
		
		//Test 15
		test.compare(main.romanToArabic("MM"), 2000);
		
		//Test 16
		test.compare(main.romanToArabic("MMD"), 2500);
		
		//Test 17
		test.compare(main.romanToArabic("MMDCC"), 2700);
	},
	
	number: 0,
	
	//Does a comparison between an input and an output.
	compare : function(input, output){
		test.number++;
		if(input === output){
			console.log(`Test number ${test.number} passed.`);
		}else{
			console.log(`Test number ${test.number} failed: ${input} !== ${output}`);
		};
	}
};