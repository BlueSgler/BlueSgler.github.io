// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('2021 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> Lriver');
})

// 移除页脚样式
var app = document.getElementById('footer');
app.removeAttribute('id')
