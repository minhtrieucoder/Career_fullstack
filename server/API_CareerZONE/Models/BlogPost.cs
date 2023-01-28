namespace API_CareerZONE.Models
{
    public class BlogPost
    {
        public Guid Id { get; set; }
        public string? Image { get; set; }
        public string? Title { get; set; }
        public DateTime Date { get; set; }
        public string? TimeRead { get; set; }
        public string? Description { get; set; }
        public string? Content { get; set; }
        public string? Tags { get; set; }
        //public User Author { get; set; }
    }
}
