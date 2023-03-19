function cekLogin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	let Uname = frm.uname.value;
	let pwd = frm.password.value;

	/*
	logic jika sudah input naman
	jika tidak input namanya, ada pesan Maaf Anda Gagal Login
	*/
	if(Uname == "Mimin" && pwd == "mimin123"){
		alert("Selamat Datang Mimin, Anda Administrator")
	}
	else if(Uname == "Budi"  && pwd == "budi123"){
		alert("Selamat Datang Budi, Anda Operator")
	}
	else{
		alert("Maaf Anda Gagal Login")
	}
	
}
		
function kosongin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.uname.value = "";
}

function kosongin1(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.password.value = "";
}
