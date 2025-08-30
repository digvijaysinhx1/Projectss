// document.addEventListener("DOMContentLoaded", function(){

//     const button = document.getElementById("add_btn");
//     const input_field = document.getElementById("input_field");
//     const list = document.getElementById("list");
//     // const dlt_btn = document.getElementsByClassName("dlt_btn");

    

//         button.addEventListener("click", function(){

//             const New_Task = input_field.value.trim();
//             console.log("the task is "+ New_Task);

//             if(input_field.value === ""){
//                 alert("please enter a task");
//             }
//             if(input_field.value.length > 50){
//                 alert("Task length should not exceed 50 characters");
//             }
//             const taskItem = document.creaeteElement("div");
//             taskItem.classList.add("Tasks");
//                 // } else if(input_field.value.length > 50){
//             //     alert("Task length should not exceed 50 characters");
//             // } else {
//             //     const New_Task = document.getElementById("input_field").value;
//             //     const dlt_btn = document.createElement("button");
//             //     dlt_btn.classList.add("delete");
//             //     dlt_btn.innerText = "Delete";
                
//             //     console.log("the task is "+ New_Task);
//             //     const task_name = document.createElement("div");
//             //     task_name.classList.add("Task_name");
//             //     task_name.innerText = New_Task;

//             //         list.appendChild(task_name) && list.appendChild(dlt_btn);

//             //     dlt_btn.addEventListener("click", function(){
//             //         list.removeChild(task_name);
//             //         list.removeChild(dlt_btn);
//             //     });

//             //     input_field.value = "";
//             // }



//             // input_field.value = "";

//     });

// });



// -----------------------------------------------new practice------------------------


document.addEventListener("DOMContentLoaded", function(){
    const input_field = document.getElementById("input_field");//text box
    const add = document.getElementById("add_btn");//add btn
    // const task = document.getElementById("Tasks");//list where tasks will be added
    // const task_name = document.getElementById("Task_name");//task name
    // const dlt_btn = document.getElementById("dlt_btn");//delete btn

    add.addEventListener("click", function(){
        const New_task = input_field.value.trim();

        
        
        //validations for input field
        if(New_task === ""){
            alert("please enter a task");
        } else if(New_task.length > 50){
            alert("Task length should not exceed 50 characters");
        } else {
            const Tasks = document.createElement("div");
            Tasks.classList.add("Tasks");
            Tasks.id = "Tasks";
            // Tasks.setAttribute("style", "display: grid; grid-auto-flow: column;  grid-template-columns: repeat(auto auto 1fr); gap: 12rem; margin: 1rem;");
            document.getElementById("list").appendChild(Tasks);

            const New_task = document.getElementById("input_field").value;
            const dlt_btn = document.createElement("button");
            dlt_btn.classList.add("delete");
            dlt_btn.id = "dlt_btn";
            dlt_btn.innerText = "Delete";

            const task_name = document.createElement("div");
            task_name.innerText = New_task;
            task_name.id = "Task_name";
            // task_name.setAttribute("style", "display: grid;  grid-template-rows: repeat(2, 1fr); gap: 12rem;");
            task_name.classList.add("Task_name");

            
            Tasks.appendChild(task_name) && Tasks.appendChild(dlt_btn);

            dlt_btn.addEventListener("click", function(){
                Tasks.removeChild(task_name);
                Tasks.removeChild(dlt_btn);
            });




            console.log("the task is " + New_task);
            input_field.value = ""; //clears the input field after task prints on "console"
        }

    });
});