<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<style type="text/css">
#hoge{
background-color:red;
}


#header {
    padding-top: 50px;
    height: 20px;
    background: red;
    }
.header h1 {
    font-size: 34px;
    font-weight: 100;
    padding: 0px 0 4px 10px;
    #letter-spacing: -3px;
    }
ul{
    list-style:none;
}
button.css3button {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
color: #ffffff;
padding: 12px 22px;
cursor: pointer;
    background: -moz-linear-gradient(
                                 top,
                                 #c70202 0%,
                                 #c70202);
                                 background: -webkit-gradient(
                                                              linear, left top, left bottom,
                                                              from(#c70202),
                                                                   to(#c70202));
                                                                      -moz-border-radius: 4px;
                                                                      -webkit-border-radius: 4px;
                                                                      border-radius: 4px;
                                                                      border: 0px solid #c70202;
                                                                      -moz-box-shadow:
                                                                      0px 0px 0px rgba(000,000,000,0),
                                                                      inset 0px 0px 0px rgba(255,255,255,0);
                                                                      -webkit-box-shadow:
                                                                      0px 0px 0px rgba(000,000,000,0),
                                                                      inset 0px 0px 0px rgba(255,255,255,0);
                                                                      box-shadow:
                                                                      0px 0px 0px rgba(000,000,000,0),
                                                                      inset 0px 0px 0px rgba(255,255,255,0);
                                                                      text-shadow:
                                                                      0px 0px 0px rgba(255,255,255,0),
                                                                      0px 0px 0px rgba(255,255,255,0);
                                                                      }
#que {
                                                                      font-size: 18px;
                                                                      font-weight: 400;
                                                                      padding: 0px 0 4px 10px;
                                                                      letter-spacing: 1px;
                                                                      width: 300px;
                                                                      height: 30px;
                                                                      background: #555555;
                                                                      color: #FFFFFF;
                                                                      text-indent: 35px;
                                                                      }
                                                                      </style>
                                                                      
                                                                      
<link href="skins/square/red.css" rel="stylesheet">
<script src="icheck.js"></script>

</head>


<body>
<div class="header">
<h1>
<img src="https://pbs.twimg.com/profile_images/412557816822374400/FuMHw9ke_normal.png" alt="くまった" class"kuma">くまったEnglish
</h1>
</div>

<div class="container">
<div class="container" id="que">
問題じゃじゃーん
</div>

<div class="container" id="ans">
<ul>
<li>
<input type="radio" id="f-option" name="selector" checked="false">
<label for="f-option">こたえ１</label>

<div class="check"><div class="inside"></div></div>
</li>

<li>
<input type="radio" id="s-option" name="selector" checked="false">
<label for="s-option">こたえ２</label>

<div class="check"><div class="inside"></div></div>
</li>

<li>
<input type="radio" id="t-option" name="selector" checked="false">
<label for="t-option">こたえ4</label>

<div class="check"><div class="inside"></div></div>
</li>
</ul>
</div>
<button type="button" name="" value="" class="css3button">つぎの問題</button>
<script>
$(document).ready(function(){
 $('input').iCheck({
                                    checkboxClass: 'icheckbox_square-red',
                                    radioClass: 'iradio_square-red',
                                    increaseArea: '20%', // optional
                   uncheckedClass: '',
                                    })
                  .iCheck('uncheck');
 });
</script>


</body>
</html>
