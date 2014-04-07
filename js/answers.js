<script>
    $(function(){
        var i=0;        // 問題番号の初期化
        var MaxTime=10; // カウンターの初期値を設定

        $('input')  //inputタグを全部取得するjqueryのセレクタ
        .iCheck({                       //ラジオボタンを装飾するロジック
            checkboxClass: 'icheckbox_square-red',
            radioClass: 'iradio_square-red',
            increaseArea: '20%', // optional
            uncheckedClass: '',
        })
        .iCheck('uncheck')  //ラジオボタンのチェックを外す
        .on('ifChecked',function(e){    //ラジオボタンのどれかがチェックされたら、
            $('#btn').addClass('css3button').removeClass('css3button-disable').removeAttr('disabled');　//ボタンの色を変えて押せるようにする（disabledクラスを外す）
        });

        //乱数取得関数
        var getRand = function(max){
            return(Math.round( Math.random()*max ));
        }

        //問題と選択肢をセットする関数
        var ans_order = getRand(2); //3のときは答えなしにするとかね
        var setque=function(no){    //引数(no)は問題番号
            var q=question[no].q;　// ここでnoをキーに問題を取得
            var a=question[no].a;   //ここでnoをキーに答えを取得
            $('#que').html (q);     //問題をhtmlにセット
            //この辺にdummyの回答を取得するのを書く
            //この辺にdummyの回答をセットするのを書く
            var d_ary=[];

            for(var i=0;i<3;i++){
                if(ans_order==i){
                    $('#ans label:eq('+i+')').html(a);
                }else{
                    while(1){
                    var d_no=getRand(dummy.length-1);
                        if(d_ary.indexOf(d_no)==-1){
                            d_ary.push(d_no);
                            var d=dummy[d_no];   //ここでd_noをキーにdummyを取得
                            $('#ans label:eq('+i+')').html(d);     
                            break;
                        }
                    }
                }
            }
        }

        var div=$('<div id="counter"/>'); // <div/>タグを作成して、divという変数の中に入れておく
        var count,timer; //カウンター用変数を局所変数として宣言しておく

        //カウントダウンタイマーをセットする関数
        var setTimer=function(){　
            clearTimeout(timer); //タイマー変数を解除する（カウントダウン途中でももとに戻すため）
            count=MaxTime;      //カウンターの初期値を10に設定
            div.html(count--);  //divタグの中身のhtmlにカウンターの値を設定する
            //1秒刻みに呼ばれるタイマーをセットする関数
            var counter=function(){
                /*
                timer = setTimeout(function(){ //タイマーをセットして、timerという変数に入れておく
                    div.html(count--);  //divタグの中身のhtlmにカウンター値をセットした「後」にカウンターの値をデクリメント（-1）する
                    if(count>0) counter();　//カウンターの値が0より大きければサイド１秒後に発火するタイマーをセットする
                },1000); //1秒=1000ms
                */
                var countdown = function(){ //タイマーをセットして、timerという変数に入れておく
                    div.html(count--);  //divタグの中身のhtlmにカウンター値をセットした「後」にカウンターの値をデクリメント（-1）する
                    if(count>=0){
                        counter();　//カウンターの値が0より大きければサイド１秒後に発火するタイマーをセットする
                    }else{
                        $('#answer').html('じかんぎれ');
                        nextStep();
                    }

                }

                timer = setTimeout(countdown,1000); //1秒=1000ms

                /*
                //ここ
                    if(counter==0){
                        div.html('じかんぎれ');
                        }
                //ここまで
                */
            }                     
            counter();//１秒刻みタイマーをキックする
        }

        //id=que（問題表示部分）の後ろにカウンター用のdivタグ（変数名div）をセット
        $('#que').after(div);
                                //<nao>ここから触る0406
            var nextStep=function(){
            //<nao>ここまで触る0406

            //ボタンをdisable状態に戻す
            $('#btn').removeClass('css3button').addClass('css3button-disable').attr('disabled','disabled');
            //ラジオボタンのチェックを外す
            $('input').iCheck('uncheck');

            //表示されている問題が最後の問題かを確認
            if(i+1==question.length){
                //最後の問題なら終了
                $('#que').html('終了！');  
                //最後の問題ならタイマーをクリア
                clearTimeout(timer);
                //最後の問題ならカウンターを消す
                div.remove();

            }else{
                //まだ問題があるなら、問題の番号（i）をインクリメント（+1）してから、問題設定関数を呼び出す
                setque(++i);
                //カウンタとダウンタイマーをセットする
                setTimer();
            }
            }

        //ボタンがクリックされたときのアクションを定義する関数
        $('#btn').click(function(e){

            //<nao>ここからいま触ってるとこ
            var ansValue = $(':radio[name="selector"]:checked').val();//選択した番号を取得
            if(ans_order==ansValue){
                $('#answer').html('せいかい！'); 
                }else{
                    $('#answer').html('ざんねん！');
                        }
            console.log ('ans_order->'+ans_order);
            console.log ('ansValue->'+ansValue);
            //ここまで
            nextStep();
            });

        //最初の問題をセットする
        setque(i); //setque(0);とやっても同義
        setTimer(); //カウントダウンタイマーをセットする
    });
</script>