class TenthStudent{
    static passMarks=35;
    constructor(){
        console.log(`Inside Constructor`);
        this.telMarks=0;
        this.hinMarks=0;
        this.engMarks=0;
        this.matMarks=0;
        this.sciMarks=0;
        this.socMarks=0;
    }
  
    calculateResult=()=>{
        if(this.telMarks >= TenthStudent.passMarks &&
            this.hinMarks >= TenthStudent.passMarks &&
            this.engMarks >= TenthStudent.passMarks &&
            this.matMarks >= TenthStudent.passMarks &&
            this.sciMarks >= TenthStudent.passMarks &&
            this.socMarks >= TenthStudent.passMarks 
        ){
            console.log(`Tenth passed`)
        }else{
            console.log(`Tenth Failed`)
        }
    }

    totalMarks=()=>{
        console.log(`Total Marks : ${this.telMarks+this.hinMarks+this.engMarks+this.matMarks+this.sciMarks+this.socMarks}`)
    }


   
}
export default TenthStudent;