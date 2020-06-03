<template>
    <div>
        <!-- 导航栏 -->
        <div id="nav">
            <ul>
                <li><a href="#"><figure class="MacBook_Air"></figure>
                    <p>MacBook Air</p><p>新款</p></a></li>
                <li><a href="#"><figure class="MacBook_Pro_13"></figure>
                    <p>MacBook Pro 13 英寸</p><p>新款</p></a></li>
                <li><a href="#"><figure class="MacBook_Pro_16"></figure>
                    <p>MacBook Pro 16 英寸</p><p></p></a></li>
                <li><a href="#"><figure class="iMac"></figure>
                    <p>iMac</p><p></p></a></li>
                <li><a href="#"><figure class="iMac_Pro"></figure>
                    <p>iMac Pro</p><p></p></a></li>
                <li><a href="#"><figure class="Mac_Pro"></figure>
                    <p>Mac Pro</p><p></p></a></li>
                <li><a href="#"><figure class="Mac_mini"></figure>
                    <p>Mac mini</p><p>新款</p></a></li>
                <li><a href="#"><figure class="Models_are"></figure>
                    <p>机型比较</p><p></p></a></li>
                <li><a href="#"><figure class="Pro_Display_XDR"></figure>
                    <p>Pro Display XDR</p><p></p></a></li>
                <li><a href="#"><figure class="accessories"></figure>
                    <p>配件</p><p></p></a></li>
                <li><a href="#"><figure class="Catalina"></figure>
                    <p>Catalina</p><p></p></a></li>
            </ul>
        </div>
        <!-- 文字提示 -->
        <div>
            <span>于教育商店选购新款 MacBook Air 和新款 13 英寸 MacBook Pro 可享受优惠。</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
#nav{
    width: 100%;
    height: 116px;
    background-color: #F9F9FA;
}
#nav ul{
    width: 57%;
    margin: 0 auto;
    list-style: none;
}
#nav ul li{
    float: left;
    margin-top: 10px;
    text-align: center;
    padding: 0 15px;
}
#nav ul li a{
    text-decoration: none;
    color: #8D8D8F;
    font-size: 10px;
}
#nav ul li a p:last-child{
    color: #BF4800;
}
#nav ul .MacBook_Air{
    margin: 0 auto;
    width: 52px;
    height: 54px;
    background-size: 52px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/macbookair__ej39du0gz4uq_large.svg');
}
#nav ul .MacBook_Pro_13{
    margin: 0 auto;
    width: 54px;
    height: 54px;
    background-size: 54px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/macbook_pro_13__ep96x983izyq_large.svg');
}
#nav ul .MacBook_Pro_16{
    margin: 0 auto;
    width: 60px;
    height: 54px;
    background-size: 60px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/macbook_pro_16__ni9nkbyq2dm6_large.svg');
}
#nav ul .iMac{
    margin: 0 auto;
    width: 48px;
    height: 54px;
    background-size: 48px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/imac__dkswmjfqeziq_large.svg');
}
#nav ul .iMac_Pro{
    margin: 0 auto;
    width: 48px;
    height: 54px;
    background-size: 48px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/imac_pro__eer4bfwlutme_large.svg');
}
#nav ul .Mac_Pro{
    margin: 0 auto;
    width: 37px;
    height: 54px;
    background-size: 37px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/mac_pro__bn92faz71k6a_large.svg');
}
#nav ul .Mac_mini{
    margin: 0 auto;
    width: 28px;
    height: 54px;
    background-size: 28px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/macmini__c6u0it831y0y_large.svg');
}
#nav ul .Models_are{
    margin: 0 auto;
    width: 70px;
    height: 54px;
    background-size: 70px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg');
}
#nav ul .Pro_Display_XDR{
    margin: 0 auto;
    width: 48px;
    height: 54px;
    background-size: 48px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg');
}
#nav ul .accessories{
    margin: 0 auto;
    width: 29px;
    height: 54px;
    background-size: 29px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg');
}
#nav ul .Catalina{
    margin: 0 auto;
    width: 42px;
    height: 54px;
    background-size: 42px 54px;
    background-repeat: no-repeat;
    background-image: url('https://www.apple.com.cn/v/mac/home/ap/images/familybrowser/mac_osx__dntc9ef2limq_large.svg');
}
</style>