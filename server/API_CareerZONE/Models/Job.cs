namespace API_CareerZONE.Models
{
    public class Job
    {
        public Guid Id { get; set; }
        public string? JobTitle { get; set; }
        public string? JobPostedDay { get; set; }
        public string? JobExpirationDate { get; set; }
        public string? JobCompany { get; set; }
        public string? JobLocation { get; set; }
        // Include: EU, Korea, Japan, Singapore, Ha Noi, Da Nang, Ho Chi Minh
        public string? JobType { get; set; }
        // Include: Part time, Full time, Remote, Freelance
        public string? JobLevel { get; set; }
        // Include: Intern, Fresher, Junior, Senior, Manager, Director
        public string? JobCategory { get; set; }
        // Include: Design, Development, IT - Hardware, Information Technology, Engineering, HR & Recruiting, Marketing, Business Development, Management, Education, Healthcare, Multimedia Communications, Customer Service, Accounting / Finance, Administrative, Transport / Logistics
        public string? JobOfferedSalary { get; set; }
        public string? JobExperience { get; set; }
        public string? JobDescription { get; set; }
        public string? JobResponsibility { get; set; }
        public string? JobSkills { get; set; }
        public string? JobBenefits { get; set; }
        public string? Hr { get; set; }
    }
}
