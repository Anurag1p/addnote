// New Code.apply................~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	let arrRecord	=	[];
	/*arrRecord.push("Hello");
	arrRecord.push("Ram");
	alert(arrRecord[1]);*/
	function getTitle(){
		let btn	=	document.getElementById("btn_add").value;
		let note	=	document.getElementById("txt_title").value;
		if(btn=='Add Note'){			
			arrRecord.push(note);
		}else{
			let id = document.getElementById('btn_add').getAttribute('ref_id');
			arrRecord[id]=note;
			document.getElementById("btn_add").value="Add Note";
			
		}
		document.getElementById("txt_title").value="";
		printRecord();
	}
	function printRecord(){
		
			let tbl="";
			let j=1;
			for(let i=0;i<arrRecord.length;i++){
				if(arrRecord[i]!="_@_"){
				tbl	+=	`
							<tr>
								<td style="width:10%;padding:7px">${j++}</td>
								<td style="width:60%;padding:7px">${arrRecord[i]}</td>
								<td style="width:15%;padding:7px">
									<p ref_id="${i}" onclick="edit(this)" class="edit">Edit</p>
								</td>
								<td  style="width:15%;padding:7px">
									<p ref_id="${i}" onclick="delete_record(this)" class="del">Delete</p>
								</td>
							</tr>
						`;
				}
			}
			document.getElementById("tbl_record").innerHTML=tbl;
	}
	function delete_record(ref){
		let id=ref.getAttribute('ref_id');
		arrRecord[id]="_@_";
		printRecord();
	}
	function edit(anurag){
		let id=anurag.getAttribute('ref_id');
		document.getElementById("btn_add").setAttribute("ref_id",id);
		document.getElementById("txt_title").value=arrRecord[id];
		document.getElementById("btn_add").value="Update Record";
	}

	document.getElementById("btn_add").addEventListener("click",getTitle);








// ````````~~~~~~~~~~~~~~~~~~~~~~~~~New code end``````````````````````````````````


// 	let arrRecord	=	[];

// 	function getTitle(){
// 		let note	=	document.getElementById("txt_title").value;
// 		arrRecord.push(note);
// 		printRecord();
// 	}
  
// 	function printRecord(){
// 			let tbl="";
// 			let j=1;
// 			for(let i=0;i<arrRecord.length;i++){
// 				if(arrRecord[i]!="_@_"){
// 				tbl	+=	`
// 							<tr>
// 								<td>${j++}</td>
// 								<td >${arrRecord[i]}</td>
// 								<td >
// 									<p ref_id="${i}" class="edit" >Edit</p>
// 								</td>
// 								<td  >
// 									<p ref_id="${i}"  class="del" onclick="delete_record(this)">Delete</p>
// 								</td>
// 							</tr>
// 						`;
// 				}
// 			}
// 			document.getElementById("tbl_record").innerHTML=tbl;
// 	}
// 	function delete_record(ref){
// 		let id=ref.getAttribute('ref_id');
// 		arrRecord[id]="_@_";
// 		printRecord();
// 	}
//   function edit_record(ref){
// 		let id=ref.getAttribute('ref_id');
// 		arrRecord[id]="_@_";
// 		printRecord();
// 	}


// 	document.getElementById("btn_add").addEventListener("click",getTitle);
  
  












  
  // let arrName = [];
  // document.getElementById("addData").addEventListener("click",getName);
  // document.getElementById("addData").addEventListener("click", function () {
  //   arrName.unshift(document.getElementById("username").value);
  //   document.getElementById("username").value = "";
  //   printData();
  // });

  /*function getName(){
		arrName.unshift(document.getElementById("username").value);
		document.getElementById("username").value="";
		printData();
	}*/
  // function printData() {
  //   let data = "";
  //   for (let i = 0; i < arrName.length; i++) {
  //     data += `<div>${arrName[i]}</div>`;
  //   }
  //   document.getElementById("print").innerHTML = data;
  // }

