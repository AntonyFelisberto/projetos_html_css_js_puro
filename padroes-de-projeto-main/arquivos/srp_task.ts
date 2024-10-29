(()=>{
    type htmlType = "input"|"select"|"textarea"|"radio";
    class HtmlElement {
        constructor(public id:string,public type:htmlType){

        }
    }

    class InputAttributes{
        constructor(public value:string,public placeholder:string){

        }
    }

    class InputEvents {
        constructor(){}
        setFocus(){}
        getValue(){}
        isActive(){}
        removeValue(){}
    }

    class InputElement {
        public html:HtmlElement
        public attributes:InputAttributes
        public events:InputEvents
        constructor(value:string,placeholder:string,id:string){
            this.html = new HtmlElement(id,"input")
            this.attributes = new InputAttributes(value,placeholder)
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement("name","first name:","txtName");
    console.log({nameField})

})