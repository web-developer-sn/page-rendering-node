const home=(req,res,next)=>{
    res.render('index')
}

const about=(req,res,next)=>{
    res.render('about')
}
const camera=(req,res,next)=>{
    res.render('cameras')
}

const contact=(req,res,next)=>{
    res.render('contact')
}

module.exports={
    home,
    about,
    camera,
    contact
    
}