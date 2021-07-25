

    $input = $("input#userinput");
    let $selectElement = $("div#select_wrap select#select_base");
    
    
    $selectElement.on("change",function(ev){
        var url_file_Ajax = "./";
        var allSelectOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        var allFilesToAjax = ["decimal_to_others.html","binary_to_others.html",
        'octal_to_others.html','hexadecimal_to_others.html','ternary_to_others.html','quaternary_to_others.html','quinary_to_others.html','senary_to_others.html','septenary_to_others.html','nonary_to_others.html','undecimal_to_others.html','duodecimal_to_others.html','vigesimal_to_others.html'
        ];
        console.log(`https://baseconvertor.vivucard.com/${allFilesToAjax[ev.target.value]}`);
        allFilesToAjax.forEach((file,index)=>{
            
           
            if($(this).val()==allSelectOptions[index]){
              
                $.ajax({
                    url : url_file_Ajax + file,
                    type : "GET",
                    success: function(data){
                        $("#infor_wrapper").html($(data).find("#infor_wrapper").wrap("div").html()).hide().fadeIn("fast");

                        regisInputEvent();    
                        $(".loading-wrap").hide();
                    },
                    beforeSend : function(){
                        $(".loading-wrap").show();
                    }
                    
                })
            }
            
        })

    })
  
    regisInputEvent();
    
 function regisInputEvent(){
    let $input = $("input#userinput");
      
    $input.on("input keyup",function(ev){
        $Decimal = $("li#decimal p.value");
        $Binary = $("li#binary p.value");
        $Octal = $("li#octal p.value");
        $Hexadecimal = $("li#hexadecimal p.value");
        $Ternary = $("li#ternary p.value");
        $Quaternary = $("li#quaternary p.value");
        $Quinary = $("li#quinary p.value");
        $Senary = $("li#senary p.value");
        $Septernary = $("li#septenary p.value");
        $Nonary = $("li#nonary p.value");
        $Undecimal = $("li#undecimal p.value");
        $Duodecimal = $("li#duodecimal p.value");
        $Vigesimal = $("li#vigesimal p.value");
        var content_input = $input[0].value;
        if(content_input.match(/[^0-9]/gi)){
            $("p#msg").addClass("invalid");
        }
        else{
            $("p#msg").removeClass("invalid");
        }

        var allSelectOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        var baseNameIdAttrs = ["decimal","binary","octal","hexadecimal","ternary","quaternary","quinary", "senary", "septenary","nonary","undecimal","duodecimal","vigesimal"];
        var baseNameVariables = ["$Decimal","$Binary","$Octal","$Hexadecimal","$Ternary","$Quaternary","$Quinary","$Senary","$Septenary","$Nonary","$Undecimal","$Duodecimal","$Vigesimal"];
        function getBase(baseName){
            if(baseName === "decimal"){
                return 10;
            }
            else if (baseName === "binary"){
                return 2;
            }
            else if (baseName === "octal"){
                return 8;
            }
            else if(baseName === "hexadecimal"){
                return 16;
            }
            else if(baseName === "ternary"){
                return 3;
            }
            else if(baseName === "quaternary"){
                return 4;
            }
            else if(baseName === "quinary"){
                return 5;
            }
            else if(baseName === "senary"){
                return 6;
            }
            else if(baseName === "septenary"){
                return 7;
            }
            else if(baseName === "nonary"){
                return 9;
            }
            else if(baseName === "undecimal"){
                return 11;
            }
            else if(baseName === "duodecimal"){
                return 12;
            }
            else if(baseName === "vigesimal"){
                return 20;
            }
            else{
                return;
            }
        }
        baseNameIdAttrs.forEach((Id,index)=>{
            if($selectElement.val()==allSelectOptions[index]){
                content_input = $input[0].value;
                var decimal = parseInt(content_input,getBase(Id));
                // [$Binary,$Decimal,$Octal,$Hexadecimal,$Ternary,$Quaternary,$Quinary,$Senary,$Septenary,$Nonary,$Undecimal,$Duodecimal,$Vigesimal].forEach((element)=>{

                // })
            $Decimal.text(decimal);
            $Binary.text((+decimal).toString(2));
            $Octal.text((+decimal).toString(8));
            $Hexadecimal.text((+decimal).toString(16));
            $Ternary.text((+decimal).toString(3));
            $Quaternary.text((+decimal).toString(4));
            $Quinary.text((+decimal).toString(5));
            $Senary.text((+decimal).toString(6));
            $Septernary.text((+decimal).toString(7));
            $Nonary.text((+decimal).toString(9));
            $Undecimal.text((+decimal).toString(11));
            $Duodecimal.text((+decimal).toString(12));
            $Vigesimal.text((+decimal).toString(20));

            }
        })
        
    })
    





 }