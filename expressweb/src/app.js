const express=require("express")
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 8080;
const path=require("path");
console.log(path.join(__dirname,"../public"));
const staticpath= path.join(__dirname,"../public");
app.use(express.static(staticpath));
app.set('view engine','hbs');
const template_path=path.join(__dirname,"../templates");
const partial_path=path.join(__dirname,"../templates/partials");
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.get("",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404error',{
        error_msg:"Page Not Found",
    });
});

app.listen(port,()=>{
    //console.log("listening to port");
});