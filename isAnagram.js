function anagram(string1, string2) {
	try{
		// mengecek apakah inputan berupa string atau tidak
		if (typeof string1 !== 'string' || typeof string2 !== 'string'){
			throw new Error ("Maaf, yang anda inputkan bukanlah string");
		}

		// membersihkan string dari spasi dan membuat case insensitive dengan merubah ke lower case
		var normalString1 = string1.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
		var normalString2 = string2.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();

		//mengecek apakah dalam string terdapat numeric
		var clearString1 = /\d/.test(normalString1);
		var clearString2 = /\d/.test(normalString2);
		if (clearString1==true || clearString2==true) {
			throw new Error ("Maaf, inputan anda mengandung angka");
		}

		//mengecek apakah panjang sring1 dan string2 sam
		var panjangString1 = normalString1.length;
		var panjangString2 = normalString2.length;
		if (panjangString1 !== panjangString2) {
			throw new Error ("Maaf, ini bukan anagram, panjang inputan berbeda");
		}

		//mensort dengan membandingkan kedua string
		var sortString1 = normalString1.split('').sort().join('');
		var sortString2 = normalString2.split('').sort().join('');
		if (sortString1===sortString2) {
			var comment = "True, "+string1 + " dan " + string2 + " merupakan anagram";
		}

		return comment;

	} catch(e) {
		alert(e.name + " " + e.message);
		console.log("False, "+string1 + " dan " + string2 + " bukan anagram");
	}
}

console.log(anagram("table","tabel")); //true
console.log(anagram("add","dad")); // true
console.log(anagram("add ","dad")); // true *mengabaikan spasi
console.log(anagram("tabel","dad")); // false 
console.log(anagram("add1","dad2")); // false *mengandung angka
