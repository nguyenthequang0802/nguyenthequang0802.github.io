const job = document.querySelector(".job-card");
const listJobs = document.querySelector('.jobs')
const copyJob1 = job.cloneNode(true);
const copyJob2 = job.cloneNode(true);
const copyJob3 = job.cloneNode(true);
listJobs.insertAdjacentElement("beforeend", copyJob1);
listJobs.insertAdjacentElement("beforeend", copyJob2);
listJobs.insertAdjacentElement("beforeend", copyJob3);


// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
let tagH3 = document.querySelectorAll('.job-card h3');
tagH3[1].textContent = "Javascript Developer";
tagH3[2].textContent = " Java Developer";
tagH3[3].textContent = " Python Developer";

// 3.Cập nhật Jobs listed thành tổng số công việc hiện có trong trang

const countJob = document.querySelectorAll(".job-card").length;
const jobsListed = document.querySelector("#jobs-listed span");

jobsListed.innerText = countJob;
// 4.Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
let search = document.querySelector("#search");
const allJobs = document.querySelectorAll(".job-card");

search.addEventListener('keydown', function(event){
    if (event.keyCode == 13){
        let searchValue = event.target.value;
        if(searchValue.trim() === ""){
            alert("Nhap tu khoa");
            return;
        }
        allJobs.forEach(job => {
            let jobName = job.querySelector("h3").innerText
            if(jobName.toLowerCase().includes(searchValue.toLowerCase())){
                job.style.display =  'block';
            } else{
                job.style.display = 'none'
            }
        });
        searchValue = "";
    }
})


