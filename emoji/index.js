module.exports = function(app,emoji,description){
	console.log('😎', emoji.unifiedToHTML('😎'));
　　app.get('/',function(req,res){
       res.render('test',{
       	emoji:emoji.unifiedToHTML(emoji.softbankToUnified(description)),
       	emoji2:emoji.unifiedToHTML('😎'),
       	emoji3:emoji.docomoToUnified(description),
       	emoji4:emoji.kddiToUnified(description),
       	emoji5:emoji.softbankToUnified(description),
       	emoji6:emoji.googleToUnified(description)
       })
    }); 
    app.get('/interface',function(req,res){});   
    app.post('/interface',function(req,res){});  
}