window.onload = function () {
    var mySwiper2 = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        //横向滑动
        direction: 'horizontal',

        //设置滑动的速度
        speed: 1000,

        //设置自动播放的时间间隔
        autoplay: 2000,

        //用户操作此插件之后，是否禁止自动播放。默认为true：停止
        //操作包括触碰，拖动，点击pagination等
        autoplayDisableOnInteraction: false,
    })
    function qiehuan() {
        var mySwiper1 = new Swiper('.lunbo .swiper-container', {
            direction: 'vertical',
            loop: true,

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            //横向滑动
            direction: 'horizontal',

            //设置滑动的速度
            speed: 1000,

            //设置自动播放的时间间隔
            autoplay: 2000,

            //用户操作此插件之后，是否禁止自动播放。默认为true：停止
            //操作包括触碰，拖动，点击pagination等
            autoplayDisableOnInteraction: false,
        })
    }
    qiehuan();
    function wenzhang() {
        var oWenzhang = document.getElementById('wenzhang'),
            oUl = oWenzhang.getElementsByTagName('ul')[0],
            aLi = oUl.getElementsByTagName('li'),
            aDiv = oUl.getElementsByTagName('div'),
            aBut = oUl.getElementsByTagName('input');

        for (var i = 0; i < aLi.length; i++) {
            aLi[i].addEventListener('mouseover', xianshi, false);
        }
        function xianshi() {
            var oDiv = this.getElementsByTagName('div')[0],
                oBut = this.getElementsByTagName('input')[0];
            for (var i = 0; i < aDiv.length; i++) {
                aDiv[i].style.display = 'block';
                aBut[i].style.display = 'none';
            }
            oDiv.style.display = 'none';
            oBut.style.display = 'block'
        }
    }
    wenzhang();
    function chexin() {
        var oChexin = document.getElementById('chexin'),
            aBtn = oChexin.getElementsByTagName('input'),
            oTab1 = document.getElementById('tab1'),
            oTab2 = document.getElementById('tab2'),
            aTab = [oTab1, oTab2];
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].index = i;
            aBtn[i].addEventListener('click', dianji, false);
        }
        function dianji() {
            for (var i = 0; i < aBtn.length; i++) {
                aBtn[i].className = 'touming'
                aTab[i].style.display = 'none';
            }
            this.className = '';
            aTab[this.index].style.display = 'block';
            qiehuan();
        }
    }
    chexin();
    function xinxi(){
        var oXinxi=document.getElementById('xinxi'),
            oUl=oXinxi.getElementsByTagName('ul')[0],
            aLi=oUl.getElementsByTagName('li'),
            aTab=oXinxi.getElementsByTagName('table');
        
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].addEventListener('click',dianji,false);
        }
        function dianji(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aTab[i].className='';
            }
            this.className='yanse';
            aTab[this.index].className='block';
        }
    }
    xinxi();
    zhuanpan();
    function zhuanpan(){
        var oZhizhen=document.getElementById('zhizhen'),
            oMengceng=document.querySelector('.mengceng'),
            oP=oMengceng.querySelector('p'),
            oBut=oMengceng.querySelector('input'),
            num=0,
            jihui=0;

        oZhizhen.addEventListener('click',xuanzhuan,false);
        function xuanzhuan(){
            if(jihui===3){
                oP.innerHTML='您好，您的次数已用完！';
                oMengceng.style.display='block';
                return;
            }
            rdm=Math.floor(Math.random()*360)+1800;
            clearInterval(oZhizhen.timer);
            oZhizhen.timer=setInterval(function(){
                num+=60;
                oZhizhen.style.transform="rotate("+num+"deg)";
                if(num>=rdm){
                    clearInterval(oZhizhen.timer);
                    jihui++;
                    var dushu = num % 360;
                    if (dushu <= 30 || dushu > 330) {
                        oP.innerHTML = '恭喜您，获得100元精美礼品！';
                    }
                    else if (dushu > 90 && dushu <= 150) {
                        oP.innerHTML = '恭喜您，获得500元加油卡！';
                    }
                    else if (dushu > 210 && dushu <= 270) {
                        oP.innerHTML = '恭喜您，获得Blueair空气净化器！';
                    }
                    else {
                        oP.innerHTML = '很遗憾，您没有中奖，谢谢您的参与！';
                    }
                    oMengceng.style.display='block';
                    num=0;
                }
            },30)
        }
        oMengceng.addEventListener('click',yingcang,false);
        oBut.addEventListener('click',yingcang,false);
        function yingcang() {
            oMengceng.style.display='none';
        }
    }
}
