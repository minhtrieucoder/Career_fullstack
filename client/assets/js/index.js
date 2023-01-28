const urlGetAllJob = 'https://localhost:7005/backend-api/Jobs/GetAllJob';
var jobs = document.getElementById('jobs-js');

fetch(urlGetAllJob)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(job => {
        jobs.innerHTML += `<div class="job-item">
                                    <div class="job-item__header">
                                        <span class="jobTitle">
                                            <a href="">
                                                <p>${job.jobTitle}</p>
                                            </a>
                                        </span>
                                        <span class="jobCompany">
                                            <p>${job.jobCompany}</p>
                                        </span>
                                        <span class="jobLocation">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <p>${job.jobLocation}</p>
                                        </span>
                                    </div>
                                    <div class="job-item__main">
                                        <span class="jobExperience">
                                            <i class="fa-solid fa-chart-simple"></i>
                                            <p>${job.jobExperience}</p>
                                        </span>
                                        <span class="jobType">
                                            <i class="fa-solid fa-clock"></i>
                                            <p>${job.jobType}</p>
                                        </span>
                                        <span class="jobOfferedSalary">
                                            <i class="fa-solid fa-money-check"></i>
                                            <p>${job.jobOfferedSalary}</p>
                                        </span>
                                        <span class="jobLevel">
                                            <i class="fa-solid fa-user"></i>
                                            <p>${job.jobLevel}</p>
                                        </span>
                                    </div>
                                </div>`;
    });
})