class Example{
    constructor(ele){
        debugger
        console.log("hello from example")
        this.ele = ele;
        this.ele.innerHTML = "<h1> Bello! </h1>"

        this.ele.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(){
        this.ele.children[0].innertext = "Belloooooo!!"
    }
}


export default Example;