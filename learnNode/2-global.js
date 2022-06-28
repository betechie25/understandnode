//Globals --No windows object(a thr is no browser in node)
//__dirname  path to current directory
//filename  filename
//require    fn to use modules
//module    info about current module
//process     info about env whr program is being execute
console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)


setInterval(()=>{
    console.log("hello node")
},1000);