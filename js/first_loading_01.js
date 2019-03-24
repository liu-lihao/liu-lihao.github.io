(function () {
  //添加DOM节点
  const firstLoading = document.createElement('div');
  firstLoading.id = "first-loading";
  const loader = document.createElement('div');
  loader.className = "loader";
  for (let i = 0; i < 15; i++) {
    const span = document.createElement('span');
    loader.appendChild(span);
  }
  firstLoading.appendChild(loader);
  document.body.insertBefore(firstLoading, document.body.firstChild);
  //添加Style样式
  const firstStyle = document.createElement('style');
  firstStyle.id="first-loading-style";
  firstStyle.innerText =
    `#first-loading{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(#eee,#444);z-index:999999999;}.loader{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:175px;height:100px}.loader span{display:block;background:#ccc;width:7px;height:10%;border-radius:14px;margin-right:5px;float:left;margin-top:25%}.loader span:last-child{margin-right:0}.loader span:nth-child(1){animation:load 2.5s 1.4s infinite linear}.loader span:nth-child(2){animation:load 2.5s 1.2s infinite linear}.loader span:nth-child(3){animation:load 2.5s 1s infinite linear}.loader span:nth-child(4){animation:load 2.5s .8s infinite linear}.loader span:nth-child(5){animation:load 2.5s .6s infinite linear}.loader span:nth-child(6){animation:load 2.5s .4s infinite linear}.loader span:nth-child(7){animation:load 2.5s .2s infinite linear}.loader span:nth-child(8){animation:load 2.5s 0s infinite linear}.loader span:nth-child(9){animation:load 2.5s .2s infinite linear}.loader span:nth-child(10){animation:load 2.5s .4s infinite linear}.loader span:nth-child(11){animation:load 2.5s .6s infinite linear}.loader span:nth-child(12){animation:load 2.5s .8s infinite linear}.loader span:nth-child(13){animation:load 2.5s 1s infinite linear}.loader span:nth-child(14){animation:load 2.5s 1.2s infinite linear}.loader span:nth-child(15){animation:load 2.5s 1.4s infinite linear}@keyframes load{0%{background:#ccc;margin-top:25%;height:10%}50%{background:#444;height:100%;margin-top:0}100%{background:#ccc;height:10%;margin-top:25%}}`;
  document.head.appendChild(firstStyle);
  //移除
  setTimeout(() => {
    const styles = document.getElementsByTagName('style');
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].id == "first-loading-style") {
          document.body.removeChild(firstLoading);
          document.head.removeChild(styles[i]);
      }
    }
  }, 3000);
})();