namespace API_CareerZONE.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Fullname { get; set; }
        public string? UserName { get; set; }
        public string? EmailAddress { get; set; }
        public string? Password { get; set; }
        public int? Role { get; set; }
        // Role: phan quyen trang web : 1 - admin / 2 - recruiters / 3 - candidates
    }
}
