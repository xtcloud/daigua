<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>404页面-5秒后自动返回首页</title>
		<meta name="renderer" content="webkit" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="//www.dglite.cn/404/style.css">
		<link rel="shortcut icon" href="//www.dglite.cn/favicon.ico">
	</head>
	<body>
		<div class="container">
			<img class="bg" src="//www.dglite.cn/404/404.png"/>
			<div class="btn">
                   <a onclick="history.back(-1)" class="goindex">返回上一页</a>
				<a href="/" class="link-button">返回首页</a>
				<div style="clear:both;"></div>
			</div>
		</div>
		<script>
    window.onload = function () {
        setInterval(function()
        {
            window.location.href="/"
        },5000); //3000代表的是3秒，即3秒后自动跳转至首页
    }
</script>


	</body>
</html>