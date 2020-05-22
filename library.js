function $(selector){
 const self ={
     element: document.querySelector(selector),
     html: ()=> self.element,
     on:(event, callback)=>{
         document.addEventListener(event,callback)
     },
     hide:()=>{
         self.element.display.style = "none"
     },
     attr:(name, value) =>{
         if(value == null)
             self.element.getAttribute(name)
         else
             self.element.setAttribute(name,value)

     }
 }
 return self;
}


$('h1').on('click',function () {
    $("h2").attr('class','hello class');
});

$('h3').on('click',function () {
    $("h2").attr('remove','hello class');
});
