//Listener object
var listener = {
	arabicInput: document.getElementsByName('arabic')[0],
	romanInput: document.getElementsByName('roman')[0],
	romanOutput: document.getElementsByClassName('result')[0],
	arabicOutput: document.getElementsByClassName('result')[1],
	testBtn: document.getElementsByTagName('button')[0],
	
	init : function(){
		listener.arabicInput.addEventListener('keyup', listener.outputToRoman, false);
		listener.romanInput.addEventListener('keyup', listener.outputToArabic, false);
		listener.testBtn.addEventListener('click', test.run, false);
	},
	
	outputToRoman : function(){
		listener.romanOutput.innerHTML = convert.arabicToRoman(listener.arabicInput.value);
	},
	
	outputToArabic : function(){
		listener.arabicOutput.innerHTML = convert.romanToArabic(listener.romanInput.value);
	}
	
}

console.log(listener.arabicInput);

//Convert object
var convert = {
	arabicToRoman : function(arabic){
		var roman = "";
		
		if(arabic < 4000){
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
		}else{
			roman = "Number must be less than 4000."
		};
		
		return roman;
	},
	
	romanToArabic : function(roman){
		var len = roman.length;
		var arabic = 0;
		var error;
		
		for(var i = 0; i < len; i++){
			//If there is another letter after this one, record it as nextLetter.
			var nextLetter = "";
			if(i + 1 < len){
				nextLetter = roman[i + 1].toUpperCase();
			};
			
			switch(roman[i].toUpperCase()){
				case "M":
					arabic += 1000;
					break;
				case "D":
					arabic += 500;
					break;
				case "C":
					//If the next letter is M or D, add 900 or 400 and advance an extra position.
					if(nextLetter == "M"){
						i++;
						arabic += 900;
					}else if(nextLetter == "D"){
						i++;
						arabic += 400;
					}else{
						arabic += 100;
					};
					break;
				case "L":
					arabic += 50;
					break;
				case "X":
					//If the next letter is C or L, add 90 or 40 and advance an extra position.
					if(nextLetter == "C"){
						i++;
						arabic += 90;
					}else if(nextLetter == "L"){
						i++;
						arabic += 40;
					}else{
						arabic += 10;
					};
					break;
				case "V":
					arabic += 5;
					break;
				case "I":
					//If the next letter is X or V, add 9 or 4 and advance an extra position.
					if(nextLetter == "X"){
						i++;
						arabic += 9;
					}else if(nextLetter == "V"){
						i++;
						arabic += 4;
					}else{
						arabic += 1;
					};
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
		//Reset results
		test.output.innerHTML = "";
	
		//Test arabicToRoman
	
		//Test 1
		test.compare(convert.arabicToRoman(1000), "M");
		
		//Test 2
		test.compare(convert.arabicToRoman(2000), "MM");
		
		//Test 3
		test.compare(convert.arabicToRoman(900), "CM");
		
		//Test 4
		test.compare(convert.arabicToRoman(1900), "MCM");
		
		//Test 5
		test.compare(convert.arabicToRoman(2900), "MMCM");
		
		//Test 6
		test.compare(convert.arabicToRoman(2500), "MMD");
		
		//Test 7
		test.compare(convert.arabicToRoman(3400), "MMMCD");
		
		//Test 8
		test.compare(convert.arabicToRoman(2340), "MMCCCXL");
		
		//Test 9
		test.compare(convert.arabicToRoman(125), "CXXV");
		
		//Test 10
		test.compare(convert.arabicToRoman(1008), "MVIII");
		
		//Test 11
		test.compare(convert.arabicToRoman(1490), "MCDXC");
		
		//Test 12
		test.compare(convert.arabicToRoman(44), "XLIV");
		
		//Test 13
		test.compare(convert.arabicToRoman(3839), "MMMDCCCXXXIX");
		
		//Test romanToArabic
		
		//Test 14
		test.compare(convert.romanToArabic("M"), 1000);
		
		//Test 15
		test.compare(convert.romanToArabic("MM"), 2000);
		
		//Test 16
		test.compare(convert.romanToArabic("MMD"), 2500);
		
		//Test 17
		test.compare(convert.romanToArabic("MMDCC"), 2700);
		
		//Test 18
		test.compare(convert.romanToArabic("MMCM"), 2900);
		
		//Test 19
		test.compare(convert.romanToArabic("MCCL"), 1250);
		
		//Test 20
		test.compare(convert.romanToArabic("MXL"), 1040);
		
		//Test 21
		test.compare(convert.romanToArabic("LV"), 55);
		
		//Test 22
		test.compare(convert.romanToArabic("VIII"), 8);
		
		//Test 23
		test.compare(convert.romanToArabic("CDIV"), 404);
		
		//Test 24
		test.compare(convert.romanToArabic("MMMCMLXXII"), 3972);
		
		//Test 25
		test.compare(convert.romanToArabic("CCCXL"), 340);
		
	},
	
	number: 0,
	output: document.getElementById('testOutput'),
	
	//Does a comparison between an input and an output.
	compare : function(input, output){
		test.number++;
		if(input === output){
			test.output.innerHTML += `Test number ${test.number} passed.<br>`;
		}else{
			test.output.innerHTML += `Test number ${test.number} failed: ${input} !== ${output} <br>`;
		};
	}
};

listener.init();