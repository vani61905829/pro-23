class ComputerBase {
constructor(x,y,width,height){
var option ={
isStatic:true

}
this.body=Bodies.rectangle(x,y,width,height,option)
this.width=width;
this.height=height;
this.image=loadImage("./assets/base2.png")
World.add(world,this.body)

}
display(){
push ();
translate (this.body.position.x,this.body.position.y);
rotate (this.angla);
imageMode (CENTER);
image (this.image,0,0,this.width,this.height);


pop ();






}

















}