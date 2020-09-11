let  Mock = require('mockjs')
let data=[{
    title:'和法规和',
    id:1,
    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3007198513,44109818&fm=26&gp=0.jpg'
},
{
    title:'的非官方',
    id:2,
    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1568962580,3304614015&fm=26&gp=0.jpg'
},
{
    title:'上岛咖啡',
    id:3,
    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1192467131,1889324742&fm=26&gp=0.jpg'
},
{
    title:'士大夫',
    id:4,
    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1581907511,3450118136&fm=26&gp=0.jpg'
},
{
    title:'和法规和',
    id:1,
    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3007198513,44109818&fm=26&gp=0.jpg'
},
{
    title:'的非官方',
    id:2,
    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1568962580,3304614015&fm=26&gp=0.jpg'
},

]
Mock.mock('/getlist','get',{
    code:200,
    data:data

})
