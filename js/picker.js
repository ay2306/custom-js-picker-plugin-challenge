class picker{
    constructor(context){
        this.leftPicker = 0;
        this.rightPicker = 0;
        this.addNextLeft(context);
        this.addPrevLeft(context);
        this.addNextRight(context);
        this.addPrevRight(context);
    }
    /*
        Utility Functions
    */
    static setChoices(){
        let current = 'A'
        picker.leftChoices.push(current);
        while(current != 'Z'){
            let ascii_value = current.charCodeAt(0);
            ascii_value++;
            current = String.fromCharCode(ascii_value);
            picker.leftChoices.push(current);
        }
        current = '0';
        picker.rightChoices.push(current);
        while(current != '9'){
            let ascii_value = current.charCodeAt(0);
            ascii_value++;
            current = String.fromCharCode(ascii_value);
            picker.rightChoices.push(current);
        }
    }
    addNextLeft(context){
        baseContext = context.children[0];
        baseContext.addEventListener("click",(event)=>{
            initiate_left_up_action(baseContext);
        });
    }
    addPrevLeft(context){
        baseContext = context.children[1];
        baseContext.addEventListener("click",(event)=>{
            initiate_left_down_action(baseContext);
        })
    }
    addNextRight(context){
        baseContext = context.children[2];
        baseContext.addEventListener("click",(event)=>{
            initiate_right_up_action(baseContext);
        });
    }
    addPrevRight(context){
        baseContext = context.children[3];
        baseContext.addEventListener("click",(event)=>{
            initiate_right_down_action(baseContext);
        })
    }
    /*
        Now I define changes in the reactions
    */
    initiate_left_down_action(baseContext){
        this.leftPicker--;
        if(this.leftPicker < 0)this.leftPicker+=(picker.leftChoices.length);
        performOverallChanges();
    }
    initiate_left_up_action(baseContext){
        this.leftPicker++;
        if(this.leftPicker >= picker.leftChoices.length)this.leftPicker-=(picker.leftChoices.length);
        performOverallChanges();
    }
    initiate_right_down_action(baseContext){
        this.rightPicker--;
        if(this.rightPicker < 0)this.rightPicker+=(picker.rightChoices.length);
        performOverallChanges();
    }
    initiate_right_up_action(baseContext){
        this.rightPicker++;
        if(this.rightPicker >= picker.rightChoices.length)this.rightPicker-=(picker.rightChoices.length);
        performOverallChanges();
    }
    /*
        Methods here make the changes to the DOM
        But before implementing them I need to write HTML for it first;
    */
    performOverallChanges(){
        console.log('Changes will be reflected here');
    }
};
picker.leftChoices = [];
picker.rightChoices = [];
picker.setChoices();