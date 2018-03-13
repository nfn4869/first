window.onload=function()
{
    autoMove('img','span');         //autoMove函数用来使span和img 进行自动切换
} 
    
//轮播图函数
function autoMove(tagImg,tagSpan){
    var imgs=document.getElementById('scollimg').getElementsByTagName(tagImg);
    var spans=document.getElementById('item').getElementsByTagName(tagSpan);
    

//每次轮播后样式
    function InitMove(index){
        for(var i=0;i<imgs.length;i++){
                imgs[i].style.opacity='0';
                spans[i].style.background='#ccc';
            }
            imgs[index].style.opacity='1';
            spans[index].style.background='red';
        }
        
        InitMove(0);
        
//轮播过程
       
        var count=1;
        function fMove(){
            if(count==imgs.length){
                count=0;
            }
            InitMove(count);
            count++;
        }

        //设置自动轮播定时器；

        var scollMove=setInterval(fMove,2000);

        //点击切换图片；
        
        var btnleft=document.getElementById('prev');
        var btnright=document.getElementById('next');
        btnleft.onclick=function(){
            clearInterval(scollMove);
            if(count==0){
                count=imgs.length;
            }
            count--;
            InitMove(count);
            scollMove=setInterval(fMove,1500);
        };
        btnright.onclick=function(){
            clearInterval(scollMove);
            fMove();
            scollMove=setInterval(fMove,1500);
        }
    }


/* setInterval()方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。*/