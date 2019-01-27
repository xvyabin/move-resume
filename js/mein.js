function writeCode (prefix,code,fn){
	let domCode = document.querySelector('#code')
	let n = 0
    let id = setInterval(()=>{
	 n += 1
	 domCode.innerHTML= Prism.highlight(prefix + code.substring(0,n),Prism.languages.css);
	 styleTag.innerHTML =prefix + code.substring(0,n)
	 domCode.scrollTop = 10000
	 if (n >= code.length) {
		window.clearInterval(id)
		fn.call()
	  }
    },10)

}

function writeMarkdown(markdown, fn){
	let domPaper = document.querySelector('#paper>.content')
	let n = 0
    let id = setInterval(()=>{
     n += 1
	 domPaper.innerHTML=markdown.substring(0,n)
	 domPaper.scrollTop = 10000
	 if (n >= markdown.length) {
		window.clearInterval(id)
		fn.call()
	  }
    },10)

}


var result = `/*
*面试官你好，我是XYB
*我将以动画的形式介绍我自己

*只用文字介绍太单调了
*我就用代码来自我介绍吧

*首先准备一些样式
*/

*{
	transition: all 1s;
}

html{
	background: rgb(222,222,222);
	font-size: 16px;
}
#code{
	border: 1.5px solid #ddd;
	padding: 16px;
}
/*我需要一点代码高亮*/

.token.selector{
	color: #690;
}
.token.property{
	color: #905;
}
.token.function, .token.class-name{
	color: #dd4a68;
}


/*加点3D效果*/
#code{
	transform: rotate(720deg);
}

/*不玩了，我来介绍一下我自己*/
/*我需要一张白纸*/
#code{
	position: fixed;
	left :0;
	width:50%;
	height: 100%
}
#paper{
	position: fixed;
	right:0;
	width:50%;
    height: 100%;
    background: #444;
    display: flex;
    justify-cnetene: center;
    align-items: center;
    padding: 5px;
}
#paper > .content{
	background: white;
	height: 100%;
	width: 100%;
}

`
var result2 =`
#paper{
}`

var md =`
# 自 我 介 绍

我叫 xxx
1999年 出生
xxx学校
处男

# 项 目 介 绍

1.xxx 轮播
2.xxx 简历
3.canavs 画板

# 技 能 介 绍

熟悉 JavaScript css html

# 联 系 方 式

qq 123465
Email 12345vc1x4
手机 123456789
`
let result3 =`
/*xiexie*/`
/*
writeCode ('', result,()=>{
	createPaper(()=>{
		writeCode(result,result2,()=>{
			writeMarkdown(md,()=>{
				writeCode(result,result2,()=>{
					convertMarkdownToHtml(()=>{
						 writeCss(result+result2,result3, () => {
                        console.log('完成')
					})
				})
			})
		})
	})
})

*/



writeCode('', result, () => {
  createPaper(() => {
    writeMarkdown(md, () => {
      writeCode(result, result2, () => {
        convertMarkdownToHtml(() => {
          writeCode(result + result2, result3, () => {
            console.log('完成')
          })
        })
      })
    })
  })
})





function createPaper(fn){
	var paper = document.createElement('div')
	paper.id = 'paper'
	var content = document.createElement('pre')
	content.className = 'content'
	paper.appendChild(content)
	document.body.appendChild(paper)
	fn.call()
}

function convertMarkdownToHtml(fn) {
	 var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn.call()
}
   

/*function fn3(preResult){ 


	var n = 0
	var id = setInterval(()=>{
		n+=1
		code.innerHTML =preResult + result.substring(0,n)
		code.innerHTML= 
	      Prism.highlight(code.innerHTML,Prism.languages.css);
	    styleTag.innerHTML = preResult + result.substring(0,n)  
		if (n>= result.length) {
			window.clearInterval(id)
		}
	},50)	
}*/
