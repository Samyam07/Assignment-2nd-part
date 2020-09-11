num = parseInt(prompt("Enter any number within 1 to 7: "));
		
		switch(num){
			case 1:
			{
				document.write("It is Sunday");
				break;
			}
			case 2:
			{
				document.write("It is Monday");
				break;
			}
			case 3:
			{
				document.write("It is Tuesday");
				break;
			}
			case 4:{
				document.write("It is Wednesday");
				break;
			}
			case 5:
			{
				document.write("It is Thursday");
				break;
			}
			case 6:
			{
				document.write("It is Friday");
				break;
			}
			case 7:
			{
				document.write("It is Saturday");
				break;
			}		
			default:
			{
				document.write("Invalid Input");
				break;
			}
		}