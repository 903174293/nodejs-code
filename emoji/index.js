module.exports = function(app,emoji){
	console.log('😎', emoji.unifiedToHTML('😎'));
　　app.get('/',function(req,res){
       res.render('test',{
       	emoji:emoji.unifiedToHTML('表情测试                  '),
       	emoji2:emoji.unifiedToHTML('😎')
       })
    }); 
    app.get('/interface',function(req,res){});   
    app.post('/interface',function(req,res){});  
}